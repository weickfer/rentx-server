"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.routes);
app.use(function (error, req, res, _) {
    if (error instanceof Error) {
        return res.status(400).json({
            error: error.message
        });
    }
});
app.listen(3333, function () { return console.log('Server online!'); });
