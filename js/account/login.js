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
    let emailConfirm = document.getElementById('login-email-confirm');
    let password = document.getElementById('login-password');
    let passwordConfirm = document.getElementById('login-password-confirm');

    if(email.value != null){ // Replace with real logic for login ie api.login return bool
        errortext.innerText = 'Invalid credentials. Please try again.';
        return;
    }

    if(password.value != null){ // Replace with real logic for login ie api.login return bool
        errortext.innerText = 'Invalid credentials. Please try again.';
        return;
    }

    console.log(`pw: ${password.value}, pwc: ${passwordConfirm.value}, em: ${email.value}, emc: ${emailConfirm.value}`)
}