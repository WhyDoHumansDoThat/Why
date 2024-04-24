import React, { useState } from "react";

function ChooseBox() {
  // 칸 만들기
  const initialGrid = Array(1).fill(Array(3).fill(false));

  // 그리드 상태를 관리하는 useState 훅
  const [grid, setGrid] = useState(initialGrid);

  // 클릭 및 드래그 이벤트
  const handleCellClick = (rowIndex, cellIndex) => {
    const newGrid = grid.map((row, r) =>
      row.map((cell, c) => {
        // 토글
        if (r === rowIndex && c === cellIndex) {
          return !cell;
        }
        return cell;
      })
    );
    setGrid(newGrid);
  };

  return (
    <div className="container">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              className={`cell ${cell ? "active" : ""}`} 
              onClick={() => handleCellClick(rowIndex, cellIndex)}
              onMouseOver={(e) => {
                if (e.buttons === 1) {
                  handleCellClick(rowIndex, cellIndex);
                }
              }}
            ></div>
          ))}
        </div>
      ))}

      <style>
        {`
          .container {
            display: flex;
            flex-direction: column;
          }

          .row {
            display: flex;
          }

          .cell {
            width: 65px;
            height: 20px;
            border: 1px solid #8A9F98;
            margin-right: 10px;
          }

          .cell.active {
            background-color: #99B0A8;
          }
        `}
      </style>
    </div>
  );
}

export default ChooseBox;
