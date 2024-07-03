import { login } from "/js/supabase/supabase.js";

let errortext = document.getElementById('login-error-text');
const loginForm = document.querySelector('.login-container');
const btnSubmit = document.getElementById('btn-login-submit');

btnSubmit.addEventListener('click', ()=> {
    console.log('clicked')
    verifyloginInputs();
})

loginForm.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        // verifyloginInputs();
        console.log('enter pressed');
    }
});

function verifyloginInputs(){
    let email = document.getElementById('login-email');
    let password = document.getElementById('login-password');

    if(email.value == ''){
        errortext.innerText = 'Please enter an email address.';
        return;
    }

    if(password.value == ''){ // Replace with real logic for login ie api.login return bool
        errortext.innerText = 'Please enter a password.';
        return;
    }

    console.log(`pw: ${password.value}, em: ${email.value}`)
    let result = login(email, password)
    console.log(result)
}