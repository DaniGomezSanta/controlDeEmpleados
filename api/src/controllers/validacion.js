export default function verificarCoherenciaMovimientos(tablero) {
    const movimientoEmpleado = new Map();

    for( const autorizacion of tablero) {
        const empleadoId = autorizacion.empleadoId;
        const sentido = autorizacion.horarioSalida ? 'Salida' : 'Ingreso';

        if(!movimientoEmpleado.has(empleadoId)) {
            movimientoEmpleado.set(empleadoId, sentido);
        } else {
            const sentidoAnterior = movimientoEmpleado.get(empleadoId);
            if(sentido ===  sentidoAnterior) {
                return false;
            }

            movimientoEmpleado.set(empleadoId, sentido)
        }
    }

}