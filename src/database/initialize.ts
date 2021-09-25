import database from "./db";

async function initialize(): Promise<void> {
    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

export { initialize };
