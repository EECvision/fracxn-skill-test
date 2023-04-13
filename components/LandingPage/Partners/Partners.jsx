import classes from "./Partners.module.css";
import BinanceIcon from "../../../assets/partner-binance.png";
import CoinbaseIcon from "../../../assets/partner-coinbase.png";
import BitfinexIcon from "../../../assets/partner-bitfinex.png";
import CoinMarketCapIcon from "../../../assets/partner-coinMarketCap.png";
import Image from "next/image";

const Partners = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.innerWrapper}>
          {[1, 2].map((_, idx) => (
            <div key={idx} className={classes.animationContainer}>
              <Image src={CoinbaseIcon} alt="" className={classes.listItem} />
              <Image src={BinanceIcon} alt="" className={classes.listItem} />
              <Image
                src={CoinMarketCapIcon}
                alt=""
                className={classes.listItem}
              />
              <Image src={BitfinexIcon} alt="" className={classes.listItem} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
