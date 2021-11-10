"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listSpecificationsController = void 0;
var InMemorySpecificationsRepository_1 = require("../../repositories/implementations/InMemorySpecificationsRepository");
var ListSpecificationsController_1 = require("./ListSpecificationsController");
var ListSpecificationsUseCase_1 = require("./ListSpecificationsUseCase");
var specificationsRepository = InMemorySpecificationsRepository_1.InMemorySpecificationsRepository.getInstance();
var listSpecificationsUseCase = new ListSpecificationsUseCase_1.ListSpecificationsUseCase(specificationsRepository);
exports.listSpecificationsController = new ListSpecificationsController_1.ListSpecificationsController(listSpecificationsUseCase);
