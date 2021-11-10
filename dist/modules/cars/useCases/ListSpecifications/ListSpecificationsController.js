"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSpecificationsController = void 0;
var ListSpecificationsController = /** @class */ (function () {
    function ListSpecificationsController(listSpecificationsUseCase) {
        this.listSpecificationsUseCase = listSpecificationsUseCase;
    }
    ListSpecificationsController.prototype.handle = function (req, res) {
        var result = this.listSpecificationsUseCase.execute();
        return res.json(result);
    };
    return ListSpecificationsController;
}());
exports.ListSpecificationsController = ListSpecificationsController;
