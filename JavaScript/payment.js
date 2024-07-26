window.onload = init;

function init() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()){
         alert("Payment Successful");
         window.location.replace('./ordernow.html');
      }

      return false;
   }

   const amount = window.location.search.split('=')[1];
   document.getElementById('total').setAttribute('value', amount);
}