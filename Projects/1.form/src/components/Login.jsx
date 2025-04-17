import Navbar from './Navbar'
const Login = () => {
    return (
        <div>
            <Navbar />
            <div >
            <form className='login-form'>
                <div className='heading'>
                    <p>Log In</p>
                </div>
                <div className='account'>
                    <input type='text' name='email' placeholder='Enter your Email' />
                    <input type='password' name='password' placeholder='Enter your Password' />
                    <p>If you have to create account ?<a href='/'>SignUp</a></p>
                    <button>Login</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Login;