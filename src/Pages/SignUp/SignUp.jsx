import React, { use,    useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router';
import { updateProfile } from 'firebase/auth';
import usePageTitle from '../../hooks/usepageTitle';

const SignUp = () => {
    usePageTitle("SignUp")
    const { createUser,googleLogin,setUser,setLoading } = use(AuthContext);
    const [passwordError, setPasswordError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const name = formData.get("name")
        const email = formData.get("email");
        const photo = formData.get("photo")
        const password = formData.get("password")
        console.log(name, email, photo, password);
        if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters long");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setPasswordError("Password must contain at least one uppercase letter");
            return;
        }
        if (!/[a-z]/.test(password)) {
            setPasswordError("Password must contain at least one lowercase letter");
            return;
        }

        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setPasswordError("Password must contain at least one special character");
            return;
        }
        else {
            setPasswordError("")
        }
        let signedUser;
        createUser(email, password)
            .then(result => {
               signedUser = result.user
                return updateProfile(signedUser,{
                    displayName:name,
                    photoURL:photo
                })
            })
            .then(()=>{
            setUser({ ...signedUser, displayName:name,photoURL:photo})
            toast.success("SignUp SuccessFul!")  
        navigate(location.state || "/")
                    setLoading(false)   
        })
            .catch(error => {
                console.log(error);
                toast.error(error.message || "Sign Up failed")
                setLoading(false)
            })         
    }
       const handleRegisterGoogle = () => {
        googleLogin()
        .then((result) => {
        console.log(result.user);
            toast.success("Google Sign Success");
            navigate("/")
        })
        .catch((error)=>{
            console.log(error);
            toast.error("Google Login Failed")
        }
     ) } 
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-100">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold text-lime-600">Sign Up now!</h1>
                    <form onSubmit={handleSignUp} className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Enter Your Name" required />
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email"  required/>
                        <label className="label">Photo URL</label>
                        <input type="text" name='photo' className="input" placeholder="Photo URL"  required/>
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required />
                        {
                            passwordError && <p className='text-red-500 text-sm mt-1'>{passwordError}</p>
                        }
                        <button type='submit' className="btn btn-neutral mt-4 bg-lime-600  border-none">Sign up</button>
                        <button onClick={handleRegisterGoogle} className="btn bg-white text-black border-[#e5e5e5] mt-4">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                        <p className='font-bold text-center pt-4'>Already Have An Account ?<Link to='/login' className='text-green-600 font-bold'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;