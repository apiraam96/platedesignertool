import React, { useState } from "react";

const Grid = ({ rows = 10, cols = 10 }) => {
  // Initialize grid data as a 2D array
  const [gridData, setGridData] = useState(
    Array.from({ length: rows }, () => Array(cols).fill("")),
  );

  // Handle cell value change
  const handleCellChange = (row, col, value) => {
    const updatedData = gridData.map((rowData, rIdx) =>
      rowData.map((cell, cIdx) =>
        rIdx === row && cIdx === col ? value : cell,
      ),
    );
    setGridData(updatedData);
  };

  return (
    <div className="inline-block">
      {/* Column Labels */}
      <div className="flex">
        {/* Top-left corner */}
        <div className="w-12 h-12 bg-gray-200 border border-gray-300"></div>
        {Array.from({ length: cols }, (_, i) => (
          <div
            key={`col-${i}`}
            className="w-24 h-12 flex items-center justify-center bg-gray-100 border border-gray-300 text-sm font-medium"
          >
            {i + 1}
          </div>
        ))}
      </div>

      {/* Rows with labels and cells */}
      {Array.from({ length: rows }, (_, rowIdx) => (
        <div key={`row-${rowIdx}`} className="flex">
          {/* Row label */}
          <div className="w-12 h-12 flex items-center justify-center bg-gray-100 border border-gray-300 text-sm font-medium">
            {String.fromCharCode(65 + rowIdx)}
          </div>
          {/* Row cells */}
          {Array.from({ length: cols }, (_, colIdx) => (
            <input
              key={`cell-${rowIdx}-${colIdx}`}
              className="w-24 h-12 border border-gray-300 text-sm p-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={gridData[rowIdx][colIdx]}
              onChange={(e) => handleCellChange(rowIdx, colIdx, e.target.value)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
