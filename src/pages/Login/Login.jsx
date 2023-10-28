import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/Ai';
import { FcGoogle } from 'react-icons/fc';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';


const Login = () => {
    const {signIn,signInWithGoogle}= useContext(AuthContext);


    const handleLogin = e =>{
        e.preventDefault();
        const form =e.target;
        const email =form.email.value;
        const password =form.password.value;
        console.log(email, password);

        signIn(email,password)
        .then(result =>{
         alert('login success')
            const user =result.user;
            console.log(user);
        })
        .catch(error => console.log(error))
        

    }
    const handleGoogleSignIn=()=>{
        signInWithGoogle()
        .then(result =>{
            console.log(result.user)

        })
        .catch(error =>console.log(error.message))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row ">
                <div className="text-center w-1/2 mr-14 lg:text-left">
                    <img src={img} alt="" />
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleLogin}className="card-body">
                        <h2 className='text-2xl font-bold text-center'> Sign in</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" placeholder="Your email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Confirm Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover font-bold">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            
                            <input className="btn bg-[#FF3811] text-white" type="submit" value="Sign in" />
                        </div>
                        <div className='text-center'>
                            <p>Or Sign In with</p>
                            <div className='flex justify-center gap-4 mt-2'>
                                <Link><AiFillFacebook /> </Link>
                                <Link onClick={handleGoogleSignIn}><FcGoogle /> </Link>
                                <Link><AiFillInstagram /> </Link>
                            </div>
                            <div className='mt-3'>
                                <p >New to Car Doctors? <Link to="/signup" className='text-orange-500 font-bold '>Sign up</Link></p>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;