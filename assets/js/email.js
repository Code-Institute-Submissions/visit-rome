
function sendMail(contactUsForm) {
    emailjs.send("gmail", "rome-page-gmail", {
        "from_name": contactUsForm.name.value,
        "from_email": contactUsForm.email.value,
        "message": contactUsForm.summary.value,
    })
    .then(
    function(response) {
       console.log('SUCCESS!', response.status, response.text);
       contactUsForm.reset(); 
    }, 
    function(error) {
       console.log('FAILED...', error);
    });
    return false;
}


