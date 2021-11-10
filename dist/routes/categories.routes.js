"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRouter = void 0;
var express_1 = require("express");
var CreateCategory_1 = require("../modules/cars/useCases/CreateCategory");
var ListCategories_1 = require("../modules/cars/useCases/ListCategories");
exports.categoriesRouter = (0, express_1.Router)();
exports.categoriesRouter.get('/', function (req, res) {
    return ListCategories_1.listCategoriesController.handle(req, res);
});
exports.categoriesRouter.post('/', function (req, res) {
    return CreateCategory_1.createCategoryController.handle(req, res);
});
