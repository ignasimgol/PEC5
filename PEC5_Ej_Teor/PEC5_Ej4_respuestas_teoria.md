## a) ¿Qué son, para qué sirven y cómo se utilizan FormControl, FormGroup y FormBuilder?

**FormControl**
Es una clase que representa un único elemento de formulario.  
Permite rastrear el valor y el estado de validación de un campo en un formulario.  

**FormGroup**
Es una clase que agrupa varios controles de formulario (FormControl) bajo un solo objeto.  

Permite gestionar múltiples campos como una unidad y validar el estado global del grupo de controles.  

**FormBuilder**
Es un servicio que facilita la creación de instancias de FormControl y FormGroup.  
 
Simplifica la creación de formularios dinámicos, inicializando controles y grupos con valores y validadores de forma concisa.  

**Relación entre ellos**
- FormControl maneja un único campo de formulario.  
- FormGroup organiza varios FormControl como un conjunto.  
- FormBuilder simplifica la creación de FormControl y FormGroup.  

## b) Busca en la página oficial de Angular (o utiliza un recurso de O’Reilly) en el que se especifiquen todos los validadores que incluye Angular para ser utilizados en los formularios reactivos. Construye una tabla de resumen de estos.

| Validador                 | Descripción                                                  |
|---------------------------|-------------------------------------------------------------|
| `Validators.required`     | Verifica que el control no esté vacío.                      |
| `Validators.minLength`    | Valida que la longitud mínima del valor sea un número específico. |
| `Validators.maxLength`    | Valida que la longitud máxima del valor no exceda un número específico. |
| `Validators.min`          | Verifica que el valor sea mayor o igual a un número específico. |
| `Validators.max`          | Verifica que el valor sea menor o igual a un número específico. |
| `Validators.pattern`      | Verifica que el valor coincida con una expresión regular dada. |
| `Validators.email`        | Valida que el valor tenga formato de correo electrónico.   |
| `Validators.nullValidator`| Validador que no realiza ninguna validación.               |


## c) ¿Qué son, cuáles son y para qué sirven los estados en los formularios reactivos?

### Estados en Formularios Reactivos

Los estados en formularios reactivos en Angular son propiedades que indican el estado actual de un control de formulario o de un grupo de controles. Estos estados son fundamentales para manejar la validación y la interacción del usuario con el formulario.

#### Tipos de Estados

1. **dirty**: Indica si el control ha sido modificado por el usuario. Un control se considera "dirty" si su valor ha cambiado desde que se inicializó.
2. **pristine**: Es el opuesto de dirty. Un control es "pristine" si no ha sido modificado por el usuario.
3. **touched**: Indica si el control ha sido enfocado y luego desenfocado. Esto permite saber si el usuario ha interactuado con el control.
4. **untouched**: Es el opuesto de touched. Un control es "untouched" si no ha sido enfocado.
5. **valid**: Indica si el control o grupo de controles es válido, es decir, cumple con todas las validaciones definidas.
6. **invalid**: Es el opuesto de valid. Un control es "invalid" si no cumple con las validaciones definidas.
7. **enabled**: Indica si el control está habilitado y puede ser interactuado por el usuario.
8. **disabled**: Es el opuesto de enabled. Un control es "disabled" si no puede ser interactuado por el usuario.

#### Funciones de los Estados

- **Gestión de Validaciones**: Permiten mostrar mensajes de error o advertencias en función del estado de validación de cada control.
- **Interacción del Usuario**: Facilitan la interacción del usuario al saber si ha modificado o no los campos, lo que ayuda a mejorar la experiencia de usuario.
- **Condiciones Lógicas**: Pueden ser utilizados para habilitar o deshabilitar botones y otros controles en función del estado del formulario.

Estos estados ayudan a desarrollar formularios más dinámicos y responsivos, brindando información clara sobre el estado de los inputs y mejorando la validación y la experiencia del usuario.