document.addEventListener("DOMContentLoaded", function () {
  const amount = document.getElementById("amount");
  const currency = document.getElementById("currency");
  const convert = document.getElementById("convert");
  const result = document.getElementById("result");

  const apiKey = "Add API KEY HERE";
  const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=";

  convert.addEventListener("click", () => {
    const amountTotal = amount.value;
    const currencyCode = currency.value;
    const url = apiUrl + "INR_" + currencyCode;

    fetch(url, {
      headers: {
        "X-API-KEY": apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const rate = data.exchange_rate;
        if (typeof rate === "undefined") {
          result.innerHTML = `Invalid currency code: ${currencyCode}`;
        } else {
          const resultPrice = amountTotal * rate;
          result.innerHTML = `${amountTotal} INR = ${resultPrice.toFixed(
            2
          )} ${currencyCode} `;
        }
      })
      .catch((error) => {
        console.error("Request failed", error);
        result.innerHTML = "An error occurred please try again later";
      });
  });
});
