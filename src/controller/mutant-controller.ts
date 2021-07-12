import * as express from 'express';
import {interfaces, controller, httpPost, request, response} from "inversify-express-utils";
import {inject} from "inversify";
import {APPLICATION} from "../types/types";
import {MutantDatabaseService} from "../services/database/mutant-database-service";


@controller("/")
export class MutantController implements interfaces.Controller {

    constructor(@inject(APPLICATION.MutantDatabaseService)
                private mutantDatabaseService: MutantDatabaseService) {
    }

    @httpPost("stats/")
    public getList(@request() req: express.Request, @response() res: express.Response) {
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

}

