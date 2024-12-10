## a) Diferencias entre formularios dirigidos por template y reactivos

### Formularios dirigidos por template:
La lógica está en el HTML y son ideales para formularios simples.

Utilizan `ngModel` para la vinculación bidireccional, las validaciones están definidas en la plantilla y el código	es menos escalable.

### Formularios reactivos:
La lógica está en el TypeScript del componente y son mejores para formularios complejos/dinámicos.

El método de control es programático y preciso. Las validaciones están configuradas en el código, que es más estructurado y escalable.

---

## b) ¿Qué son, para qué sirven y cómo se utilizan las directivas ngModel y ngModelChange?

### `ngModel`: 

Es una directiva para vinculación bidireccional de datos que sincroniza la vista y el modelo.

### `ngModelChange`:
Evento que detecta cambios en el modelo ejecutando la lógica al cambiar el valor.

---

## c) ¿Qué son, cuáles son y para qué sirven los estados en los formularios dirigidos por templates?

Los estados son propiedades que Angular proporciona para rastrear la condición y el comportamiento de los controles en un formulario dirigido por templates.

### Principales estados:
1. **`valid` / `invalid`**: Indica si el control cumple con las validaciones definidas.
2. **`touched` / `untouched`**: Muestra si el usuario ha interactuado con el control.
3. **`dirty` / `pristine`**: Indica si el valor del control ha sido modificado.

### Para qué sirven:
- **Validaciones dinámicas**: Permiten mostrar mensajes de error o estilos condicionales basados en la interacción del usuario.
- **Retroalimentación visual**: Mejoran la experiencia del usuario indicando errores o validaciones en tiempo real.
- **Gestión de la lógica del formulario**: Ayudan a implementar comportamientos personalizados según los estados.

---

## d) ¿Qué ventajas aportan los FormGroup en la composición de formularios?

`FormGroup` es una clase que agrupa uno o más controles de formulario (`FormControl`) en una estructura jerárquica. Permite manejar los valores y estados de un conjunto de campos como si fueran una sola unidad.

### Ventajas de usar `FormGroup`:
1. **Organización de controles**: Agrupa campos relacionados, mejorando la legibilidad y el mantenimiento del formulario.
2. **Validaciones a nivel de grupo**: Permite definir reglas de validación que dependan de múltiples controles (e.g., validar que dos contraseñas coincidan).
3. **Acceso centralizado a los valores**: Proporciona un único punto de acceso para obtener o modificar los datos de los controles agrupados.
4. **Facilidad para formularios dinámicos**: Simplifica la creación y gestión de formularios que cambian dinámicamente en tiempo de ejecución.
5. **Estado y eventos globales**: Permite manejar el estado (`valid`, `dirty`, `touched`, etc.) de todo el grupo como un conjunto.
