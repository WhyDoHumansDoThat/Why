// import { getDaysInMonth, subMonths } from "date-fns";
// import { useState } from "react";

// const DATE_MONTH_FIXER = 1;
// const CALENDER_LENGTH = 35;
// const DEFAULT_TRASH_VALUE = 0;
// const DAY_OF_WEEK = 7;
// const DAY_LIST = ["일", "월", "화", "수", "목", "금", "토"];

// function Calendar() {
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const totalMonthDays = getDaysInMonth(currentDate);

//   const prevDayList = Array.from({
//     length: Math.max(0, currentDate.getDay() - 1),
//   }).map(() => DEFAULT_TRASH_VALUE);

//   const currentDayList = Array.from({ length: totalMonthDays }).map(
//     (_, i) => i + 1
//   );

//   const nextDayList = Array.from({
//     length: CALENDER_LENGTH - currentDayList.length - prevDayList.length,
//   }).map(() => DEFAULT_TRASH_VALUE);

//   const currentCalendarList = prevDayList.concat(currentDayList, nextDayList);

//   const weekCalendarList = currentCalendarList.reduce(
//     (acc: number[][], cur, idx) => {
//       const chunkIndex = Math.floor(idx / DAY_OF_WEEK);
//       if (!acc[chunkIndex]) {
//         acc[chunkIndex] = [];
//       }
//       acc[chunkIndex].push(cur);
//       return acc;
//     },
//     []
//   );

//   console.log(weekCalendarList);

//   return <div></div>;
// }

// export default Calendar;

import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addMonths,
  subMonths,
  differenceInCalendarDays,
  addDays,
  format,
  getMonth,
  isSaturday,
  isSunday,
} from "date-fns";
import { useState, useCallback, useMemo } from "react";
import styles from "./Calendar.module.css";

function Calendar({ date, setDate }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const week = ["일", "월", "화", "수", "목", "금", "토"];

  const nextMonthHandler = useCallback(() => {
    setCurrentDate(addMonths(currentDate, 1));
  }, [currentDate]);

  const prevMonthHandler = useCallback(() => {
    setCurrentDate(subMonths(currentDate, 1));
  }, [currentDate]);

  const createMonth = useMemo(() => {
    const monthArray = [];
    let day = startDate;
    while (differenceInCalendarDays(endDate, day) >= 0) {
      monthArray.push(day);
      day = addDays(day, 1);
    }
    return monthArray;
  }, [startDate, endDate]);

  const onClick = (e) => {
    let f = false;

    date.map((v) =>
      v === format(e.target.value, "yyyyMMdd") ? (f = true) : ""
    );

    if (f === true) {
      setDate(date.filter((it) => it !== format(e.target.value, "yyyyMMdd")));
    } else {
      setDate([...date, format(e.target.value, "yyyyMMdd")]);
    }
  };

  return (
    <section className={styles.calendar}>
      <div className={styles.monthTitle}>
        <button onClick={prevMonthHandler} className={styles.prevButton}>
          {"<"}
        </button>

        <div className={styles.month}>{format(currentDate, " yyyy년 M월")}</div>
        <button onClick={nextMonthHandler} className={styles.nextButton}>
          {">"}
        </button>
      </div>
      <div className={styles.dayContainer}>
        {" "}
        {week.map((v, i) => {
          let style;
          if (i === 0) {
            style = { color: "red" };
          } else if (i === 6) {
            style = { color: "blue" };
          }
          return (
            <div key={`day${i}`} style={style}>
              {v}
            </div>
          );
        })}
      </div>
      <div className={styles.dateContainer}>
        {createMonth.map((v, i) => {
          let style;
          const validation = getMonth(currentDate) === getMonth(v);
          const today =
            format(new Date(), "yyyyMMdd") === format(v, "yyyyMMdd");
          const select = date.includes(format(v, "yyyyMMdd"));

          if (validation & isSaturday(v)) {
            style = {
              color: "blue",
            };
          } else if (validation && isSunday(v)) {
            style = {
              color: "red",
            };
          }

          if (select) {
            style = {
              color: "black",
              backgroundColor: "#6d8976",
            };
          }

          return (
            <button
              key={`date${i}`}
              className={
                validation
                  ? today
                    ? styles.today
                    : styles.currentMonth
                  : styles.diffMonth
              }
              style={style}
              onClick={onClick}
              value={v}
            >
              {format(v, "d")}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default Calendar;
