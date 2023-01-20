const router = require("express").Router();
const { Product, Category, Tag, ProductTag } = require("../../models.js");

// The `/api/products` endpoint

// get all products
router.get("/", (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  Product.findAll({
    attributes: ["id", "productName", "price", "stock", "categoryId"],
    include: [
      {
        model: Category,
        attributes: ["id", "categoryName"],
      },
      {
        model: Tag,
        attributes: ["id", "tagName"],
      },
    ],
  })
    .then((dbProductData) => res.json(dbProductData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one product
router.get("/:id", (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  Product.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "productName", "price", "stock", "categoryId"],
    include: [
      {
        model: Category,
        attributes: ["id", "categoryName"],
      },
      {
        model: Tag,
        attributes: ["id", "tagName"],
      },
    ],
  })
    .then((dbProductData) => {
      if (!dbProductData) {
        res.status(404).json({ message: "No product found with this id" });
        return;
      }

      res.json(dbProductData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create new product
router.post("/", (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  Product.create(req.body)
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tagId) => ({
          productId: product.id,
          tagId,
        }));
        return ProductTag.bulkCreate(productTagIdArr);
      }

      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update product
router.put("/:id", (req, res) => {
  // update product data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    // eslint-disable-next-line no-unused-vars
    .then((product) =>
      // find all associated tags from ProductTag
      ProductTag.findAll({ where: { productId: req.params.id } })
    )
    .then((productTags) => {
      // get list of current tagIds
      const productTagIds = productTags.map(({ tagId }) => tagId);
      // create filtered list of new tagIds
      const newProductTags = req.body.tagIds
        .filter((tagId) => !productTagIds.includes(tagId))
        .map((tagId) => ({
          productId: req.params.id,
          tagId,
        }));
      // figure out which ones to remove
      const productTagsToRemove = productTags
        .filter(({ tagId }) => !req.body.tagIds.includes(tagId))
        .map(({ id }) => id);

      // run both actions
      return Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    })
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete one product by its `id` value
  Product.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbProductData) => {
      if (!dbProductData) {
        res.status(404).json({ message: "No product found with this id" });
        return;
      }

      res.json(dbProductData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
