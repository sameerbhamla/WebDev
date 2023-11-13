    // The handling js code

    // assign variables with required element references.
    var cInputValue = document.getElementById('cinput');
    var fInputValue = document.getElementById('finput');
    var errorMSG = document.getElementById('errorMessage');
    var image = document.getElementById('weatherimage');

    // add eventListener after page has been completely loaded
    window.addEventListener("DOMContentLoaded",domLoaded);

    // function to be called after page has been loaded
    function domLoaded()
    {

      // add eventListener 'click' to the convert button
      document.getElementById("convertButton").addEventListener("click", checkInput);

      // add event Listener 'input' to Celsius input field
      document.getElementById("cinput").addEventListener("input", clearFInput);

      // add event Listener 'input' to Fahrenheit input field
      document.getElementById("finput").addEventListener("input", clearCInput);
        

    }

    // function to convert celsius to fahrenheit
    function convertCtoF(degreesCelsius)
    {
      // convert the given temperature in celsius to fahrenheit and then return it
      
      return(degreesCelsius*9/5 + 32);
    }

    // function to convert from fahrenheit to celsius
    function convertFtoC(degreesFahrenheit)
    {
      // convert the given temperature in fahrenheit to celsius and then return it
      return((degreesFahrenheit - 32)* 5/9);
    }

    // function to determine how to convert the input
    function checkInput()
    {
       
      // check which input field has a value, celsius or fahrenheit field
      // if celsius input field has a value not equal to ' ' then
      if(cInputValue.value != "")
      {
        // convert the celsius value to a floating point number
        var celsiusInputValue = parseFloat(cInputValue.value);

          // check whether user input in celsius value is a valid number or not
          if(isNaN(celsiusInputValue))
          {
            // set the error message
            errorMessage.innerHTML = cInputValue.value + " is not a number !";
            image.src =" "
          }
          else
          {
            // call the converter function and store the result
            var fahrenheit_value = convertCtoF(celsiusInputValue);

            // update the fahrenheit input field value
            fInputValue.value = fahrenheit_value;
            changeImage(fahrenheit_value); // change the image appropriately
            // remove the error message
            errorMessage.innerHTML = "";
          }
      }
      else
      {
          // convert the fahrenheit value to a floating point number
          var fahrenheitInputValue = parseFloat(fInputValue.value);

        // check whether user input in fahrenheit value is a valid number or not
          if(isNaN(fahrenheitInputValue))
          {
            // set the error message
            errorMessage.innerHTML=fInputValue.value + " is not a number !";
            image.src =" "
          }
          else
          {
            // update the celsius input field value by calling the converter function
            cInputValue.value = convertFtoC(fahrenheitInputValue);
            changeImage(parseFloat(fInputValue.value)); // change the image appropriately
            // remove the error message
            errorMessage.innerHTML="";
          }
      }
      
    }

    // function to clear the input value of Fahrenheit field
    function clearFInput()
    {   
      fInputValue.value="";
    }

    // function to clear the input value of Celsius field
    function clearCInput()
    {   
      cInputValue.value="";
    }

    // function to change the image according to fahrenheit value
    // this function alters the image element's src attribute
    function changeImage(tempValue)
    {
      
      if(tempValue < 32)
      {
        image.src = "cold.png";
      }
      else if(tempValue >= 32 && tempValue <=50)
      {
        image.src = "cool.png";
      }
      else
      {
        image.src ="warm.png";
      }
    }

 