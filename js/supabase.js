import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// https://supabase.com/docs/reference/javascript/auth-getsession

const emailRedirectTo = '/html/index.html';
const url = 'https://ndeakjqfokufnoiqwxjx.supabase.co';
const publicAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kZWFranFmb2t1Zm5vaXF3eGp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkzNjQwNjMsImV4cCI6MjAzNDk0MDA2M30.UUl-1-lbEhevuxX1UoLVgd50E6VXcu4D0lDztZDT2c8';

// Create a single Supabase client for interacting with your database
const supabase = createClient(url, publicAnonKey, { schema: 'users' });

async function createUser(userEmail, userPassword) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: userEmail,
      password: userPassword,
      options: {
        emailRedirectTo: emailRedirectTo,
      },
    });

    if (error) {
      console.error('Error signing up:', error.message);
    } else {
      console.log('User signed up successfully:', data.user);
    }
  } catch (error) {
    console.error('Error creating user:', error.message);
  }
}

async function sha256(str) {
  // Convert the input string to a Uint8Array
  const msgUint8 = new TextEncoder().encode(str);

  // Use the built-in crypto.subtle digest method to create a SHA-256 hash
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);

  // Convert the hash buffer to a hexadecimal string
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

  return hashHex;
}

export { createUser };
export { sha256 };