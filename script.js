function convertirDivisa() {
    const montoARS = parseFloat(document.getElementById("monto").value);
    const monedaSeleccionada = document.getElementById("moneda").value;

    //EXTRA - API cotizacion minuto a minuto
    //const apiKey = `8539844ec5e5f9d8ee395234fb9fee71`;
    //const URL = `https://data.fixer.io/api/latest?
    //base=ARS&symbols=${monedaSeleccionada}
    //&apikey=${apiKey}`;     
       

    // Definir la tasa de cambio para cada moneda seleccionada 
    let tasaCambio;
    switch (monedaSeleccionada) {
        case "USD-OFICIAL":
            tasaCambio = 350.5; // Tasa de cambio para USD (ARS a USD-Bancario)
            break;
        case "USD-BLUE":
            tasaCambio = 745; // Tasa de cambio para USD (ARS a USD-Blue)
            break;
        case "EUR":
            tasaCambio = 372.3; // Tasa de cambio para EUR (ARS a EUR)
            break;
        case "UYU":
            tasaCambio = 9.17; // Tasa de cambio para EUR (ARS a UYU)
            break;
        case "COP":
            tasaCambio = 0.08; // Tasa de cambio para EUR (ARS a COP)
            break;
        case "GBP":
            tasaCambio = 428; // Tasa de cambio para EUR (ARS a GBP)
            break;
        default:
            alert("Divisa no encontrada");
            return;
    }
    if (montoARS < 1) {
        alert("debes ingresar un valor mayor que 0, sino obtendrás")
    }
    const resultado = montoARS / tasaCambio;
    alert(`Obtendrás ${resultado.toFixed(2)} ${monedaSeleccionada}`);
}
