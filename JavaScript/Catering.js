const checkboxChop1 = document.getElementById('Chop1');
const numberChop1 = document.getElementById('ChopNo1');
const checkboxChop2 = document.getElementById('Chop2');
const numberChop2 = document.getElementById('ChopNo2');
const checkboxChop3 = document.getElementById('Chop3');
const numberChop3 = document.getElementById('ChopNo3');
const checkboxChop4 = document.getElementById('Chop4');
const numberChop4 = document.getElementById('ChopNo4');

const checkboxPasta1 = document.getElementById('Pasta1');
const numberPasta1 = document.getElementById('PastaNo1');
const checkboxPasta2 = document.getElementById('Pasta2');
const numberPasta2 = document.getElementById('PastaNo2');
const checkboxPasta3 = document.getElementById('Pasta3');
const numberPasta3 = document.getElementById('PastaNo3');
const checkboxPasta4 = document.getElementById('Pasta4');
const numberPasta4 = document.getElementById('PastaNo4');

const checkboxDrink1 = document.getElementById('Drink1');
const numberDrink1 = document.getElementById('DrinkNo1');
const checkboxDrink2 = document.getElementById('Drink2');
const numberDrink2 = document.getElementById('DrinkNo2');
const checkboxDrink3 = document.getElementById('Drink3');
const numberDrink3 = document.getElementById('DrinkNo3');
const checkboxDrink4 = document.getElementById('Drink4');
const numberDrink4 = document.getElementById('DrinkNo4');

const checkboxCoffee1 = document.getElementById('Coffee1');
const numberCoffee1 = document.getElementById('CoffeeNo1');
const checkboxCoffee2 = document.getElementById('Coffee2');
const numberCoffee2 = document.getElementById('CoffeeNo2');
const checkboxCoffee3 = document.getElementById('Coffee3');
const numberCoffee3 = document.getElementById('CoffeeNo3');
const checkboxCoffee4 = document.getElementById('Coffee4');
const numberCoffee4 = document.getElementById('CoffeeNo4');

const checkboxDessert1 = document.getElementById('Dessert1');
const numberDessert1 = document.getElementById('DessertNo1');
const checkboxDessert2 = document.getElementById('Dessert2');
const numberDessert2 = document.getElementById('DessertNo2');
const checkboxDessert3 = document.getElementById('Dessert3');
const numberDessert3 = document.getElementById('DessertNo3');
const checkboxDessert4 = document.getElementById('Dessert4');
const numberDessert4 = document.getElementById('DessertNo4');


checkboxChop1.addEventListener('change', function() {
  numberChop1.disabled = !checkboxChop1.checked;
});
checkboxChop2.addEventListener('change', function() {
  numberChop2.disabled = !checkboxChop2.checked;
});
checkboxChop3.addEventListener('change', function() {
  numberChop3.disabled = !checkboxChop3.checked;
});
checkboxChop4.addEventListener('change', function() {
  numberChop4.disabled = !checkboxChop4.checked;
});

checkboxPasta1.addEventListener('change', function() {
  numberPasta1.disabled = !checkboxPasta1.checked;
});
checkboxPasta2.addEventListener('change', function() {
  numberPasta2.disabled = !checkboxPasta2.checked;
});
checkboxPasta3.addEventListener('change', function() {
  numberPasta3.disabled = !checkboxPasta3.checked;
});
checkboxPasta4.addEventListener('change', function() {
  numberPasta4.disabled = !checkboxPasta4.checked;
});

checkboxDrink1.addEventListener('change', function() {
  numberDrink1.disabled = !checkboxDrink1.checked;
});
checkboxDrink2.addEventListener('change', function() {
  numberDrink2.disabled = !checkboxDrink2.checked;
});
checkboxDrink3.addEventListener('change', function() {
  numberDrink3.disabled = !checkboxDrink3.checked;
});
checkboxDrink4.addEventListener('change', function() {
  numberDrink4.disabled = !checkboxDrink4.checked;
});

checkboxCoffee1.addEventListener('change', function() {
  numberCoffee1.disabled = !checkboxCoffee1.checked;
});
checkboxCoffee2.addEventListener('change', function() {
  numberCoffee2.disabled = !checkboxCoffee2.checked;
});
checkboxCoffee3.addEventListener('change', function() {
  numberCoffee3.disabled = !checkboxCoffee3.checked;
});
checkboxCoffee4.addEventListener('change', function() {
  numberCoffee4.disabled = !checkboxCoffee4.checked;
});

checkboxDessert1.addEventListener('change', function() {
  numberDessert1.disabled = !checkboxDessert1.checked;
});
checkboxDessert2.addEventListener('change', function() {
  numberDessert2.disabled = !checkboxDessert2.checked;
});
checkboxDessert3.addEventListener('change', function() {
  numberDessert3.disabled = !checkboxDessert3.checked;
});
checkboxDessert4.addEventListener('change', function() {
  numberDessert4.disabled = !checkboxDessert4.checked;
});

function checkform() {
  if (document.bookingForm.name.value == "") {
      alert("Please enter your name!")
      document.bookingForm.name.focus();    
  }
  else if (document.bookingForm.phoneNum.value == "") {
      alert("Please enter your phone number!")
      document.bookingForm.phoneNum.focus();
  }
  else if (document.bookingForm.email.value == "") {
      alert("Please enter your email address!")
      document.bookingForm.email.focus();
  }
  else if (document.bookingForm.home.value == "") {
      alert("Please enter the location we have to go to!")
      document.bookingForm.home.focus();
  }
  else if (document.bookingForm.date.value == "") {
      alert("Please enter the date you want to book on!")
      document.bookingForm.date.focus();
  }
  else if (document.bookingForm.time.value == "") {
    alert("Please enter the time you want to book on!")
    document.bookingForm.time.focus();
  }
  else {
    if (confirm("Are you sure you want to book now?")== true) {
      location.href = "Success.html";
  } else {
      alert("You canceled!")
  }
  }
}