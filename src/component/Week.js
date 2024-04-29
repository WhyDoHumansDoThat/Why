import styles from "./Week.module.css";

function Week({ date, setDate, onKeyDown }) {
  const week = ["일", "월", "화", "수", "목", "금", "토"];

  const onClick = (e) => {
    let f = false;
    date.map((v) => (v === e.target.value ? (f = true) : ""));
    if (f === true) {
      setDate(date.filter((it) => it !== e.target.value));
    } else {
      setDate([...date, e.target.value]);
    }
  };

  return (
    <div className={styles.container}>
      {week.map((v, i) => {
        let style;
        const select = date.includes(v);

        if (select) {
          style = {
            backgroundColor: "#6d8976",
          };
        }

        return (
          <div key={i} className={styles.week}>
            {v}
            <button
              className={styles.block}
              onClick={onClick}
              value={v}
              style={style}
              onKeyDown={onKeyDown}
            ></button>
          </div>
        );
      })}
    </div>
  );
}

export default Week;
