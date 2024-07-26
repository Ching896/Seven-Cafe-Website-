function submitform() {
    var validemail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (document.feedbackform.name.value == "") {
        alert("Please enter your name!")
        document.feedbackform.name.focus();
    }
    else if (document.feedbackform.email.value == "") {
        alert("Please enter your email address!")
        document.feedbackform.email.focus();
    }

    if (document.feedbackform.name.value != "" && document.feedbackform.email.value != "") {
        if (document.feedbackform.email.value.match(validemail)) {
            if (confirm("Are you sure you want to submit this form?") != true) {
                alert("You canceled!")
            } else {
                alert("Thanks for your submit !")
            }
        } else {
            alert("Please enter valid email!!");
            document.feedbackform.email.value.focus();
        }

    }
}