// emailjs.sendForm('gmail', 'rome-page-gmail', '#contactUsForm')
//     .then(function(response) {
//        console.log('SUCCESS!', response.status, response.text);
//     }, function(error) {
//        console.log('FAILED...', error);
//     });

//     var templateParams = {
//     name: 'James',
//     notes: 'Check this out!'
// };


// var myModal = new bootstrap.Modal(document.getElementById('contactUsModal'), options);


// var myModal = document.getElementById('contactUsModal');
// var myInput = document.getElementById('myInput');

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus();
// });

// not working

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


