"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCategoriesUseCase = void 0;
var ListCategoriesUseCase = /** @class */ (function () {
    function ListCategoriesUseCase(categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }
    ListCategoriesUseCase.prototype.execute = function () {
        return this.categoriesRepository.list();
    };
    return ListCategoriesUseCase;
}());
exports.ListCategoriesUseCase = ListCategoriesUseCase;
