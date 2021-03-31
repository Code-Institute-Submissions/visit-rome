emailjs.sendForm('gmail', 'rome-page-gmail', '#contactUsForm')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

    var templateParams = {
    name: 'James',
    notes: 'Check this out!'
};


// var myModal = new bootstrap.Modal(document.getElementById('contactUsModal'), options);


// var myModal = document.getElementById('contactUsModal');
// var myInput = document.getElementById('myInput');

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus();
// });





