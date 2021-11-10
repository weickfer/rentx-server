"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryCategoriesRepository = void 0;
var Category_1 = require("../../models/Category");
var InMemoryCategoriesRepository = /** @class */ (function () {
    function InMemoryCategoriesRepository() {
        this.categories = [];
    }
    InMemoryCategoriesRepository.getInstance = function () {
        if (!this.INSTANCE) {
            this.INSTANCE = new InMemoryCategoriesRepository();
        }
        return this.INSTANCE;
    };
    InMemoryCategoriesRepository.prototype.create = function (_a) {
        var name = _a.name, description = _a.description;
        var category = new Category_1.Category();
        Object.assign(category, {
            name: name,
            description: description,
            created_at: new Date()
        });
        this.categories.push(category);
    };
    InMemoryCategoriesRepository.prototype.list = function () {
        return this.categories;
    };
    InMemoryCategoriesRepository.prototype.findByName = function (name) {
        return this.categories.find(function (category) { return category.name === name; });
    };
    return InMemoryCategoriesRepository;
}());
exports.InMemoryCategoriesRepository = InMemoryCategoriesRepository;
