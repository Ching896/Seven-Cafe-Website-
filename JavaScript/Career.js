function checkform() {
    if (document.jobApplicationForm.fullName.value == "") {
        alert("Please enter your name!")
        document.jobApplicationForm.fullName.focus();    
    }
    else if (document.jobApplicationForm.phone.value == "") {
        alert("Please enter your phone number!")
        document.jobApplicationForm.phone.focus();
    }
    else if (document.jobApplicationForm.email.value == "") {
        alert("Please enter your email address!")
        document.jobApplicationForm.email.focus();
    }
    else {    
        if (confirm("Are you sure you want to submit this form?")== true) {
            location.href = "Success.html";
        } else {
            alert("You canceled!")
        }
        
    }
  }