import Styles from '../pages/Styles.module.css'

export default function About() {
    return (
        <div className={Styles.aboutContainer}>         
            <h3 className={Styles.aboutTitle}>About this App</h3>
            <h4 className={Styles.aboutDescription}>"Welcome to our Stock Prices App! You're about to experience the world of finance at your fingertips. Our app provides real-time and up-to-date stock price information for a wide range of financial symbols. Whether you're interested in tracking the latest developments in the stock market, monitoring your favorite companies, or exploring investment opportunities, our app has you covered. With an intuitive interface, you can effortlessly search for stock symbols, view detailed information about individual stocks, and keep an eye on price changes and fluctuations. Stay informed and make informed decisions as you continue to grow your coding skills and expand your understanding of the financial world. Get ready to embark on a journey where technology meets finance, all from the comfort of your screen. Start exploring stock prices today with our user-friendly and educational app!"</h4>
        </div>
    )
}

// {
//     return (
//         <div className="flex justify-center items-center h-screen"> 
//         <div className="bg-black p-8 rounded-lg shadow-md w-96">
//             <h3 className="text 2x1 font-semibold mb-4">About this App</h3>
//             <h4 className="text-gray-700">"Welcome to our Stock Prices App! You're about to experience the world of finance at your fingertips. Our app provides real-time and up-to-date stock price information for a wide range of financial symbols. Whether you're interested in tracking the latest developments in the stock market, monitoring your favorite companies, or exploring investment opportunities, our app has you covered. With an intuitive interface, you can effortlessly search for stock symbols, view detailed information about individual stocks, and keep an eye on price changes and fluctuations. Stay informed and make informed decisions as you continue to grow your coding skills and expand your understanding of the financial world. Get ready to embark on a journey where technology meets finance, all from the comfort of your screen. Start exploring stock prices today with our user-friendly and educational app!"</h4>
//         </div>
//         </div>
//     )
// }