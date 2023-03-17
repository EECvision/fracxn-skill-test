import classes from "./Partnership.style";
import BinanceIcon from "../../../assets/partner-binance.png";
import CoinbaseIcon from "../../../assets/partner-coinbase.png";
import BitfinexIcon from "../../../assets/partner-bitfinex.png";
import CoinMarketCapIcon from "../../../assets/partner-coinMarketCap.png";
import Image from "next/image";

const Partnership = () => {
  return (
    <div
      style={{ clipPath: "polygon(0 0, 100% 15%, 100% 100%, 0 85%)" }}
      className={classes.container}
    >
      <div style={{ background: "#101F35" }} className={classes.wrapper}>
        <Image src={CoinbaseIcon} alt="" className={classes.listItem} />
        <Image src={BinanceIcon} alt="" className={classes.listItem} />
        <Image src={CoinMarketCapIcon} alt="" className={classes.listItem} />
        <Image src={BitfinexIcon} alt="" className={classes.listItem} />
      </div>
    </div>
  );
};

export default Partnership;

{
  /*    <CoinbaseIcon className={classes.listItem} />
        <BinanceIcon className={classes.listItem} />
        <CoinMarketCapIcon className={classes.listItem} />
        <BitfinexIcon className={classes.listItem} /> */
}
