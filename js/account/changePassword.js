import { createUser } from '/js/supabase.js';
import { sha256 } from "/js/supabase.js";

let errortext = document.getElementById('change-password-error-text');
// const changePasswordForm = document.querySelector('.change-password-container');
const btnSubmit = document.getElementById('btn-change-password-submit');

btnSubmit.addEventListener('click', ()=> {
    console.log('sign up submit button clicked')
    verifyPasswordInputs();
})

change-passwordForm.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        verifyPasswordInputs();
        console.log('enter pressed');
    }
});

function verifyPasswordInputs(){
    let oldPassword = document.getElementById('change-password-old').value;
    let newPassword = document.getElementById('change-password-new').value;
    let newPasswordConfirm = document.getElementById('change-password-new-confirm').value;

    console.log(`pw old: ${oldPassword}, pw new: ${newPassword}, new confirm: ${newPasswordConfirm}`)

    if(false){ // Change when able to verify existing password is correct
        errortext.innerText = 'Existing password incorrect. Please try again.';
        return;
    }

    if(password != passwordConfirm){
        errortext.innerText = 'Passwords do not match. Please try again.';
        return;
    }

    sha256(password).then(hash => {
        console.log('SHA-256 hash:', hash);
        createUser(email, password); // use hash version once debugged
      }).catch(err => console.error('Error calculating SHA-256 hash:', err));
}