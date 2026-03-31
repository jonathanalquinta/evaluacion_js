/*1. Módulo de Tesorería: Pago de Permisos (Cálculos y Retorno)
El vecino ingresa el monto de su permiso de circulación para saber cuánto pagará tras el descuento municipal.
Lógica: Si el monto es mayor a $70.000, el descuento es del 15%. Si es menor, es del 5%.
Regla: La Función Principal debe mostrar el total a pagar con un signo de peso ($). */

function moduloTesoreria() {
    let valor = document.getElementById("input1").value;
    let numero = parseFloat(valor);
    let resultado = document.getElementById("result1");
    let contenedor = document.getElementById("container1");
    contenedor.classList.remove("d-none");
    if (isNaN(numero)) {
        resultado.textContent = "Por favor ingresa un número válido";
        return;
    }
    let porcentaje = calcularMonto(numero);
    resultado.textContent = `Resultado: ${porcentaje} $`;

}
function calcularMonto(numero) {
    if (numero > 70000) {
        return numero * 0.85;
    }
    else {
        return numero * 0.95;
    }

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

function paraAgregar() {
    const container = document.getElementById("container2");
    const result = document.getElementById("result2");
    const input = document.getElementById("input2");
    let nombre = input.value;
    let resultado = agregarLista(nombre); // --> Llamado a la función con envío de parámetros
    result.textContent = resultado;
    input.value = "";
    container.classList.remove("d-none");
};

/* 3. Módulo de Subsidios: Buscador de Beneficiarios (Ciclos e If)
Verificar si un RUT o nombre está en el listado de entrega de beneficios.
Lógica: Tener un arreglo con al menos 6 nombres. Usar un ciclo for para buscar si el dato ingresado existe en la lista.
Regla: La función debe devolver "Beneficiario Verificado" o "No registrado".
 */

function buscarBeneficios() {
    const beneficiarios = ["Juan", "Maria", "Carlos", "Luis", "Diego", "Jonathin"];
    const input = document.getElementById("input3");
    const container = document.getElementById("container3");
    const result = document.getElementById("result3");
    const nombreBuscado = input.value;
    let encontrado = false;

    for (let i = 0; i < beneficiarios.length; i++) {
        if (beneficiarios[i].toLowerCase() === nombreBuscado.toLowerCase()) {
            encontrado = true;
            break;
        }
    };

    for (let i = 0; i < beneficiarios.length; i++) {
        if (beneficiarios[i].toLowerCase() === nombreBuscado.toLowerCase()) {
            encontrado = true;
            break;
        }

    }

    if (encontrado) {
        result.textContent = "Beneficiario Verificado";
        result.className = "alert alert-success fw-bold";
    } else {
        result.textContent = "No registrado";
        result.className = "alert alert-danger fw-bold";
    }

    container.classList.remove("d-none");
}
