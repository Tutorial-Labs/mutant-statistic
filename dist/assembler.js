"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppContainer = void 0;
const inversify_1 = require("inversify");
require("reflect-metadata");
const mutant_controller_1 = require("./controller/mutant-controller");
const types_1 = require("./types/types");
const mutant_database_service_impl_1 = require("./services/database/mutant-database-service-impl");
exports.AppContainer = new inversify_1.Container();
/* Component */
exports.AppContainer.bind(mutant_controller_1.MutantController).to(mutant_controller_1.MutantController);
exports.AppContainer.bind(types_1.APPLICATION.MutantDatabaseService).to(mutant_database_service_impl_1.MutantDatabaseServiceImpl);
//# sourceMappingURL=assembler.js.map