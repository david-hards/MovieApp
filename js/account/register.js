import { createUser } from '/js/supabase/supabase.js';
import { verifyEmail } from "/js/account/verify.js";


let errortext = document.getElementById('register-error-text');
const registerForm = document.querySelector('.register-container');
const btnSubmit = document.getElementById('btn-register-submit');

btnSubmit.addEventListener('click', ()=> {
    console.log('sign up submit button clicked')
    verifyRegisterInputs();
})

registerForm.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        verifyRegisterInputs();
        console.log('enter pressed');
    }
});

function verifyRegisterInputs(){
    let email = document.getElementById('register-email').value;
    let emailConfirm = document.getElementById('register-email-confirm').value;
    let password = document.getElementById('register-password').value;
    let passwordConfirm = document.getElementById('register-password-confirm').value;

    console.log(`REGISTER: pw: ${password}, pwc: ${passwordConfirm}, em: ${email}, emc: ${emailConfirm}`)

    if(email == '' || emailConfirm == ''){
        errortext.innerText = 'Please enter an email address.';
        return;
    }

    if(verifyEmail(email) == false || verifyEmail(emailConfirm) == false) {
        errortext.innerText = 'Please enter a valid email address.';
        return;
    }

    if(email != emailConfirm){
        errortext.innerText = 'Emails do not match. Please try again.';
        return;
    }

    if(password == '' || passwordConfirm == ''){
        errortext.innerText = 'Please enter a password.';
        return;
    }

    if(password != passwordConfirm){
        errortext.innerText = 'Passwords do not match. Please try again.';
        return;
    }

    console.log('user created')

    createUser(email, password);
}