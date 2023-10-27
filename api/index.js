import app from './src/app.js';
import { sequelize } from './src/database/database.js';

// import './models/Empleado.js'
// import './models/Autorizacion.js'

const port = process.env.PORT || 3000; 

async function main() {
    try {
        await sequelize.sync({force: true});
        app.listen(port);
        console.log("localhost:", port)
    } catch (error) {
        console.error('Unable to concet to the database', error)
    }
}

main(); 


