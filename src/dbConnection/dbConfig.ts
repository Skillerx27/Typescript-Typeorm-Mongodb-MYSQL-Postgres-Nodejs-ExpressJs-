import {createConnections} from "typeorm";

const connection = createConnections([{
    name: "firstconnection",
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "shafa",
    entities: [__dirname + "/entity/*{.js,.ts}"],
    synchronize: true
}]);

export default connection;