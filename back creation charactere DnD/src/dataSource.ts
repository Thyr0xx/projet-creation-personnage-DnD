import { DataSource, DataSourceOptions } from "typeorm";
import dotenv from "dotenv";
import "reflect-metadata";
dotenv.config();

function getEnvVariable(key : string, defaultValue?: string):string{
    const value = process.env[key];
    if (value === undefined || value ===""){
        if (defaultValue !== undefined){
            return defaultValue;
        }
        throw new Error(`La variable d'environnement ${key} n'est pas définie.`)
    }
    return value
}

const portString = getEnvVariable("PORT_db", "3306");
const portNumber = Number(portString);
if (isNaN(portNumber)){
    throw new Error( `La variable d'environnement PORT_db doit être un nombre valide. Valeur actuelle : ${portString}`)
}

const commonConfig: DataSourceOptions = {
        type : "mysql",
        host : getEnvVariable("HOST_db"),
        port : portNumber,
        username :getEnvVariable("USER_db"),
        password : getEnvVariable("PASSWORD_db"),
        database : getEnvVariable("NAME_db"),
        logging : false,
        entities: ["./src/entity/*{.ts,.js}"],
        migrations: [],
        subscribers: [],
    }

//DataSource for test
export const AppDataSourceTest = new DataSource ({
    ...commonConfig,
    synchronize : true,
})

//DataSource for prod
export const AppDataSource = new DataSource ({
    ...commonConfig,
    synchronize : false,
})

export function getDataSource():DataSource{
    if (process.env.NODE_ENV === "test") {
        return AppDataSourceTest
    }
    return AppDataSource
}