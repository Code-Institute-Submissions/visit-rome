
var myModal = new bootstrap.Modal(document.getElementById('contactUsModal'), options);



emailjs.sendForm('user_Hft1f0wwhp6PvNa61wBb2', 'rome-page-gmail', '#contactUsModal')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });


