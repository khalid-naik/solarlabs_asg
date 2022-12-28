import React, { useState } from 'react';

const YEAR_CARDS = [  { year: 2021 },  { year: 2022 },  { year: 2023 }];

const MONTH_RANGES = [  { range: 'Jan - Apr', months: ['Jan', 'Feb', 'Mar', 'Apr'] },
  { range: 'May - Aug', months: ['May', 'Jun', 'Jul', 'Aug'] },
  { range: 'Sep - Dec', months: ['Sep', 'Oct', 'Nov', 'Dec'] }
];

function Mycard() {
  const [selectedYearIndices, setSelectedYearIndices] = useState([]);
  const [selectedMonthRangeIndex, setSelectedMonthRangeIndex] = useState(null);
  const [inputValues, setInputValues] = useState(YEAR_CARDS.map(() => ({})));

  const handleYearChange = (yearIndex) => {
    if (selectedYearIndices.includes(yearIndex)) {
      setSelectedYearIndices(selectedYearIndices.filter((i) => i !== yearIndex));
    } else {
      setSelectedYearIndices([...selectedYearIndices, yearIndex]);
    }
  };

  const handleMonthRangeChange = (event) => {
    setSelectedMonthRangeIndex(event.target.value);
  };

  const handleInputChange = (yearIndex, month) => (event) => {
    setInputValues((prevInputValues) => {
      const newInputValues = [...prevInputValues];
      newInputValues[yearIndex][month] = event.target.value;
      return newInputValues;
    });
  };

  const handleCalculateClick = (yearIndex) => {
    const newInputValues = [...inputValues];
    const months = MONTH_RANGES[selectedMonthRangeIndex].months;
    const filledMonths = Object.keys(newInputValues[yearIndex]);
    const remainingMonths = months.filter((month) => !filledMonths.includes(month));
    remainingMonths.forEach((month) => {
      newInputValues[yearIndex][month] = Math.floor(Math.random() * 201) - 100 + parseInt(newInputValues[yearIndex][filledMonths[0]]);
    });
    setInputValues(newInputValues);
  };

  const handleResetClick = (yearIndex) => {
    setInputValues((prevInputValues) => {
      const newInputValues = [...prevInputValues];
      newInputValues[yearIndex] = {};
      return newInputValues;
    });
  };

  return (
    <div>
      <div>
        {YEAR_CARDS.map((yearCard, index) => (
          <label key={yearCard.year}>
            <input
              type="checkbox"
              checked={selectedYearIndices.includes(index)}
              onChange={() => handleYearChange(index)}
            />
            {yearCard.year}
          </label>
        ))}
      </div>
      {selectedYearIndices.map((yearIndex) => (
        <div style={{ marginTop: '20px' }}>
        <div>
        <label>
        Select Month Range:
        <select value={selectedMonthRangeIndex} onChange={handleMonthRangeChange}>
        {MONTH_RANGES.map((monthRange, index) => (
        <option key={monthRange.range} value={index}>
        {monthRange.range}
        </option>
        ))}
        </select>
        </label>
        </div>
        {MONTH_RANGES[selectedMonthRangeIndex]?.months.map((month) => (
        <div key={month}>
        <label>
        {month}:
        <input
        type="number"
        value={inputValues[yearIndex][month] || ''}
        onChange={handleInputChange(yearIndex, month)}
        />
        </label>
        </div>
        ))}
        <button onClick={() => handleCalculateClick(yearIndex)}>Calculate</button>
        <button onClick={() => handleResetClick(yearIndex)}>
        Reset
        </button>
        </div>
        ))}
        </div>
  );
}
export default Mycard; 

//style={{ float: 'right' }} for reset button