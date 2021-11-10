"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSpecificationController = void 0;
var CreateSpecificationController = /** @class */ (function () {
    function CreateSpecificationController(createSpecificationUseCase) {
        this.createSpecificationUseCase = createSpecificationUseCase;
    }
    CreateSpecificationController.prototype.handle = function (req, res) {
        var _a = req.body, name = _a.name, description = _a.description;
        this.createSpecificationUseCase.execute({ name: name, description: description });
        return res.status(201).send();
    };
    return CreateSpecificationController;
}());
exports.CreateSpecificationController = CreateSpecificationController;
