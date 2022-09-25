const formulario = document.querySelector(".formulario");
const inputs = document.querySelectorAll("input.datos");
const nameTitular = document.getElementById("cardholder-name");
const digitosTarjeta = document.getElementById("card-number");
const formularioDatos = document.querySelector(".formulario-datos");
const vistaThankYou = document.querySelector(".thank-you");
const btnEnviarDatos = document.querySelector(".btn");

const inputMonth = document.getElementById("exp-date-month");
const inputYear = document.getElementById("exp-date-year");
const inputCvc = document.getElementById("cvc");

const divMonth = document.querySelector("#divMonth p");
const divYear = document.querySelector("#divYear p");
const divCvc = document.querySelector("#divCvc p");

// tarjetas img
const numTarjetaImg = document.querySelector(".numTarjeta");
const nameTitularImg = document.getElementById("cc-titular");
const expMonthImg = document.getElementById("cc-exp-month");
const expYearImg = document.getElementById("cc-exp-year");
const cvcImg = document.getElementById("bg-cvc");

//eventos
inputs.forEach((input) => {
  input.addEventListener("blur", () => {
    if (input.value.length == 0) {
      input.style.border = "1px red solid";
    } else {
      input.style.border = null;
    }
  });
});

formulario.addEventListener("submit", btnConfirm);

inputMonth.addEventListener("blur", inputMonthError);
inputYear.addEventListener("blur", inputYearError);
inputCvc.addEventListener("blur", inputCvcError);
digitosTarjeta.addEventListener("keyup", validacionDigitosTarjeta);

// funciones
function inputMonthError() {
  if (inputMonth.value.length === 0) {
    divMonth.style.display = "block";
  } else {
    divMonth.style.display = "none";
  }
}

function inputYearError() {
  if (inputYear.value.length === 0) {
    divYear.style.display = "block";
  } else {
    divYear.style.display = "none";
  }
}

function inputCvcError() {
  if (inputCvc.value.length === 0) {
    divCvc.style.display = "block";
  } else {
    divCvc.style.display = "none";
  }
}

function validacionDigitosTarjeta(e) {
  let valorInput = e.target.value;
  digitosTarjeta.value = valorInput
    .replace(/\s/g, "")
    .replace(/\D/g, "")
    .replace(/([0-9]{4})/g, "$1  ")
    .trim();
}

function btnConfirm(e) {
  e.preventDefault();
  inputs.forEach((input) => {
    if (input.value.length == 0) {
      input.style.border = "1px red solid";
      inputMonthError();
      inputYearError();
      inputCvcError();
    } else {
      formularioDatos.classList.add("hidden");
      vistaThankYou.classList.remove("hidden");
      btnEnviarDatos.value = "Continue";

      numTarjetaImg.textContent = digitosTarjeta.value;
      nameTitularImg.textContent = nameTitular.value;
      expMonthImg.textContent = inputMonth.value;
      expYearImg.textContent = inputYear.value;
      cvcImg.textContent = inputCvc.value;

      btnEnviarDatos.setAttribute("onclick", "location.reload()");
    }
  });
}
