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

        // console.log('access granted');
        return signUp.disabled = false;
    } else {
        
        // console.log('access denied');
        return signUp.disabled = true;
    }
}
function validateSignIn() {
    
    if (
        FildValid(mailRegEx, userEmail) &&
        FildValid(passRegEx, userPass)
        ){

        // console.log('access granted');
        return signIn.disabled = false;
    } else {
        
        // console.log('access denied');
        return signIn.disabled = true;
    }
}

function clearFilds (input) {
    setTimeout(() => {input.value = '';}, 500);
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

let userArr = [];

signUp.addEventListener('click', () => {
    
    const error_existing_email = document.querySelector('.email_error');

    let customers = JSON.parse(localStorage.getItem('customers')) ?? [];

    for (let user of customers){

        if (user.email == email.value) {
            error_existing_email.style.cssText = 'visibility: visible;';
            return;
        } 
    }
    
    const user = new Customer(firstName.value, lastName.value, email.value, password.value);
    customers.push(user);
    
    localStorage.setItem('customers', JSON.stringify(customers));
    
    error_existing_email.style.cssText = 'visibility: hiden;';

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

// console.log(data);

signIn.addEventListener('click', () => {
    
    const customers = JSON.parse(localStorage.getItem('customers'));

    const error_signIn_filds = document.querySelector('.error_input');
    
    for (let user of customers) {
        if ( user.email == userEmail.value &&
            user.password == userPass.value ){ 
            greetingBanner.style.cssText = 'visibility: visible;';

            user_info (user.firstName, user.lastName, user.email);
            
            document.body.disabled = true;
            error_signIn_filds.style.cssText = 'visibility: hiden;';

            clearFilds(userEmail);
            clearFilds(userPass);

            return;
        }
    }
    error_signIn_filds.style.cssText = 'visibility: visible;';
    console.log("shit, didn't work"); 
});


function clearStorage () {
    localStorage.removeItem('customers');
}

function user_info (FN, LN, EM) {
    const greetings_inner = document.createElement ('div');
    greetings_inner.classList.add('greetings_inner');
    greetings_inner.innerHTML =`
        <div class="user_img">
        <img src="./assets/img/users-avatar-svgrepo-com.svg" alt="">
        </div><div class="user_info"><h3>${FN} ${LN}</h3>
        <h4>${EM}</h4></div>
        <button class="continue">Continue...</button>
        </div>
    `;
    greetingBanner.append(greetings_inner);

    const backToPageBtn = document.querySelector('.continue');
    backToPageBtn.addEventListener('click', () => {
        document.body.disabled = false;
        greetings_inner.remove();
        greetingBanner.style.cssText = 'visibility: hidden;';
                    
    });
}





