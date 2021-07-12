import {Container} from "inversify";
import "reflect-metadata";
import {MutantController} from "./controller/mutant-controller";
import {APPLICATION} from "./types/types";
import {MutantDatabaseService} from "./services/database/mutant-database-service";
import {MutantDatabaseServiceImpl} from "./services/database/mutant-database-service-impl";


export const AppContainer = new Container();

/* Component */
AppContainer.bind<MutantController>(MutantController).to(MutantController);
AppContainer.bind<MutantDatabaseService>(APPLICATION.MutantDatabaseService).to(MutantDatabaseServiceImpl);

