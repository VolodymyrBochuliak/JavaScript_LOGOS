import {
  outputText, bold, italic, under, cross,
  dropdownListStyle, dropdownListSize,
  form, error_message, signIn, email,
  password

} from './objectFromPage.js';

// import {
//   mailRegEx, passRegEx
// } from './regexp.js';


export function BIUS_buttons (btn, arr) {
  
  let i = 0;
  btn.addEventListener('click', () => {
   
    i < arr.length;
    if (btn == bold) {
      outputText.style.fontWeight = arr[i++];
    }
    if (btn == italic){
      outputText.style.fontStyle = arr[i++];
    }
    if (btn == under){
      outputText.style.textDecoration = arr[i++];
    }
    if (btn == cross){
      outputText.style.textDecoration = arr[i++];
    }

    if (i == 2){ i = 0; }
   });
}

export function alignContent(btn, align) {
    
    btn.addEventListener('click', () => {
      outputText.style.textAlign = align;
    });
}

export function press_Unpress (btn, target) {
  let arr = [0];
  let i = 1;
  btn.addEventListener ('click', () => {
      
      if (arr.length == 1) {
          target.style.cssText = 'display: block;';
          // console.log('check');
          // console.log(arr.length);
      }
      arr.push(i);
      if (arr.length == 3) {
          target.style.cssText = 'display: none;';
          
          changeFF (dropdownListStyle);
          changeFS (dropdownListSize);
          // console.log('uncheck');
          // console.log(arr.length);
          arr = [0];
      }
  });
}
// font style and font size 
function changeFF(elem) {
  const choiceFF = elem.value;
  outputText.style.fontFamily = choiceFF;
}
function changeFS(elem) {
  const choiceFS = elem.value;
  outputText.style.fontSize = choiceFS;
}

// check form filds with regExp
 export function fildValid (regExp, fild) {
    
  if(!regExp.test(fild.value)) {
      fild.style.border = '2px solid red';
      error_message.style.visibility = 'visible';
      return false;
  } else {
      fild.style.border = '2px solid green';
      error_message.style.visibility = 'hidden';
      return true;
  }
}

// show written password
export function thePasswordIs() {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
} 

function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

// check input filds to correct login and password
export function validateSignUp() {
    
  if ( email.value == 'horobruk@gmail.com' && password.value == '123456789') {

      console.log('access granted');
      return signIn.disabled = false;
  } else {
      
      console.log('access denied');
      return signIn.disabled = true;
  }
}

export function fildOption (arr, directArea) {
  for (let i = 0; i < arr.length; i++){
  
      let j = arr[i];
      
      const option = document.createElement('option');
      option.classList.add('borderStyleOption');
      option.value = j;
      option.textContent = j;
      directArea.append(option);
      j++;
  }
}