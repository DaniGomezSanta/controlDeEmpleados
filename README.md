# controlDeEmpleados

## DESCRIPCION 

Esta es una pagina web en la cual se pueden registar la hora de entrada y salida de los empleados de la empresa Empresa Pro S.A.S, e igualmente hay una opcion para el administrador en el cual puede acceder a una tabla con la informacion de sus empleados, en la cual adicionalmente se le permite crear nuevos empleados en la base de datos ademas tiene la opcion para acceder a la tabla de registro de accesos de empleados en la cual puede observar la hora de entrada y la hora de salida de los empleados y en la fecha que se hicieron estos registros.

## FUNCIONAMIENTO

Lo primero que encontraras es el formulario de registro de ingresos y salidas del empleado, para ingresar tendras que digitar tu cedula, la cual debe estar guardada en la base de datos porque si no lo esta te arrogara una alerta como empleado no autorizado.
Este formulario tiene validaciones como: 
* Por un ingreso debe haber una salida 
* Debe ser llenado todo el formulario de lo contrario no se enviara.

En cuanto a la opcion del administrador podras observar la tabla de empleados, y hay un boton el cual te llevara al formulario de crear empleado el cual tiene validaciones como:
* Debes llenar todo el formulario de lo contrario no deja enviar la informacion
* En Nombre, Apellidos, Tipo de Documento unicamente permite escribir letras o sino no se podra enviar el formulario
* En numero de documento unicamnete permite introducir numeros de lo contrario no dejara enviar el formulario.
* Debes especificar si el empleado esta activo o inactivo lo cual definira si el empleado esta o no autorizado para ingresar.
* En la tabla de accesos observaras los ingresos y salidas registradas por los empleados y la fecha.

En cuanto a la tabla de informacion de empleados hay informacion de dos empleados que siempre peramenceran ya que estan definidas en el back.

En cuanto a la tabla de registro de accesos deberas primero registrar con una cedula autorizada un ingreso y una salida desde el formulario de accesos para poder ver la informacion

# REQUISITOS DEL SISTEMA
Deberas tener en tu equipo descargada la ultima version de node.js, visual Studio Code, postgreSQL o PgAdmin.

## INSTALACION

1. Clona el repositorio git clone https://github.com/DaniGomezSanta/controlDeEmpleados.git
2. Navega al direcctorio del proyecto : 
    para el back deberas ir a: 'cd /api'
    para el front ir a : 'cd /client'
3. Instala las dependencias: 'npm install'
4. Configura la base de datos: 
Debes descargar postgreSQL, debes crear la base de datos con el nombre supervisa, entras al archivo api/src/database/database.js  y configuararlo con tus credenciales 
5. Inicializa la aplicacion: npm run dev, tanto en api como en client.
6. Abre tu navegador web y visita 'http://localhost:5173/'






