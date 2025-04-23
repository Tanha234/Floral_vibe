import React, { useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from 'firebase/auth';

import { useNavigate } from 'react-router-dom';
import auth from '../firebase/firebase.init';

function Login() {
  const [isSignup, setIsSignup] = useState(true);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const navigate = useNavigate();

  const toggleForm = () => setIsSignup(!isSignup);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (err) {
      alert(err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignup && password !== confirmPass) {
      alert("Passwords don't match!");
      return;
    }

    try {
      if (isSignup) {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(result.user, { displayName: name });

        // Send Email Verification
        await sendEmailVerification(result.user);

        alert("Registration successful! A verification email has been sent.");
        navigate('/');
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        // Check if email is verified
        if (!userCredential.user.emailVerified) {
          alert("Please verify your email before logging in.");
          return;
        }

        navigate('/');
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-2xl p-10 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">
          {isSignup ? 'Create Account' : 'Login to Floral Vibe'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {isSignup && (
            <>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-pink-400"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-pink-400"
              />
            </>
          )}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-pink-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-pink-400"
          />
          {isSignup && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-pink-400"
            />
          )}
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
          >
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <div className="my-6 text-center">
          <p className="text-gray-600">
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              type="button"
              className="text-pink-600 font-semibold hover:underline"
              onClick={toggleForm}
            >
              {isSignup ? 'Login' : 'Sign Up'}
            </button>
          </p>
        </div>

        <div className="flex items-center gap-4 my-4">
          <div className="border-b flex-1" />
          <span className="text-gray-400">or</span>
          <div className="border-b flex-1" />
        </div>

        <button
          onClick={handleGoogleSignin}
          className="w-full border border-gray-300 py-3 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-100 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-gray-700">Continue with Google</span>
        </button>
      </div>
    </div>
  );
}

export default Login;
