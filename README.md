# Internet-Sales

![NPM](https://img.shields.io/npm/l/inquirer?style=plastic) ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath) ![npm collaborators](https://img.shields.io/npm/collaborators/inquirer) ![Dependents (via libraries.io)](https://img.shields.io/librariesio/dependents/npm/inquirer) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

## Description

This project is a web application that uses Node an Express to build the backend (db schema and REST API) for an e-commerce site. The database is built using MySQL and the Sequelize ORM. The application is deployed to Heroku and uses the JawsDB add-on for the MySQL database. Developer simply took a working Express.js API and configured it to use Sequelize to interact with a MySQL database. I learned how to use the Sequelize CLI to create models and seed data to a MySQL database, and how to sync Sequelize models to a MySQL database.

Repository: https://github.com/brittanyb89/Internet-Sales
Watch demo functionality here: https://watch.screencastify.com/v/Ra38LX4p14kLHQo2kNbu

# User Story

AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

# Acceptance Criteria

GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database

## Installation/Usage

1. To install the necessary dependencies, run the following command:

npm i
npm i dotenv
npm i express
npm i mysql2
npm i sequelize

2. To create the database:

mysql -u root -p
source db/schema.sql;
show databases;
quit

3. To seed the database:

npm run seed

4. To run the application:

npm start

From there, you can view the application in the browser at http://localhost:3001/. You can also use Insomnia Core to test the API endpoints.

## Mock-Up

The following animation demonstrates the application functionality:

## License

![NPM](https://img.shields.io/npm/l/inquirer?style=plastic)

MIT License

Copyright (c) 2022 Brittany Burton

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
