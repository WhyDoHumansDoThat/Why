import styles from "./Table.module.css";

function Table({ time, date }) {
  let grid = Array(date);
  for (let i = 0; i < time; i++) {
    grid[i] = Array(time);
  }

  console.log(grid);

  return (
    <div className={styles.container}>
      {grid.map((v, i) => {
        return <div key={i} className={styles.block}></div>;
      })}
    </div>
  );
}

export default Table;
