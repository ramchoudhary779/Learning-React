import Navbar from './Navbar'
const Home = () => {
    return (
        <div>
            <Navbar />
            <div className='home'>
                <h2>Welcome Home Page !</h2>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Home;