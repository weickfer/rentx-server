"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemorySpecificationsRepository = void 0;
var Specification_1 = require("../../models/Specification");
var InMemorySpecificationsRepository = /** @class */ (function () {
    function InMemorySpecificationsRepository() {
        this.specifications = [];
    }
    InMemorySpecificationsRepository.getInstance = function () {
        if (!this.INSTANCE) {
            this.INSTANCE = new InMemorySpecificationsRepository();
        }
        return this.INSTANCE;
    };
    InMemorySpecificationsRepository.prototype.create = function (_a) {
        var name = _a.name, description = _a.description;
        var specification = new Specification_1.Specification();
        Object.assign(specification, {
            name: name,
            description: description,
            created_at: new Date()
        });
        this.specifications.push(specification);
    };
    InMemorySpecificationsRepository.prototype.findByName = function (name) {
        return this.specifications.find(function (specification) { return specification.name === name; });
    };
    InMemorySpecificationsRepository.prototype.list = function () {
        return this.specifications;
    };
    return InMemorySpecificationsRepository;
}());
exports.InMemorySpecificationsRepository = InMemorySpecificationsRepository;
