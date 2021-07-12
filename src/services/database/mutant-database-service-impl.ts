import {MutantDatabaseService} from "./mutant-database-service";
import {injectable} from "inversify";
import {ConfigSequelize} from "../../config/sequelize/config.sequelize";
import {MutantDnaModel} from "../../model/MutantDnaModel";
const {Sequelize} = require('sequelize');

@injectable()
export class MutantDatabaseServiceImpl implements MutantDatabaseService {

    executeGetData(): Promise<any> {
        const config = new ConfigSequelize();
        return config.setupConnection()
            .then(() => {
                return MutantDnaModel.findAll({
                    group: ['isMutant'],
                    attributes: ['isMutant', [Sequelize.fn('COUNT', 'isMutant'), 'MutantCount']],
                })
                    .then((response: any) => {
                        return Promise.resolve(response);
                    })
                    .catch((error: any) => {
                        return Promise.reject(error);
                    })
            })
            .catch(error => {
                return Promise.reject(error);
            });
    }

}