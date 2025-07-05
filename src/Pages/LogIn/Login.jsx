import React, {  use,  useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
const {signIn,googleLogin,loading,setLoading} = use(AuthContext);
const location = useLocation();
console.log(location.pathname);

const navigate = useNavigate();
const [passwordError,setPasswordError] = useState("");
const handleLogIn =(e) => {
e.preventDefault();
setLoading(true);
setPasswordError("")
const form = e.target;
const email = form.email.value;
const password = form.password.value;
console.log(email,password);

signIn(email,password)
.then((result) => {
    console.log(result.user);
    setLoading(false)
    toast.success("LogIn SuccessFull");
    navigate(`${location.state ? location.state : "/"}`)
})
.catch((error) => {
    console.log(error.code);
    setLoading(false)
    toast.error("LogInFailed")
    if(error.code === "auth/invalid-credential."){
        setPasswordError("Invalid email or password. Please try again.")
    }
    else if (error.code === "auth/user-not-found.") {
        setPasswordError("No account found with this email");
    }
    else if (error.code === "auth/wrong-password" ){
        setPasswordError("Incorrect password")
    }
    else{
        setPasswordError('Login failed. Please try again later');
    }
})
}
const handleGoogleLogin = () => {
    googleLogin()
    .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Google SignIn Successful!")
        navigate("/")
    })
    .catch((error) => {
        console.log(error);
        toast.error("Google LogIn Failed")
        
    })
}

    return (
       <div className="min-h-screen flex items-center justify-center bg-base-100">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold text-lime-600">LogIn now!</h1>
                    <form onSubmit={handleLogIn}    className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" autoComplete='off' required />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" autoComplete='off' required />
                        {
                            passwordError && <p className='text-red-500 text-sm mt-1'>
                                {passwordError}
                            </p>
                        }
                         <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4 bg-lime-600  border-none" disabled={loading}> {loading ? "Logging in..." : "Log In"}</button>
                        <button type='button' onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
                        <p className='font-bold text-center pt-4'>Already Have An Account ?<Link to='/signup' className='text-green-600 font-bold'>Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

