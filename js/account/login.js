import { login, getUser } from "/js/supabase/supabase.js";
import { verifyEmail } from "/js/account/verify.js";

let errortext = document.getElementById('login-error-text');
const loginForm = document.querySelector('.login-container');
const btnSubmit = document.getElementById('btn-login-submit');

btnSubmit.addEventListener('click', ()=> {
    verifyLoginInputs();
})

loginForm.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        verifyLoginInputs();
    }
});

async function verifyLoginInputs(){
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;

    console.log(`email is ${email}`)

    if(email == ''){
        errortext.innerText = 'Please enter an email address.';
        return;
    }

    if(verifyEmail(email) == false) {
        errortext.innerText = 'Please enter a valid email address.';
        return;
    }

    if(password == ''){
        errortext.innerText = 'Please enter a password.';
        return;
    }

    console.log(`LOGIN: pw: ${password}, em: ${email}`);
    try {
        let result = await login(email, password);
        console.log("login result: ", result);
        getUser();
        //window.location.replace('/html/pages/list.html');
    } catch (error) {
        console.error('Error logging in:', error.message);
        // Handle specific errors or show user-friendly messages
    }
}