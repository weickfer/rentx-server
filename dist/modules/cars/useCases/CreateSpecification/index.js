"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSpecificationController = void 0;
var InMemorySpecificationsRepository_1 = require("../../repositories/implementations/InMemorySpecificationsRepository");
var CreateSpecificationUseCase_1 = require("./CreateSpecificationUseCase");
var CreateSpecificationController_1 = require("./CreateSpecificationController");
var specificationsRepository = InMemorySpecificationsRepository_1.InMemorySpecificationsRepository.getInstance();
var createSpecificationUseCase = new CreateSpecificationUseCase_1.CreateSpecificationUseCase(specificationsRepository);
exports.createSpecificationController = new CreateSpecificationController_1.CreateSpecificationController(createSpecificationUseCase);
