"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCategoriesController = void 0;
var ListCategoriesController = /** @class */ (function () {
    function ListCategoriesController(listCategoriesUseCase) {
        this.listCategoriesUseCase = listCategoriesUseCase;
    }
    ListCategoriesController.prototype.handle = function (req, res) {
        var result = this.listCategoriesUseCase.execute();
        return res.json(result);
    };
    return ListCategoriesController;
}());
exports.ListCategoriesController = ListCategoriesController;
