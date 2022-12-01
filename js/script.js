{
    const setResultText = (text) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = text;
    };

    const calculateResult = (currency, amount) => {
        const rateEUR = 4.7067;
        const rateUSD = 4.5337;
        const rateCHF = 4.7675;
        const rateGBP = 5.4075;

        switch (currency) {
            case "EUR":
                return amount * rateEUR;
            case "USD":
                return amount * rateUSD;
            case "CHF":
                return amount * rateCHF;
            case "GBP":
                return amount * rateGBP;
        }
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;
        const result = calculateResult(currency, amount);

        setResultText(`${amount.toFixed(2)} ${currency} = ${result.toFixed(2)} PLN`);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}

