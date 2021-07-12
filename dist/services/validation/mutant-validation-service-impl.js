"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MutantValidationServiceImpl = void 0;
const inversify_1 = require("inversify");
let MutantValidationServiceImpl = class MutantValidationServiceImpl {
    constructor() {
        this.mutanDna = ["AAAA", "CCCC", "GGGG", "TTTT"];
    }
    executeMutantService(req) {
        const dna = req.body.dna;
        const sequences = this.findSequences(dna);
        return sequences > 1 ?
            Promise.resolve(sequences) :
            Promise.reject(0);
    }
    findSequences(dna) {
        let x = 0;
        let y = 0;
        let s = 0;
        let b = 0;
        dna.forEach((sequence, index) => {
            x = this.getHorizontalSequence(sequence, x);
            y = this.getVerticalSequence(dna, index, y);
            s = this.getSlashSequence(dna, index, s);
            b = this.getBackSlashSequence(dna, index, b);
        });
        return x + y + s + b;
    }
    getHorizontalSequence(sequence, x) {
        this.mutanDna.forEach((value) => {
            x +=
                sequence.substr(0, 4) === value ||
                    sequence.substr(1, 4) === value ||
                    sequence.substr(2, 4) === value
                    ? 1
                    : 0;
        });
        return x;
    }
    getVerticalSequence(dna, index, y) {
        this.mutanDna.forEach((value) => {
            y +=
                dna[0][index] + dna[1][index] + dna[2][index] + dna[3][index] ===
                    value ||
                    dna[1][index] + dna[2][index] + dna[3][index] + dna[4][index] ===
                        value ||
                    dna[2][index] + dna[3][index] + dna[4][index] + dna[5][index] === value
                    ? 1
                    : 0;
        });
        return y;
    }
    getSlashSequence(dna, index, s) {
        if (index == 0) {
            this.mutanDna.forEach((value) => {
                s +=
                    dna[0][0] + dna[1][1] + dna[2][2] + dna[3][3] === value ||
                        dna[1][1] + dna[2][2] + dna[3][3] + dna[4][4] === value ||
                        dna[2][2] + dna[3][3] + dna[4][4] + dna[5][5] === value
                        ? 1
                        : 0;
            });
        }
        else if (index == 1) {
            this.mutanDna.forEach((value) => {
                s +=
                    dna[0][1] + dna[1][2] + dna[2][3] + dna[3][4] === value ||
                        dna[1][2] + dna[2][3] + dna[3][4] + dna[4][5] === value
                        ? 1
                        : 0;
                s +=
                    dna[1][0] + dna[2][1] + dna[3][2] + dna[4][3] === value ||
                        dna[2][1] + dna[3][2] + dna[4][3] + dna[5][4] === value
                        ? 1
                        : 0;
            });
        }
        else if (index == 2) {
            this.mutanDna.forEach((value) => {
                s += dna[0][2] + dna[1][3] + dna[2][4] + dna[3][5] === value ? 1 : 0;
                s += dna[2][0] + dna[3][1] + dna[4][2] + dna[5][3] === value ? 1 : 0;
            });
        }
        return s;
    }
    getBackSlashSequence(dna, index, b) {
        if (index == 0) {
            this.mutanDna.forEach((value) => {
                b +=
                    dna[0][5] + dna[1][4] + dna[2][3] + dna[3][2] === value ||
                        dna[1][4] + dna[2][3] + dna[3][2] + dna[4][1] === value ||
                        dna[2][3] + dna[3][2] + dna[4][1] + dna[5][0] === value
                        ? 1
                        : 0;
            });
        }
        else if (index == 1) {
            this.mutanDna.forEach((value) => {
                b +=
                    dna[0][4] + dna[1][3] + dna[2][2] + dna[3][1] === value ||
                        dna[1][3] + dna[2][2] + dna[3][1] + dna[4][0] === value
                        ? 1
                        : 0;
                b +=
                    dna[1][5] + dna[2][4] + dna[3][3] + dna[4][2] === value ||
                        dna[2][4] + dna[3][3] + dna[4][2] + dna[5][1] === value
                        ? 1
                        : 0;
            });
        }
        else if (index == 2) {
            this.mutanDna.forEach((value) => {
                b += dna[0][3] + dna[1][2] + dna[2][1] + dna[3][0] === value ? 1 : 0;
                b += dna[2][5] + dna[3][4] + dna[4][3] + dna[5][2] === value ? 1 : 0;
            });
        }
        return b;
    }
};
MutantValidationServiceImpl = __decorate([
    inversify_1.injectable()
], MutantValidationServiceImpl);
exports.MutantValidationServiceImpl = MutantValidationServiceImpl;
//# sourceMappingURL=mutant-validation-service-impl.js.map