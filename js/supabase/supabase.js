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

async function logout() {
  try {
    const { error } = await supabase.auth.signOut()

    if (error) {
        console.error('Error signing out:', error.message);
    } else {
        console.log('Successfully logged out');
  
    }
  } catch {
    console.error('Error logging out: ', error.message);
  }
}

async function login(userEmail, userPassword){
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: userEmail,
      password: userPassword,
    })
    console.log(data.session.user.id)
    if(data.session.user.id != null)
      return "pass";
    else
    console.log('Login error: ', error)
      return "fail";
  } catch {
    console.error('Error signing in.')
  }

}

export { createUser };
export { logout };
export { login };
