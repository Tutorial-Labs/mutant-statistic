"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_express_utils_1 = require("inversify-express-utils");
const express_actuator_1 = __importDefault(require("express-actuator"));
const bodyParser = __importStar(require("body-parser"));
const assembler_1 = require("./assembler");
// tslint:disable-next-line:no-var-requires
require('dotenv').config();
const server = new inversify_express_utils_1.InversifyExpressServer(assembler_1.AppContainer);
const PORT = process.env.PORT || 3010;
server.setConfig((app) => {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(express_actuator_1.default());
});
const serverInstance = server.build();
serverInstance.listen(PORT, () => {
    console.log('Server running on port %d, version', PORT, process.env.VERSION);
});
//# sourceMappingURL=index.js.map