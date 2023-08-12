import { Link } from "react-router-dom";
import Styles from '../pages/Styles.module.css'
import Stock from '../pages/Stock'

export default function Dashboard(props) {
    const stocks = [
        {name: "Apple Inc.", symbol: "AAPL", lastPrice: 140.64, change: -0.280000000000001, high: 141.74, low: 140.35, open: 141.5},
        {name: "Microsoft Corporation", symbol: "MSFT", lastPrice: 64.98, change: 0.109999999999999, high: 65.45, low: 64.76, open: 65.12},
        {name: "Alphabet Inc.", symbol: "GOOGL", lastPrice: 835.14, change: -4.50999999999999, high: 844, low: 829.1, open: 842},
        {name: "Facebook, Inc.", symbol: "FB", lastPrice: 140.34, change: 0.810000000000002, high: 141.0244, low: 139.76, open: 140.08},
        {name: "Oracle Corporation", symbol: "ORCL", lastPrice: 44.65, change: -0.300000000000004, high: 45.09, low: 44.575, open: 44.91},
        {name: "Intel Corporation", symbol: "INTL", lastPrice: 36.16, change: -0.370000000000005, high: 36.78, low: 36.125, open: 36.58}
      ];
            
    return (
        <div>
            {stocks.map((stock) => {
                const {name, symbol, price, change} = stock;
               
                return (
                    
                    // <Link to={`/stock/${name}/${symbol}/${lastPrice}/${change}`}>
                    <Link to={`/stock/${symbol}`}>
                        <h5>{name} </h5>
                        {/* <Stock {...stock}/> */}
                        {/* <div>
                            <div className={Styles.companies}>
                                <h5>Company Name {name} </h5>
                            </div>
                            <div className={Styles.price}>
                                <h5>Price {price}</h5>
                            </div>
                            <div className={Styles.change}>
                                <h5>Change {change}</h5>
                            </div>
                        </div> */}
                    </Link>
                );
            
            })}
        </div>
    )
}