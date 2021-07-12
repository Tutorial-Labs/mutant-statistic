"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MutantDatabaseServiceImpl = void 0;
const inversify_1 = require("inversify");
const config_sequelize_1 = require("../../config/sequelize/config.sequelize");
const MutantDnaModel_1 = require("../../model/MutantDnaModel");
const { Sequelize } = require('sequelize');
let MutantDatabaseServiceImpl = class MutantDatabaseServiceImpl {
    executeGetData() {
        const config = new config_sequelize_1.ConfigSequelize();
        return config.setupConnection()
            .then(() => {
            return MutantDnaModel_1.MutantDnaModel.findAll({
                group: ['isMutant'],
                attributes: ['isMutant', [Sequelize.fn('COUNT', 'isMutant'), 'MutantCount']],
            })
                .then((response) => {
                return Promise.resolve(response);
            })
                .catch((error) => {
                return Promise.reject(error);
            });
        })
            .catch(error => {
            return Promise.reject(error);
        });
    }
};
MutantDatabaseServiceImpl = __decorate([
    inversify_1.injectable()
], MutantDatabaseServiceImpl);
exports.MutantDatabaseServiceImpl = MutantDatabaseServiceImpl;
//# sourceMappingURL=mutant-database-service-impl.js.map