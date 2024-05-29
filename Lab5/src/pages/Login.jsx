import React, { useEffect, useState } from "react";
import { GoogleButton } from 'react-google-button';
import "../css/sign-in.css";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../config';

export function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {googleSignIn, user} = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            localStorage.setItem('token', user.accessToken);
            localStorage.setItem('user', JSON.stringify(user));
            document.getElementById("error").innerText = "";
            navigate('/');
        } catch (error) {
            document.getElementById("error").innerText = error;
        }
    }

    const handleGoogleSignIn = async () => {
        try{
            await googleSignIn();
        } catch (error){
            console.error(error);
        }
    };

    useEffect(() => {
        if(user != null){
            navigate('/');
        }
    }, [user]);

    return(
    <>

    <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
    </svg>

    <div class="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
        <button class="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center" id="bd-theme" type="button"
            aria-expanded="false" data-bs-toggle="dropdown" aria-label="Toggle theme (auto)">
            <svg class="bi my-1 theme-icon-active" width="1em" height="1em">
                <use href="#circle-half"></use>
            </svg>
            <span class="visually-hidden" id="bd-theme-text">Toggle theme</span>
        </button>
        <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
            <li>
                <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light"
                    aria-pressed="false">
                    <svg class="bi me-2 opacity-50" width="1em" height="1em">
                        <use href="#sun-fill"></use>
                    </svg>
                    Light
                    <svg class="bi ms-auto d-none" width="1em" height="1em">
                        <use href="#check2"></use>
                    </svg>
                </button>
            </li>
            <li>
                <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark"
                    aria-pressed="false">
                    <svg class="bi me-2 opacity-50" width="1em" height="1em">
                        <use href="#moon-stars-fill"></use>
                    </svg>
                    Dark
                    <svg class="bi ms-auto d-none" width="1em" height="1em">
                        <use href="#check2"></use>
                    </svg>
                </button>
            </li>
            <li>
                <button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto"
                    aria-pressed="true">
                    <svg class="bi me-2 opacity-50" width="1em" height="1em">
                        <use href="#circle-half"></use>
                    </svg>
                    Auto
                    <svg class="bi ms-auto d-none" width="1em" height="1em">
                        <use href="#check2"></use>
                    </svg>
                </button>
            </li>
        </ul>
    </div>

    <main class="form-signin w-100 m-auto">
        <div class="container">
            <div class="row justify-content-center">
                    <form onSubmit={handleSubmit}>
                        <img class="mb-4" src="/images/logo.svg" alt="" width="72" height="57" />
                        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                        <div class="form-floating">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required value={email} onChange={(e) => setEmail(e.target.value)}  />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            <label for="floatingPassword">Password</label>
                        </div>

                        <div class="form-check text-start my-3">
                            <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Remember me
                            </label>
                        </div>
                        <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                        <div id="google-button">
                        <GoogleButton onClick={handleGoogleSignIn} id="google-button">Sign-in with Google</GoogleButton>
                        </div>
                        <p id="error"></p>
                        <p class="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
                    </form>
            </div>
        </div>
    </main>
    <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
</>
    );
}

export default Login;