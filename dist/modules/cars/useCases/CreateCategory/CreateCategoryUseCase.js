"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryUseCase = void 0;
var CreateCategoryUseCase = /** @class */ (function () {
    function CreateCategoryUseCase(categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }
    CreateCategoryUseCase.prototype.execute = function (_a) {
        var name = _a.name, description = _a.description;
        var categoryAlreadyExists = this.categoriesRepository.findByName(name);
        if (categoryAlreadyExists) {
            throw new Error('Already exists category with this name!');
        }
        this.categoriesRepository.create({ name: name, description: description });
    };
    return CreateCategoryUseCase;
}());
exports.CreateCategoryUseCase = CreateCategoryUseCase;
