import { logout } from '/js/supabase/supabase.js';

document.addEventListener('DOMContentLoaded', logoutUser);

async function logoutUser() {
    console.log('Logging out...');
    logout();
}
