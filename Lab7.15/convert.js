
function convertCtoF(celsius) {
   return celsius * 9/5 + 32;
}

function convertFtoC(fahrenheit) {
   return (fahrenheit - 32) * 5/9;
}

function updateImage(fahrenheit) {
   const weatherImage = document.getElementById('weatherImage');

   if (fahrenheit < 32) {
       weatherImage.src = 'cold.png';
   } else if (fahrenheit >= 32 && fahrenheit <= 50) {
       weatherImage.src = 'cool.png';
   } else {
       weatherImage.src = 'warm.png';
   }
}

function domLoaded() {
   const cInput = document.getElementById('cInput');
   const fInput = document.getElementById('fInput');
   const convertButton = document.getElementById('convertButton');
   const errorMessage = document.getElementById('errorMessage');

   cInput.addEventListener('input', function() {
       fInput.value = '';
       errorMessage.innerHTML = '';
   });

   fInput.addEventListener('input', function() {
       cInput.value = '';
       errorMessage.innerHTML = '';
   });

   convertButton.addEventListener('click', function() {
       let celsius = parseFloat(cInput.value);
       let fahrenheit = parseFloat(fInput.value);

       if (!isNaN(celsius)) {
           fInput.value = convertCtoF(celsius);
           updateImage(parseFloat(fInput.value));
           errorMessage.innerHTML = '';
       } else if (!isNaN(fahrenheit)) {
           cInput.value = convertFtoC(fahrenheit);
           updateImage(fahrenheit);
           errorMessage.innerHTML = '';
       } else {
           errorMessage.innerHTML = cInput.value + fInput.value + ' is not a number';
       }
   });
}

document.addEventListener('DOMContentLoaded', domLoaded);