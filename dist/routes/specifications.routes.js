"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.specificationsRouter = void 0;
var express_1 = require("express");
var CreateSpecification_1 = require("../modules/cars/useCases/CreateSpecification");
var ListSpecifications_1 = require("../modules/cars/useCases/ListSpecifications");
exports.specificationsRouter = (0, express_1.Router)();
exports.specificationsRouter.get('/', function (req, res) {
    return ListSpecifications_1.listSpecificationsController.handle(req, res);
});
exports.specificationsRouter.post('/', function (req, res) {
    return CreateSpecification_1.createSpecificationController.handle(req, res);
});
