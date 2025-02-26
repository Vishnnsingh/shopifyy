import React from "react";
import Style from "../Home/Home.module.css";

const Home = () => {
  return (
    <div className={Style.homes}>
      <h1 className={Style.reacts}>Welcome to React</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quos vero
        sunt at iusto sit id aut odio assumenda amet, quas ipsa magnam. Suscipit
        dignissimos, et impedit voluptates distinctio maxime vero labore?
        Veritatis reiciendis assumenda, possimus saepe sed rem illo vel ipsum
        porro eius amet modi ab dolor fuga voluptatem?
      </p>
      <button className={Style.exploreBtn}>Explore More !!!</button>
    </div>
  );
};

export default Home;
