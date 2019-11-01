//Declaración de variables
var nombreUsuario = "Nicolas Alvarez";
var saldoCuenta = 5000;
var limiteExtraccion = 3000;
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;
var codigoSeguridad = 4321;

function sumarDineroASaldo(quantity) {
  saldoCuenta += quantity;
}

function restarDineroASaldo(quantity) {
  saldoCuenta -= quantity;
}

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
  cargarNombreEnPantalla();
  actualizarSaldoEnPantalla();
  actualizarLimiteEnPantalla();
};


function cambiarLimiteDeExtraccion() {
  limiteExtraccion = parseInt(prompt("Ingrese nuevo limite de extraccion:"));
  if (Number.isNaN(limiteExtraccion) || limiteExtraccion == "" || limiteExtraccion === null) {
    return alert("Opcion invalida, intentelo de nuevo.");
  }
  actualizarLimiteEnPantalla();
  alert("El nuevo limite de extraccion es de: $" + limiteExtraccion);
}

function extraerDinero() {
  var extraccion = parseInt(prompt("Cuanto dinero deseea extraer?:"));
  if (Number.isNaN(extraccion) || extraccion == "" || extraccion === null) {
    return alert("Opcion invalida, intentelo de nuevo.");
  }
  if (extraccion > saldoCuenta) {
    alert(
      "No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero."
    );
    return;
  }
  if (extraccion > limiteExtraccion) {
    alert("La cantidad a extraer supera el limite de extraccion permitida.");
    return;
  }
  if (extraccion % 100 != 0) {
    alert("Solo puedes extraer billetes de 100.");
  } else {
    saldoCuenta -= extraccion;
    var saldoAnterior = saldoCuenta + extraccion;
    actualizarSaldoEnPantalla();
    alert(
      "Has retirado: $" +
      extraccion +
      "\nSaldo anterior: $" +
      saldoAnterior +
      "\nSaldo actual: $" +
      saldoCuenta
    );
  }
  return;
}

function depositarDinero() {
  var deposito = parseInt(prompt("Cuanto dinero desea depositar?:"));
  if (Number.isNaN(deposito) || deposito == "" || deposito === null) {
    return alert("Opcion invalida, intentelo de nuevo.");
  }
  saldoCuenta += deposito;
  var saldoAnterior = saldoCuenta - deposito;
  alert(
    "Has depositado: $" +
    deposito +
    "\nSaldo anterior: $" +
    saldoAnterior +
    "\nSaldo Actual: $" +
    saldoCuenta
  );
  actualizarSaldoEnPantalla();
}

function pagarServicio() {
  var agua = 350;
  var telefono = 425;
  var luz = 210;
  var internet = 570;
  var eleccionDeServicio = parseInt(prompt(
    "Ingrese el numero que corresponda con el servicio que quieres pagar:" +
    "\n1- Agua" +
    "\n2- Telefono" +
    "\n3- Luz" +
    "\n4- Internet"
  ));
  switch (eleccionDeServicio) {
    case 1:
      if (saldoCuenta < agua) {
        return alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");
      } else {
        saldoCuenta -= agua;
        var saldoAnterior = saldoCuenta + agua;
      }
      alert(
        "Has pagado el servicio de Agua." + "\nSaldo anterior: $" + saldoAnterior + "\nDinero descontado: $" + agua + " \nSaldo actual: $" +
        saldoCuenta
      );
      actualizarSaldoEnPantalla();
      break;
    case 2:
      if (saldoCuenta < telefono) {
        return alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");
      } else {
        saldoCuenta -= telefono;
        var saldoAnterior = saldoCuenta + telefono;
      }
      alert(
        "Has pagado el servicio de Telefono." +
        "\nSaldo anterior: $" +
        saldoAnterior +
        "\nDinero descontado: $" +
        telefono +
        " \nSaldo actual: $" +
        saldoCuenta
      );
      actualizarSaldoEnPantalla();
      break;
    case 3:
      if (saldoCuenta < luz) {
        return alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");
        ;
      } else {
        saldoCuenta -= luz;
        var saldoAnterior = saldoCuenta + luz;
      }
      alert(
        "Has pagado el servicio de Luz." +
        "\nSaldo anterior: $" +
        saldoAnterior +
        "\nDinero descontado: $" +
        luz +
        " \nSaldo actual: $" +
        saldoCuenta
      );
      actualizarSaldoEnPantalla();
      break;
    case 4:
      if (saldoCuenta < internet) {
        return alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");
      } else {
        saldoCuenta -= internet;
        var saldoAnterior = saldoCuenta + internet;
      }
      alert(
        "Has pagado el servicio de Internet." +
        "\nSaldo anterior: $" +
        saldoAnterior +
        "\nDinero descontado: $" +
        internet +
        " \nSaldo actual: $" +
        saldoCuenta
      );
      actualizarSaldoEnPantalla();
      break;
    default:
      alert("No existe el servicio que ha seleccionado.")
      break;
  }
}

function transferirDinero() {
  montoATransferir = parseInt(prompt("Cuanto dinero desea transferir?:"));
  if (Number.isNaN(montoATransferir) || montoATransferir == "" || montoATransferir === null) {
    return alert("Opcion invalida, intentelo de nuevo.");
  }
  if (montoATransferir > saldoCuenta) {
    return alert("Fondos insuficientes para transferir esa cantidad de dinero.");
  }
  destinoTransferencia = parseInt(prompt("Ingrese el numero de cuenta al que desea transferir el dinero:"));
  if (Number.isNaN(destinoTransferencia) || destinoTransferencia == "" || destinoTransferencia === null) {
    return alert("Opcion invalida, intentelo de nuevo.");
  }
  if (destinoTransferencia == cuentaAmiga1 || destinoTransferencia == cuentaAmiga2) {
    saldoCuenta -= montoATransferir;
  } else {
    return alert("Solo puede transferir a una cuenta amiga");
  }
  actualizarSaldoEnPantalla();
  return alert("Se han transferido: $" + montoATransferir + "\nCuenta destino: " + destinoTransferencia);
}



function iniciarSesion() {
  validacionCodigoSeguridad = parseInt(prompt("Ingrese su codigo de seguridad:"));
  if (validacionCodigoSeguridad != codigoSeguridad) {
    saldoCuenta = 0;
    alert("Codigo incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad.");
    actualizarSaldoEnPantalla();
    return
  } else {
    return alert("Bievenido/a " + nombreUsuario + " " + "ya puedes a comenzar a realizar operaciones");
  }
}
iniciarSesion();

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
  document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
  document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
  document.getElementById("limite-extraccion").innerHTML =
    "Tu límite de extracción es: $" + limiteExtraccion;
}
