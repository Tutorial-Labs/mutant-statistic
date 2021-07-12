"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitModel = void 0;
const MutantDnaModel_1 = require("../../model/MutantDnaModel");
const { DataTypes } = require('sequelize');
function InitModel(sequelize) {
    MutantDnaModel_1.MutantDnaModel.init({
        id: {
            type: DataTypes.TEXT,
            primaryKey: true
        },
        ismutant: DataTypes.BOOLEAN,
    }, {
        tableName: 'mutant-dna',
        createdAt: false,
        updatedAt: false,
        sequelize,
    });
}
exports.InitModel = InitModel;
//# sourceMappingURL=init.model.js.map