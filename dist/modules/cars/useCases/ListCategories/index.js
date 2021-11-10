"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listCategoriesController = void 0;
var InMemoryCategoriesRepository_1 = require("../../repositories/implementations/InMemoryCategoriesRepository");
var ListCategoriesUseCase_1 = require("./ListCategoriesUseCase");
var ListCategoriesController_1 = require("./ListCategoriesController");
var categoriesRepository = InMemoryCategoriesRepository_1.InMemoryCategoriesRepository.getInstance();
var listCategoriesUseCase = new ListCategoriesUseCase_1.ListCategoriesUseCase(categoriesRepository);
exports.listCategoriesController = new ListCategoriesController_1.ListCategoriesController(listCategoriesUseCase);
