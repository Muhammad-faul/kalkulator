// script.js

let currentSlide = 0;

function toggleSlide() {
    const slides = document.querySelectorAll('.slide-content');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length; // Pergi ke slide berikutnya
    slides[currentSlide].classList.add('active');
}

function showCalculator() {
    document.getElementById("calculatorSection").style.display = "block";
    document.getElementById("converterSection").style.display = "none";
}

function showConverter() {
    document.getElementById("calculatorSection").style.display = "none";
    document.getElementById("converterSection").style.display = "block";
}

// Kalkulator Functions
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        const result = eval(display.value);
        display.value = result;
        addToHistory(display.value);
    } catch (e) {
        display.value = "Error";
    }
}

function addToHistory(entry) {
    const historyList = document.getElementById("historyList");
    const li = document.createElement("li");
    li.textContent = entry;
    historyList.appendChild(li);
}

// Fungsi trigonometri
function calculateSin() {
    const value = parseFloat(document.getElementById("display").value);
    const result = Math.sin(value);
    document.getElementById("display").value = result;
    addToHistory(`sin(${value}) = ${result}`);
}

function calculateCos() {
    const value = parseFloat(document.getElementById("display").value);
    const result = Math.cos(value);
    document.getElementById("display").value = result;
    addToHistory(`cos(${value}) = ${result}`);
}

function calculateTan() {
    const value = parseFloat(document.getElementById("display").value);
    const result = Math.tan(value);
    document.getElementById("display").value = result;
    addToHistory(`tan(${value}) = ${result}`);
}

function calculateSqrt() {
    const value = parseFloat(document.getElementById("display").value);
    const result = Math.sqrt(value);
    document.getElementById("display").value = result;
    addToHistory(`√${value} = ${result}`);
}

function calculateFactorial() {
    const value = parseInt(document.getElementById("display").value);
    if (value < 0) {
        document.getElementById("display").value = "Error";
        return;
    }
    const result = factorial(value);
    document.getElementById("display").value = result;
    addToHistory(`${value}! = ${result}`);
}

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

function calculatePower() {
    const values = document.getElementById("display").value.split("^");
    const base = parseFloat(values[0]);
    const exponent = parseFloat(values[1]);
    const result = Math.pow(base, exponent);
    document.getElementById("display").value = result;
    addToHistory(`${base}^${exponent} = ${result}`);
}

function toggleSign() {
    const display = document.getElementById("display");
    if (display.value) {
        display.value = -parseFloat(display.value);
    }
}

// Fungsi untuk menghitung akar kuadrat
function calculateSqrt() {
    const value = parseFloat(document.getElementById("display").value);
    const result = Math.sqrt(value);
    document.getElementById("display").value = result;
    addToHistory(`√${value} = ${result}`);
}

// Fungsi untuk menghitung faktorial
function calculateFactorial() {
    const value = parseInt(document.getElementById("display").value);
    if (value < 0) {
        document.getElementById("display").value = "Error";
        return;
    }
    const result = factorial(value);
    document.getElementById("display").value = result;
    addToHistory(`${value}! = ${result}`);
}

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

// Fungsi untuk menghitung pangkat
function calculatePower() {
    const values = document.getElementById("display").value.split("^");
    const base = parseFloat(values[0]);
    const exponent = parseFloat(values[1]);
    const result = Math.pow(base, exponent);
    document.getElementById("display").value = result;
    addToHistory(`${base}^${exponent} = ${result}`);
}

// Toggle Sign
function toggleSign() {
    const display = document.getElementById("display");
    if (display.value) {
        display.value = -parseFloat(display.value);
    }
}

// Konverter Functions
function convertCurrency() {
    const rupiah = parseFloat(document.getElementById("rupiah").value);
    const dollarRate = 15000; // Rate contohnya
    const euroRate = 16000; // Rate contohnya
    document.getElementById("dollarResult").textContent = (rupiah / dollarRate).toFixed(2);
    document.getElementById("euroResult").textContent = (rupiah / euroRate).toFixed(2);
}

function convertLength() {
    const cm = parseFloat(document.getElementById("cmToMeter").value);
    document.getElementById("meterResult").textContent = (cm / 100).toFixed(2);
}

function convertMass() {
    const grams = parseFloat(document.getElementById("grams").value);
    document.getElementById("kilogramResult").textContent = (grams / 1000).toFixed(2);
}

function convertArea() {
    const cm2 = parseFloat(document.getElementById("cm2ToM2").value);
    document.getElementById("m2Result").textContent = (cm2 / 10000).toFixed(2);
}

function convertTime() {
    const seconds = parseFloat(document.getElementById("seconds").value);
    document.getElementById("minutesResult").textContent = (seconds / 60).toFixed(2);
    document.getElementById("hoursResult").textContent = (seconds / 3600).toFixed(2);
}

function calculateFinance() {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const timeYears = parseFloat(document.getElementById("timeYears").value);
    const totalPayment = principal * Math.pow(1 + (rate / 100), timeYears);
    document.getElementById("financeResult").textContent = totalPayment.toFixed(2);
}

function convertData() {
    const megabytes = parseFloat(document.getElementById("megabytes").value);
    document.getElementById("kilobyteResult").textContent = (megabytes * 1024).toFixed(2);
}

function calculateDate() {
    const dateInput = new Date(document.getElementById("dateInput").value);
    const today = new Date();
    const timeDiff = Math.abs(today - dateInput);
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    document.getElementById("dateResult").textContent = daysDiff;
}

function calculateDiscount() {
    const initialPrice = parseFloat(document.getElementById("initialPrice").value);
    const discountPercentage = parseFloat(document.getElementById("discountPercentage").value);
    const finalPrice = initialPrice - (initialPrice * (discountPercentage / 100));
    document.getElementById("finalPriceResult").textContent = finalPrice.toFixed(2);
}

function convertVolume() {
    const cubicMeters = parseFloat(document.getElementById("m3").value);
    document.getElementById("cm3Result").textContent = (cubicMeters * 1000000).toFixed(2);
}

function convertDecimalToBinary() {
    const decimal = parseInt(document.getElementById("decimal").value);
    document.getElementById("binaryResult").textContent = decimal.toString(2);
}

function convertSpeed() {
    const mps = parseFloat(document.getElementById("mps").value);
    document.getElementById("kpsResult").textContent = (mps / 1000).toFixed(2);
}

function convertTemperature() {
    const celsius = parseFloat(document.getElementById("celsius").value);
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;
    const reamur = celsius * 4/5;
    document.getElementById("fahrenheitResult").textContent = fahrenheit.toFixed(2);
    document.getElementById("kelvinResult").textContent = kelvin.toFixed(2);
    document.getElementById("reamurResult").textContent = reamur.toFixed(2);
}

function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value) / 100; // cm to m
    const weight = parseFloat(document.getElementById("weight").value);
    const bmi = weight / (height * height);
    document.getElementById("bmiResult").textContent = bmi.toFixed(2);
}
