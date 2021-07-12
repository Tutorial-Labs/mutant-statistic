const {Model} = require('sequelize');

export class MutantDnaModel extends Model {
    constructor(private id: string, isMutant: number) {
        super();
        this.id = id;
        this.isMutant = isMutant;
    }
}