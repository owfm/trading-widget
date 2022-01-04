import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import AccountSearch from "./AccountSearch";

const App = () => {
  const [ladderVisible, setLadderVisible] = React.useState(true);
  const [buyChange, setBuyChange] = React.useState(null);
  const [sellChange, setSellChange] = React.useState(null);

  // const sellValue = pricesLadder?.bid[1]?.price;
  // const buyValue = pricesLadder?.offer[1]?.price;
  const [buyValue, setBuyValue] = React.useState(1000.0);
  const [sellValue, setSellValue] = React.useState(950.0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setBuyValue((prev) => {
        const newValue =
          Math.random() > 0.5 ? prev + Math.random() : prev - Math.random();
        if (newValue > prev) {
          setBuyChange("up");
          setTimeout(() => {
            setBuyChange(null);
          }, 350);
        }
        if (newValue < prev) {
          setBuyChange("down");
          setTimeout(() => {
            setBuyChange(null);
          }, 350);
        }

        return newValue;
      });
      setSellValue((prev) => {
        const newValue =
          Math.random() > 0.5 ? prev + Math.random() : prev - Math.random();
        if (newValue > prev) {
          setSellChange("up");
          setTimeout(() => {
            setSellChange(null);
          }, 350);
        }
        if (newValue < prev) {
          setSellChange("down");
          setTimeout(() => {
            setSellChange(null);
          }, 350);
        }

        return newValue;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleLadderShowClick = () => {
    setLadderVisible(!ladderVisible);
  };

  return (
    <section className="container">
      <header>
        <select>
          <option value="CP">3M Copper</option>
          <option value="AA">3M Alum</option>
          <option value="SN">3M Tin</option>
          <option value="ZN">3M Zinc</option>
        </select>
      </header>
      <section className="price-container">
        <div className="price-box sell">
          <h2>SELL</h2>
          <section className="price">
            <div className="most-sig">
              {sellValue.toFixed(2).split(".")[0].slice(0, -2)}
            </div>
            <div className="mid-sig">
              {sellValue.toFixed(2).split(".")[0].slice(-2)}.
            </div>
            <div className="least-sig">
              {sellValue.toFixed(2).split(".")[1]}
            </div>
          </section>
          <AnimatePresence>
            {buyChange !== null && (
              <motion.div
                className={`change ${buyChange}`}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 0 }}
              />
            )}
          </AnimatePresence>
        </div>
        <div className="price-box buy">
          <h2>BUY</h2>
          <section className="price">
            <div className="most-sig">
              {buyValue.toFixed(2).split(".")[0].slice(0, -2)}
            </div>
            <div className="mid-sig">
              {buyValue.toFixed(2).split(".")[0].slice(-2)}.
            </div>
            <div className="least-sig">{buyValue.toFixed(2).split(".")[1]}</div>
          </section>
          <AnimatePresence>
            {sellChange !== null && (
              <motion.div
                className={`change ${sellChange}`}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 0 }}
              />
            )}
          </AnimatePresence>
        </div>
      </section>

      <section className="inputs">
        <AccountSearch />
        <select className="half-width">
          <option>XLME</option>
          <option>XALT</option>
          <option>JLQD</option>
        </select>
        <select className="half-width">
          <option>FOK</option>
          <option>IOC</option>
        </select>
        <input className="half-width" type="number" />
        <select className="half-width">
          <option>tonne</option>
          <option>lot</option>
        </select>
      </section>

      <footer>
        <button className="half-width sell">sell</button>
        <button className="half-width buy">buy</button>
        <motion.div
          whileHover={{
            transform: "rotate(180deg)",
            backgroundColor: "var(--stonex-primary-mid-blue)",
            color: "var(--stonex-neutral-grey-3)",
          }}
          transition={{ type: "spring", stiffness: 250 }}
          className="expand-icon"
          onClick={handleLadderShowClick}
        >
          {ladderVisible ? "-" : "+"}
        </motion.div>
      </footer>

      <AnimatePresence>
        {ladderVisible && (
          <motion.section
            className="ladder-wrapper"
            initial={{ height: 0, opacity: 0, scale: 0.2 }}
            animate={{ height: "auto", opacity: 1, scale: 1 }}
            exit={{ height: 0, scale: 0 }}
            transition={[{ type: "spring", stiffness: 300, duration: 2 }]}
          >
            <table id="price-ladder-table">
              <tr>
                <td>4</td>
                <td>{Number(950).toFixed(2)}</td>
                <td>{Number(960).toFixed(2)}</td>
                <td>10</td>
              </tr>
              <tr>
                <td>4</td>
                <td>{Number(950).toFixed(2)}</td>
                <td>{Number(960).toFixed(2)}</td>
                <td>10</td>
              </tr>
              <tr>
                <td>4</td>
                <td>{Number(950).toFixed(2)}</td>
                <td>{Number(960).toFixed(2)}</td>
                <td>10</td>
              </tr>
              <tr>
                <td>4</td>
                <td>{Number(950).toFixed(2)}</td>
                <td>{Number(960).toFixed(2)}</td>
                <td>10</td>
              </tr>
              <tr>
                <td>4</td>
                <td>{Number(950).toFixed(2)}</td>
                <td>{Number(960).toFixed(2)}</td>
                <td>10</td>
              </tr>
              <tr>
                <td>4</td>
                <td>{Number(950).toFixed(2)}</td>
                <td>{Number(960).toFixed(2)}</td>
                <td>10</td>
              </tr>
              <tr>
                <td>4</td>
                <td>{Number(950).toFixed(2)}</td>
                <td>{Number(960).toFixed(2)}</td>
                <td>10</td>
              </tr>
              <tr>
                <td>4</td>
                <td>{Number(950).toFixed(2)}</td>
                <td>{Number(960).toFixed(2)}</td>
                <td>10</td>
              </tr>
              <tr>
                <td>4</td>
                <td>{Number(950).toFixed(2)}</td>
                <td>{Number(960).toFixed(2)}</td>
                <td>10</td>
              </tr>
              <tr>
                <td>4</td>
                <td>{Number(950).toFixed(2)}</td>
                <td>{Number(960).toFixed(2)}</td>
                <td>10</td>
              </tr>
            </table>
          </motion.section>
        )}
      </AnimatePresence>
    </section>
  );
};

export default App;
