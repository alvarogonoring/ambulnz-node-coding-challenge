import {DataSource} from "typeorm";
import {Pizza} from "@/modules/pizzerias/entities/Pizza";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "docker",
    password: "ambulnz_pizzas",
    database: "ambulnz_pizzas",
    entities: [Pizza],
    migrations: ["./src/db/migrations/*.ts"]
})

AppDataSource.initialize()
    .then(() => {
        console.log("MySQL Database has been initialized successfully!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })