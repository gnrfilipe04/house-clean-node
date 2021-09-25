import Sequelize from "sequelize";

import database from "../db";

const House = database.define("house", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    adress: {
        type: Sequelize.STRING,
    },
    description: Sequelize.STRING,
});

export { House };
