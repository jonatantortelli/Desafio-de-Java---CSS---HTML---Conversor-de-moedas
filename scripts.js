const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const primaryCurrency = document.querySelector(".primary-currency")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value"); 

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.28
    const rupiaToday = 0.60
    const realToday = 1


    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "rupia") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-In", {
            style: "currency",
            currency: "INR"
        }).format(inputCurrencyValue / rupiaToday)
    }

    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }

    if (primaryCurrency.value == "real")
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    if (primaryCurrency.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (primaryCurrency.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (primaryCurrency.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    if (primaryCurrency.value == "rupia") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-In", {
            style: "currency",
            currency: "INR"
        }).format(inputCurrencyValue)
    }
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "rupia") {
        currencyName.innerHTML = "Rupia"
        currencyImage.src = "./assets/rupia.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
    }

    convertValues()
}

function changeCurrencyN() {
    const currencyNamePrincipal = document.getElementById("currency-name-principal")
    const currencyImage = document.querySelector(".currency-img-principal")
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")

    console.log(primaryCurrency.value)

    if (primaryCurrency.value == "dolar") {
        currencyNamePrincipal.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (primaryCurrency.value == "euro") {
        currencyNamePrincipal.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (primaryCurrency.value == "libra") {
        currencyNamePrincipal.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (primaryCurrency.value == "rupia") {
        currencyNamePrincipal.innerHTML = "Rupia"
        currencyImage.src = "./assets/rupia.png"
    }

    if (primaryCurrency.value == "real") {
        currencyNamePrincipal.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
    }


}

document.querySelector('.primary-currency').addEventListener('change', function () {
    var select = document.querySelector('.primary-currency');
    var inputCurrency = document.querySelector('.input-currency');

    // Obtém o valor selecionado do select
    var opcaoSelecionada = select.value;

    // Define o valor do placeholder com base na opção selecionada
    switch (opcaoSelecionada) {
        case "real":
            inputCurrency.placeholder = "R$ 0,00";
            break;
        case "dolar":
            inputCurrency.placeholder = "US$ 0.00";
            break;
        case "euro":
            inputCurrency.placeholder = "€ 0.00";
            break;
        case "libra":
            inputCurrency.placeholder = "£ 0.00";
            break;
        case "rupia":
            inputCurrency.placeholder = "₹ 0.00";
            break;
        default:
            inputCurrency.placeholder = "R$ 0,00";
            break;
    }
});

primaryCurrency.addEventListener("change", changeCurrencyN)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
