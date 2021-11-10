"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSpecificationsUseCase = void 0;
var ListSpecificationsUseCase = /** @class */ (function () {
    function ListSpecificationsUseCase(specificationsRepository) {
        this.specificationsRepository = specificationsRepository;
    }
    ListSpecificationsUseCase.prototype.execute = function () {
        return this.specificationsRepository.list();
    };
    return ListSpecificationsUseCase;
}());
exports.ListSpecificationsUseCase = ListSpecificationsUseCase;
