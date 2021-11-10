"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSpecificationUseCase = void 0;
var CreateSpecificationUseCase = /** @class */ (function () {
    function CreateSpecificationUseCase(specificationsRepository) {
        this.specificationsRepository = specificationsRepository;
    }
    CreateSpecificationUseCase.prototype.execute = function (_a) {
        var name = _a.name, description = _a.description;
        var specificationAlreadyExists = this.specificationsRepository.findByName(name);
        if (specificationAlreadyExists) {
            throw new Error('Already exists specification with this name');
        }
        this.specificationsRepository.create({ name: name, description: description });
    };
    return CreateSpecificationUseCase;
}());
exports.CreateSpecificationUseCase = CreateSpecificationUseCase;
