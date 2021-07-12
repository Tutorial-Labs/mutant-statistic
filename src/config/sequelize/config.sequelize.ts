import {Sequelize} from "sequelize";
import {InitModel} from "./init.model";

export class ConfigSequelize {

    // @ts-ignore
    private static _instance: ConfigSequelize = null;
    // @ts-ignore
    public sequelize: Sequelize = null;

    constructor() {
        if (!ConfigSequelize._instance) {
            ConfigSequelize._instance = this;
        } else {
            return ConfigSequelize._instance
        }
    }

    public static getInstance() {
        return ConfigSequelize._instance;
    }

    public async setupConnection() {
        if (this.sequelize) {
            return;
        }
        await this.setupAwsConnection();
        InitModel(this.sequelize);
    }

    private async setupAwsConnection() {
        try {
            // @ts-ignore
            this.sequelize = new Sequelize(process.env.RDS_DATABASE, process.env.RDS_USER_NAME, process.env.RDS_PASSWORD, {
                host: process.env.RDS_HOSTNAME,
                dialect: 'mariadb'
            });
        } catch (e) {
            console.error(e);
            throw e
        }
    }

}
