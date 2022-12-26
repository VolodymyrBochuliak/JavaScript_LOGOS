// Input regular expretion check

const textRegEx = /^[a-zA-Z]{3,20}$/;
const mailRegEx = /^([a-zA-Z0-9_\-\.]{1,255})@([a-zA-Z0-9_\-\.]{1,255})\.([a-zA-Z]{2,64})$/;
const passRegEx = /[^(!@#$%^&*)][\w]{5,12}/;


// Getting elements from a page

const inputFildDecoration = document.querySelectorAll('.inputFildHolder');

const login = document.querySelector('#userLogin');
const password = document.querySelector('#pass');
const email = document.querySelector('#mail');

const addUser = document.querySelector('.addBtn');
const saveUser = document.querySelector('.saveBtn');


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

login.addEventListener('blur', () => {
    FildValid(textRegEx, login);
    validateAddUser();
});

email.addEventListener('blur', () => {
    FildValid(mailRegEx, email);
    validateAddUser();
});

password.addEventListener ('blur', () => {
    FildValid(passRegEx, password);
    validateAddUser();
});


function validateAddUser() {
    
    if (
        FildValid(textRegEx, login) &&
        FildValid(mailRegEx, email) &&
        FildValid(passRegEx, password)
        ){
        // console.log('access granted');
        return addUser.disabled = false;
    } else {
        // console.log('access denied');
        return addUser.disabled = true;
    }
}

const form = document.getElementById("form");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

const userTable = document.querySelector ('.table_inner');
addUser.addEventListener('click', () => {
    
    validateAddUser();
    createUserItem();
    
});

let listNum = 0;

function createUserItem() {

    let newUser = {
        positionNumber: "",
        userLog: login.value,
        userPass: password.value,
        userMail: email.value,
        edit: "",
        delete: ""
    };
    // console.log(newUser);
    
    const newRow = document.createElement('tr');
    newRow.classList.add('table_row');
    userTable.append(newRow);
    
    listNum++;
    
    // Users butoons
    const editBtn = document.createElement("button");
    editBtn.classList.add('edit_btn', 'btn');
    editBtn.textContent = 'Edit';

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add('delete_btn', 'btn');
    deleteBtn.innerText = 'Delete';

    Object.entries(newUser).forEach(([key, value]) => {
        
        // console.log(value);

        const newCell = document.createElement('td');
        newCell.classList.add(`${key}`);
        newRow.append(newCell);
                
        newCell.textContent = value;

        if (key === "positionNumber") {

            newCell.innerText = `${listNum})`;
        }
        if (key === 'edit') {

            newCell.append(editBtn);
        }
        if (key === 'delete') {

            newCell.append(deleteBtn);
        }

    });

    clearFilds(login);
    clearFilds(email);
    clearFilds(password);
    addUser.disabled = true;

    const userLog = document.querySelector('.userLog');
    const userPass = document.querySelector('.userPass');
    const userMail = document.querySelector('.userMail');

    deleteBtn.addEventListener('click', () => {
        // const deleteRow = newRow.remove();
        newRow.remove();
    });
    
    editBtn.addEventListener('click', () => {
    // повертаєм значення в інпути
        login.value = userLog.innerText;
        password.value = userPass.innerText;
        password.type = 'text';
        email.value = userMail.innerText;
        // міняєм кнопку add на save
        addUser.style.display = 'none';
        saveUser.style.display = 'block';

        saveUser.addEventListener('click', () => {
            
            // переписуєм значення з інпутів в таблицю
            userLog.innerText = login.value;
            userPass.innerText = password.value;
            userMail.innerText = email.value;
            
            // чистим поля інпутів
            clearFilds(login);
            clearFilds(email);
            clearFilds(password);
            
            addUser.style.display = 'block';
            saveUser.style.display = 'none';
        });


    });
   
    return {userLog, userPass, userMail, editBtn, deleteBtn}
}




function clearFilds (input) {
    setTimeout(() => {input.value = '';}, 100);
}

