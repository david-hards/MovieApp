import { login } from "/js/supabase/supabase.js";

let errortext = document.getElementById('login-error-text');
const loginForm = document.querySelector('.login-container');
const btnSubmit = document.getElementById('btn-login-submit');

btnSubmit.addEventListener('click', ()=> {
    console.log('clicked')
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

    if(email == ''){
        errortext.innerText = 'Please enter an email address.';
        return;
    }

    if(password == ''){
        errortext.innerText = 'Please enter a password.';
        return;
    }

    console.log(`pw: ${password}, em: ${email}`);
    try {
        let result = await login(email, password);
        console.log("login result: ", result);
        window.location.replace('/html/pages/list.html');
    } catch (error) {
        console.error('Error logging in:', error.message);
        // Handle specific errors or show user-friendly messages
    }
}