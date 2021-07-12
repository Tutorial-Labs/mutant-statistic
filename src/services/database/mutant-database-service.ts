import {MutantDnaModel} from "../../model/MutantDnaModel";

export interface MutantDatabaseService{
    executeGetData(): Promise<MutantDnaModel[]>;
}