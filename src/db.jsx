import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "19972713Rt@",
    database: "cadastro_usuario"
});