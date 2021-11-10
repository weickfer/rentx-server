"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategoryController = void 0;
var InMemoryCategoriesRepository_1 = require("../../repositories/implementations/InMemoryCategoriesRepository");
var CreateCategoryUseCase_1 = require("./CreateCategoryUseCase");
var CreateCategoryController_1 = require("./CreateCategoryController");
var categoriesRepository = InMemoryCategoriesRepository_1.InMemoryCategoriesRepository.getInstance();
var createCategoryUseCase = new CreateCategoryUseCase_1.CreateCategoryUseCase(categoriesRepository);
exports.createCategoryController = new CreateCategoryController_1.CreateCategoryController(createCategoryUseCase);
