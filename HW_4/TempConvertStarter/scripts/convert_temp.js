window.addEventListener("DOMContentLoaded", domLoaded);

// When the DOM has finished loading, add the event listeners.
function domLoaded() {
   // TODO: Use addEventListener() to register a click event handler for the convert button.
   // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#add_a_simple_listener

   document.getElementById("message").style.display = "none";

   let f_input = document.getElementById("F_in");
   let c_input = document.getElementById("C_in");
   let f_c = {
      f:null,
      c:null
   };

   // Add event listeners to handle clearing the box that WAS NOT clicked,
   // e.g., the element C_in listens for 'input', with a callback fn to
   // execute after that event does happen. 
   // You don't send arguments to the event handler function.
   // So, if you want the event handler to call another function that
   // DOES take arguments, you can send that other function as a callback.
   // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#event_listener_with_anonymous_function
   // Here is an example of anonymous event handler fn that calls alert with an argument:
   // document.getElementById("weatherIcon").addEventListener("click", function() {alert("You clicked the icon.")})

   f_input.addEventListener("input", function(E) {c_input.value = ""; f_c.c = NaN; f_c.f = parseFloat(f_input.value); console.log(f_c.f, f_c.c);});
   c_input.addEventListener("input", function(E) {f_input.value = ""; f_c.f = NaN; f_c.c = parseFloat(c_input.value);});

   document.getElementById("convertButton").addEventListener("click", function(E) {updateDisplay(f_c)});

}
// TODO: (Part of the above is to write the functions to be executed when the event handlers are invoked.)

function convertCtoF(C) {
   // TODO: Return temp in °F. 
   // °F = °C * 9/5 + 32
   return (C*(9/5)) + 32;
}

function convertFtoC(F) {
   // TODO: Return temp in °C. 
   // °C = (°F - 32) * 5/9
   return (F-32) * (5/9);
}

// TODO: write a fn that can be called with every temp conversion
// to display the correct weather icon.
// Based on degrees Fahrenheit:
// 32 or less, but above -200: cold
// 90 or more, but below 200: hot
// between hot and cold: cool
// 200 or more, -200 or less: dead
// both input fields are blank: C-F

function updateDisplay(f_c) {
   
   let passed = false;
   
   // Update fields
   if ((f_c.f == null || isNaN(f_c.f)) && (f_c.c == null || isNaN(f_c.c))) {
      console.log("here!");
      let err_message = document.getElementById("message");
      err_message.textContent = "No numbers to convert! Please enter a number";
      err_message.style.display = "block";
      document.getElementById("weatherIcon").src = "images/C-F.png";
   }
   else if (!(f_c.f == null || isNaN(f_c.f))) {
      document.getElementById("message").style.display = "none";
      f_c.c = convertFtoC(f_c.f);
      document.getElementById("C_in").value = (String)(f_c.c.toFixed(2));
      passed = true;
   }
   else if (!(f_c.c == null || isNaN(f_c.c))) {
      document.getElementById("message").style.display = "none";
      f_c.f = convertCtoF(f_c.c);
      document.getElementById("F_in").value = (String)(f_c.f.toFixed(2));
      passed = true;
   }
   // Update images
   if (passed) {
      let img = document.getElementById("weatherIcon");
      if (f_c.f <= 32 && f_c.f > -200) {
         img.src = "images/cold.png";
      }
      else if (f_c.f > 32 && f_c.f < 90) {
         img.src = "images/cool.png";
      }
      else if (f_c.f >= 90 && f_c.f < 200) {
         img.src = "images/hot.png";
      }
      else {
         img.src = "images/dead.png";
      }
   }
}
