import { createUser } from '/js/supabase.js';


let supabaseButton = document.getElementById('supabase-button');

// supabaseButton.addEventListener('click', () => {
//     console.log('button clicked');
// });

supabaseButton.addEventListener('click', () => {
    console.log('button clicked');
    createUser();
});
