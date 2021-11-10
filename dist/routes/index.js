"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var express_1 = require("express");
var categories_routes_1 = require("./categories.routes");
var specifications_routes_1 = require("./specifications.routes");
exports.routes = (0, express_1.Router)();
exports.routes.use('/categories', categories_routes_1.categoriesRouter);
exports.routes.use('/specifications', specifications_routes_1.specificationsRouter);
