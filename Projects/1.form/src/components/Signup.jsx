import main from "../Images/main.jpg"
import Navbar from './Navbar'
const Signup = () => {
    return (
      <div>
        <Navbar />

        <div className='main-page'>
            <form>
                <div className='heading'>
                    <p>Sign Up</p>
                </div>
                <div className='account'>
                    <input type='text' name='name' placeholder='Enter your Name' />
                    <input type='text' name='email' placeholder='Enter your Email' />
                    <input type='password' name='password' placeholder='Enter your Password' />
                    <p>Already have an account ? <a href='/login'>Login</a></p>
                    <button>SignUp</button>
                </div>
            </form>
            <div>
                <img src={main} alt='image' />
            </div>

        </div>
      </div>
    )
}

export default Signup;