const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("confirm-password")
const phone = document.getElementById("phone")

//showError:
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector("small");
    small.innerText = message

}
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


//checkRequired
function checkRequired(inputArr) {
    inputArr.forEach(input => {
        if (input.value === '')
            showError(input, `${getFieldName(input)} is required`)
        else
            showSuccess(input)

    });
}

//getfield name:
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//check password:
const checkPassword = (input) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    if (re.test(input.value.trim())) {
        showSuccess(input)
    }
    else {
        showError(input, "password not valid")
    }
}

//check password Match
const passwordMatch= (input1 , input2)=>{
if(input1!==input2)
showError(input2,'Passoword is not matching')

else
showSuccess(input1)
}
//check length:
function checkLength(input, min, max) {
    if (input.value < min) {
        showError(input, ` atleat ${min} characters are required `)
    }
    else if (input.value > max) {
        showError(input, `Maximum ${max} characters are reached`)
    }
    else {
        showSuccess(input);
    }

}
//email:
const validateEmail = (input) => {

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (re.test(input.value.trim())) {
        showSuccess(input)

    }
    else {
        showError(input, "Email is not valid")
    }
};

// check phone number length:
function phoneLength(input) {
    if (input.value.length < 10)
        showError(input, "Enter a valid phone number")
    else if (input.value.length > 10)
        showError(input, "Enter a valid phone number")
    else
        showSuccess(input);
}

// add eventListener:
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //    console.log(username.value)
    // if (username.value === '') {
    //     showError(username, "is required")
    // }
    // else{
    //     showSuccess(username)
    // }
    // if (email.value === '') {
    //     showError(email, "is required")
    // }
    // else{
    //     showSuccess(email)
    // }
    // if (phone.value ==='') {
    //     showError(phone, "is required")
    // }
    // else{
    //     showSuccess(phone)
    // }
    // if (password.value ==='') {
    //     showError(password, "is required")
    // }
    // else{
    //     showSuccess(password)
    // }
    // if (password2.value ==='') {
    //     showError(password2, "is required")
    // }
    // else{
    //     showSuccess(password2)
    // }


    checkRequired([username, phone, password, password2, email]);
    checkLength(username, 3, 20)
    phoneLength(phone);
    validateEmail(email);
    checkPassword(password);
 
    passwordMatch(password,password2);
})
