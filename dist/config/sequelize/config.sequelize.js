"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigSequelize = void 0;
const sequelize_1 = require("sequelize");
const init_model_1 = require("./init.model");
class ConfigSequelize {
    constructor() {
        // @ts-ignore
        this.sequelize = null;
        if (!ConfigSequelize._instance) {
            ConfigSequelize._instance = this;
        }
        else {
            return ConfigSequelize._instance;
        }
    }
    static getInstance() {
        return ConfigSequelize._instance;
    }
    setupConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.sequelize) {
                return;
            }
            yield this.setupAwsConnection();
            init_model_1.InitModel(this.sequelize);
        });
    }
    setupAwsConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // @ts-ignore
                this.sequelize = new sequelize_1.Sequelize(process.env.RDS_DATABASE, process.env.RDS_USER_NAME, process.env.RDS_PASSWORD, {
                    host: process.env.RDS_HOSTNAME,
                    dialect: 'mariadb'
                });
            }
            catch (e) {
                console.error(e);
                throw e;
            }
        });
    }
}
exports.ConfigSequelize = ConfigSequelize;
// @ts-ignore
ConfigSequelize._instance = null;
//# sourceMappingURL=config.sequelize.js.map