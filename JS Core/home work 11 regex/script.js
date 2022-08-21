// Input regular expretion check

const textRegEx = /^[a-zA-Z]{3,20}$/;
const mailRegEx = /^([a-zA-Z0-9_\-\.]{1,255})@([a-zA-Z0-9_\-\.]{1,255})\.([a-zA-Z]{2,64})$/;
const passRegEx = /[^(!@#$%^&*)][\w]{7,14}/;


// Getting elements from a page

const inputFildDecoration = document.querySelectorAll('.inputFildHolder');

const firstName = document.querySelector('#firstN');
const lastName = document.querySelector('#lastN');
const email = document.querySelector('#mail');
const password = document.querySelector('#pass');

const terms = document.getElementById('checkTerms');
const signUp = document.querySelector('.actionBtn');


// Add event listener

function FildValid (regExp, fild) {
    
    if(!regExp.test(fild.value)) {
        fild.style.cssText = 'border: 3px solid red;';
        return false;
    } else {
        fild.style.cssText = 'border: 3px solid green;';
        return true;
    }
}

firstName.addEventListener('blur', () => {
    FildValid(textRegEx, firstName);
});

lastName.addEventListener('blur', () => {
    FildValid(textRegEx, lastName);
});

email.addEventListener('blur', () => {
    FildValid(mailRegEx, email);
});

password.addEventListener ('blur', () => {
    FildValid(passRegEx, password);
});

// Showing a 'red notice'
function notValid (){
    const error_message = document.querySelectorAll('.error_message');
    error_message.style.cssText = 'visibility: visible;';
}


function validateSignUp() {
    
    if (FildValid(textRegEx, firstName) &&
        FildValid(textRegEx, lastName) &&
        FildValid(mailRegEx, email) &&
        FildValid(passRegEx, password) == true
        ){

        console.log('access granted');
        return signUp.disabled = false;
    } else {
        
        console.log('access denied');
        return signUp.disabled = true;
    }
}

// let usersArr = [];

terms.addEventListener('click', () => {

    if (terms.checked) {
        validateSignUp();
        console.log("checked");
        
        // let fn = firstName.value;
        // let ln = lastName.value;

        // let firstUser = {
        //     F_name: fn,
        //     L_name: ln,
        //     Email: email.value,
        //     pass: password.value
        // };
        // usersArr.push(firstUser);
    } else {
        console.log("not checked");
    }
});

const greetingBanner = document.querySelector('.greetings');
const backToPage = document.querySelector('.continue');

const form = document.getElementById("form");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

signUp.addEventListener('click', () => {
    
    greetingBanner.style.cssText = 'visibility: visible;';
        document.body.disabled = true;
    
    
});

backToPage.addEventListener('click', () => {
    document.body.disabled = false;
    greetingBanner.style.cssText = 'visibility: hidden;';
    
});

