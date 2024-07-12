import { logout, getUser } from '/js/supabase/supabase.js';

let loginText = document.getElementById('login-again');

// loginText.style.visibility = 'hidden'

document.addEventListener('DOMContentLoaded', logoutUser);

async function logoutUser() {
    console.log('Logging out...');
    
    // Show initial message
    const title = document.getElementById('logout-title');
    title.textContent = 'Logging out...';

    // Perform logout
    const success = await logout();

    // Update message based on logout success
    if (success) {
        title.textContent = 'Logout successful';
        loginText.style.visibility = 'visible';
    } else {
        title.innerHTML = 'Logout failed'; // Optionally handle logout failure
        loginText.style.visibility = 'hidden';
    }

    getUser();
}
