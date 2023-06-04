import app from './app.js'; 
import { sequelize } from './database/database.js';

// import './models/Empleado.js'
// import './models/Autorizacion.js'

async function main() {
    try {
        await sequelize.sync({force: true});
        app.listen(3000);
        console.log("localhost:", 3000)
    } catch (error) {
        console.error('Unable to concet to the database', error)
    }
}

main(); 


