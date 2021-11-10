"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Specification = void 0;
var uuid_1 = require("uuid");
var Specification = /** @class */ (function () {
    function Specification() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
    return Specification;
}());
exports.Specification = Specification;
