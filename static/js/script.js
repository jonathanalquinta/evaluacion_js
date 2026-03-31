/*1. Módulo de Tesorería: Pago de Permisos (Cálculos y Retorno)
El vecino ingresa el monto de su permiso de circulación para saber cuánto pagará tras el descuento municipal.
Lógica: Si el monto es mayor a $70.000, el descuento es del 15%. Si es menor, es del 5%.
Regla: La Función Principal debe mostrar el total a pagar con un signo de peso ($). */

function moduloTesoreria() {
    let pago = pagosPermisos(permiso)
    let monto = parseFloat(input.value)
    const container = document.getElementById("Container1");
    const result = document.getElementById("result1");
    const input = document.getElementById("input1");

    let descuento = 0;

    if (pago > 70000) {
        descuento = pago * 0.15; // 15% de descuento
    } else {
        descuento = pago * 0.05; // 5% de descuento
    }

    let total = pago - descuento;
    alert(`Su monto a pagar es de $${total}`);
}

/* 2. Módulo de Salud: Fila de Vacunación (Arreglos y Prioridad)
Gestión de nombres en la fila de espera del consultorio local.
Lógica: * Botón Normal: Agrega el nombre al final de la lista (push).
Botón Urgencia: Agrega el nombre al inicio de la lista (unshift).
Regla: El resultado debe mostrarse como una lista ordenada en el HTML. <ol>*/

let pacientes = ["Carlos", "Maria", "Diego"];
function agregarUrgencia(nombre) {
    pacientes.unshift(nombre);
    return pacientes.join(", ");
};

function ejercicio_2() {
    const container = document.getElementById("container2");
    const result = document.getElementById("result2");
    const input = document.getElementById("input2");
    if (input.value !== "") {
        let nombre = input.value;
        let resultado = agregarUrgencia(nombre);
        result.textContent = resultado;
        input.value = "";
        container.classList.remove("d-none");
    } else {
        alert("No puede estar vacío");
    };
}

let asistencia = [];
function agregarLista(nombre) {
    pacientes.push(nombre);
    return pacientes.join(", ");
};

function ejercicio_02() {
    const container = document.getElementById("container2");
    const result = document.getElementById("result2");
    const input = document.getElementById("input2");
    let nombre = input.value;
    let resultado = agregarLista(nombre); // --> Llamado a la función con envío de parámetros
    result.textContent = resultado;
    input.value = "";
    container.classList.remove("d-none");
}; 
