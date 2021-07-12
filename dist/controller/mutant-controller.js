"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MutantController = void 0;
const inversify_express_utils_1 = require("inversify-express-utils");
const inversify_1 = require("inversify");
const types_1 = require("../types/types");
let MutantController = class MutantController {
    constructor(mutantDatabaseService) {
        this.mutantDatabaseService = mutantDatabaseService;
    }
    getList(req, res) {
        return this.mutantDatabaseService.executeGetData()
            .then(response => {
            // @ts-ignore
            const noMutants = response.filter(count => (count.id.isMutant) === 0);
            // @ts-ignore
            const mutants = response.filter(count => (count.id.isMutant) === 1);
            // @ts-ignore
            const ratio = parseInt(noMutants.map(sample => sample.id.MutantCount)) / parseInt(mutants.map(sample => sample.id.MutantCount));
            res.status(200);
            res.send({
                // @ts-ignore
                count_mutant_dna: mutants.map(sample => sample.id.MutantCount)[0],
                // @ts-ignore
                count_human_dna: noMutants.map(sample => sample.id.MutantCount)[0],
                ratio: ratio.toFixed(2)
            });
            return res;
        })
            .catch(error => {
            console.log(error);
            res.status(503);
            res.send('{}');
            return res;
        });
    }
};
__decorate([
    inversify_express_utils_1.httpPost("stats/"),
    __param(0, inversify_express_utils_1.request()),
    __param(1, inversify_express_utils_1.response())
], MutantController.prototype, "getList", null);
MutantController = __decorate([
    inversify_express_utils_1.controller("/"),
    __param(0, inversify_1.inject(types_1.APPLICATION.MutantDatabaseService))
], MutantController);
exports.MutantController = MutantController;
//# sourceMappingURL=mutant-controller.js.map