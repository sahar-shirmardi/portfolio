/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import designs from "/src/data/designs";
import drawings from "/src/data/drawings";

import styles from "./styles.module.scss";

const Work = ({ type }) => {
  const [items, setItems] = useState(
    type === "designs" ? designs : type === "drawings" ? drawings : []
  );

  useEffect(() => {
    setItems(
      type === "designs" ? designs : type === "drawings" ? drawings : []
    );
  }, [type]);

  return (
    <div className={styles.container}>
      {items.map((item) => (
        <div key={item.id}>
          <div
            className={`${styles.card} ${item.url ? styles.link : ""}`}
            onClick={() => {
              if (item.url) window.open(item.url, "_blank");
            }}
          >
            <img src={item.cover} alt=":(" />

            <div>
              <h4>{item.title}</h4>

              {item.description ? <h6> {item.description} </h6> : null}
              <h6></h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
