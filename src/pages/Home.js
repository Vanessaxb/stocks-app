import Styles from './Styles.module.css'

export default function Home() {
    return(
        <div className='home'>
            {/* <h3>Home Page</h3> */}
            <img className="image" src="https://media.npr.org/assets/img/2023/06/30/gettyimages-1495454858-546cb51939f918af344500f1f44e7035dc36b641-s1100-c50.jpg" alt="React Image" />
            <p className='paragraph'>Welcome to our Stock Prices App!</p>
        </div>
    )
}