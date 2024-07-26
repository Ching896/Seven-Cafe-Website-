function checkform() {
    if (document.eventForm.formName.value == "") {
        alert("Please enter your name!")
        document.eventForm.formName.focus();    
    }
    else if (document.eventForm.formTel.value == "") {
        alert("Please enter your phone number!")
        document.eventForm.formTel.focus();
    }
    else if (document.eventForm.formEmail.value == "") {
        alert("Please enter your email address!")
        document.eventForm.formEmail.focus();
    }
    else if (document.eventForm.formPax.value == "") {
        alert("Please enter the number or person!")
        document.eventForm.formPax.focus();
    }
    else if (document.eventForm.formDate.value == "") {
        alert("Please enter the date you want to book on!")
        document.eventForm.formDate.focus();
    }
    else {
        if (confirm("Are you sure you want to book now?")== true) {
            location.href = "Success.html";
        } else {
            alert("You canceled!")
        }
    }
}