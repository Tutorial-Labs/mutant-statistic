"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MutantDnaModel = void 0;
const { Model } = require('sequelize');
class MutantDnaModel extends Model {
    constructor(id, isMutant) {
        super();
        this.id = id;
        this.id = id;
        this.isMutant = isMutant;
    }
}
exports.MutantDnaModel = MutantDnaModel;
//# sourceMappingURL=MutantDnaModel.js.map