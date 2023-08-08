import {useParams} from "react-router-dom"
import Styles from './Styles.module.css'


export default function Stock(props) {
    // const {name, lastPrice, change} = props
    // const  {symbol, lastPrice} = props

    // Grabbing the Currency symbol from the URL Params
    // const params = useParams()
    const {name, symbol, lastPrice, change} = useParams()
    // const symbol = params.symbol
    // const lastPrice = params.lastPrice
    // console.log(params);
    return (
        <div className={Styles.stock}>
            <div className={Styles.header}>
                <h3>{name}</h3> 
                <h4>{symbol}</h4> 
            </div>            
            <h4 className={Styles.price}>Price: {lastPrice}</h4>
            <h4 className={Styles.change}>Change: {change}</h4>
        </div>
    )
}