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

const signUp = document.querySelector('.signUp_btn');
const signIn = document.querySelector('.signIn_btn');


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

// Showing a 'red notice'
function notValid (){
    const error_message = document.querySelectorAll('.error_message');
    error_message.style.cssText = 'visibility: visible;';
}

function validateSignUp() {
    
    if (FildValid(textRegEx, firstName) &&
        FildValid(textRegEx, lastName) &&
        FildValid(mailRegEx, email) &&
        FildValid(passRegEx, password)
        ){

        console.log('access granted');
        return signUp.disabled = false;
    } else {
        
        console.log('access denied');
        return signUp.disabled = true;
    }
}
function validateSignIn() {
    
    if (
        FildValid(mailRegEx, userEmail) &&
        FildValid(passRegEx, userPass)
        ){

        console.log('access granted');
        return signIn.disabled = false;
    } else {
        
        console.log('access denied');
        return signIn.disabled = true;
    }
}

function clearFilds (input) {
    setTimeout(() => {input.value = '';}, 1000);
}
///////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////

const inputFilds = document.querySelectorAll('.inputFild');

for (fild of inputFilds) {

    fild.addEventListener('change', () => {
        validateSignUp();
        
        validateSignIn();
    });
}


////////////////////////////////////////////////////////////////

const form1 = document.getElementById("form");
const form2 = document.getElementById("form_in");
function handleForm(event) { event.preventDefault(); } 
form1.addEventListener('submit', handleForm);
form2.addEventListener('submit', handleForm);

/////////////////////////////////////////////////////////////////

const greetingBanner = document.querySelector('.greetings');
const backToPageBtn = document.querySelector('.continue');

const btnS_I = document.querySelector('#signIn');
const btnS_U = document.querySelector('#signUp');

btnS_I.addEventListener('click', ()=> {
    document.querySelector('.signIn_block').style.display = 'block';
    document.querySelector('.signUp_block').style.display = 'none';

    clearFilds(userEmail);
    clearFilds(userPass);

    if (userEmail.value.length == 0 ||
        userPass.value.length == 0 
    ){
        return signIn.disabled = true;
    } else {
        return signIn.disabled = false;
    }
});

btnS_U.addEventListener('click', ()=> {
    document.querySelector('.signIn_block').style.display = 'none';
    document.querySelector('.signUp_block').style.display = 'block';
});
///////////////////////////////////////////////////////////////////////////

class Customer {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}

// let userNum = 0;
let userArr = [];

signUp.addEventListener('click', () => {
    
    // userNum ++;
    
    const user = new Customer(firstName.value, lastName.value, email.value, password.value);
    userArr.push(user);

    // localStorage.setItem(`customer # ${userNum}`, JSON.stringify(user);
    localStorage.setItem('customers', JSON.stringify(userArr));
    
    clearFilds(firstName);
    clearFilds(lastName);
    clearFilds(email);
    clearFilds(password);
    
    signUp.disabled = true;
});

/////////////////////////////////////////////////////////////////////////////

var userEmail = document.querySelector('#user_email');
var userPass = document.querySelector('#user_pass');



// userPass.addEventListener('blur', () => {
//     validateSignIn();
    
// });

let data = JSON.parse(localStorage.getItem('customers'));
// console.log(data);

signIn.addEventListener('click', () => {
    
    data.forEach(element => {
    // data.find(element => {
        
        if (
            element.email == userEmail.value &&
            element.password == userPass.value 
            ) {
                
            console.log(element.firstName);
            greetingBanner.style.cssText = 'visibility: visible;';
            // document.body.disabled = true;
            
            clearFilds(userEmail);
            clearFilds(userPass);
        } else {
            // console.log('enter wrong pass or email');
            alert('enter wrong pass or email');
        }
    });
    
    // signIn.disabled = false;
});

backToPageBtn.addEventListener('click', () => {
    document.body.disabled = false;
    greetingBanner.style.cssText = 'visibility: hidden;';
    
});

// localStorage.clear();






