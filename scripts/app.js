let thanks = document.querySelector('.thanks');
let err = document.querySelector('.error');
let submit = document.getElementById('submitEmail');
let dismiss = document.getElementById('dismiss');


dismiss.addEventListener('click', function() {
    thanks.style.display = 'none';
    document.querySelector('.container').style.display = 'grid'; 

});




function validateEmail(email) {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

submit.addEventListener('click', function(e) {
    e.preventDefault();
    let email = document.getElementById('email').value;
    if(email === '') {
        err.style.visibility = 'visible';
        document.getElementById('email').style.border = '1px solid #FE5278';
        document.getElementById('email').style.color = '#FE5278';
    }else if(!validateEmail(email)) {
        err.style.visibility = 'visible';
        document.getElementById('email').style.border = '1px solid #FE5278';
        document.getElementById('email').style.color = '#FE5278';
    } else {
        err.style.visibility = 'hidden';
        thanks.style.display = 'block';
        document.getElementsByTagName('strong')[0].innerHTML = email;
        document.querySelector('.container').style.display = 'none';
        document.querySelector('.thanks').style.transition = 'all 1s ease-out';

    }
});




