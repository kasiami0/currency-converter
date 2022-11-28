let amountElement = document.querySelector(".js-amount");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");
let currencyElement = document.querySelector(".js-currency");

let rateEUR = 4.7067;
let rateUSD = 4.5337;
let rateCHF = 4.7675;
let rateGBP = 5.4075;


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;
    let result;

    switch (currency) {
        case "EUR":
            result = amount * rateEUR;
            break;
        case "USD":
            result = amount * rateUSD;
            break;
        case "CHF":
            result = amount * rateCHF;
            break;
        case "GBP":
            result = amount * rateGBP;
            break;
    }
    
    resultElement.innerText = `${amount.toFixed(2)} ${currency} = ${result.toFixed(2)} PLN`;

});