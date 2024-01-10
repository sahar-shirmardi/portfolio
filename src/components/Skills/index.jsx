/* eslint-disable react/prop-types */
import skills from "/src/data/skills";

import styles from "./styles.module.scss";

const Skills = () => {
  return (
    <div className={styles.container}>
      {skills.map((skill) => (
        <div key={skill.title}>
          <div
            className={styles.card}
            style={{
              backgroundColor: skill.color,
              borderRadius: `${(((Math.random() * 100) % 2) + 1).toFixed(
                2
              )}rem ${(((Math.random() * 100) % 2) + 1).toFixed(2)}rem ${(
                ((Math.random() * 100) % 2) +
                1
              ).toFixed(2)}rem ${(((Math.random() * 100) % 2) + 1).toFixed(
                2
              )}rem`,
              transform: `translate(${((Math.random() * 100) % 3) - 1.5}rem, ${
                ((Math.random() * 100) % 3) - 1.5
              }rem)`,
            }}
          >
            <p>{skill.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
