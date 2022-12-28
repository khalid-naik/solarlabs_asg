// import React, { useState } from 'react';

// const YearCard = ({ year }) => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [inputValues, setInputValues] = useState({
//     Jan: 0,
//     Feb: 0,
//     Mar: 0,
//     Apr: 0,
//     May: 0,
//     Jun: 0,
//     Jul: 0,
//     Aug: 0,
//     Sep: 0,
//     Oct: 0,
//     Nov: 0,
//     Dec: 0,
//   });
//   const [calculated, setCalculated] = useState(false);

//   const options = {
//     'Jan - Apr': ['Jan', 'Feb', 'Mar', 'Apr'],
//     'May - Aug': ['May', 'Jun', 'Jul', 'Aug'],
//     'Sep - Dec': ['Sep', 'Oct', 'Nov', 'Dec'],
//   };

//   const handleDropdownChange = (event) => {
//     setSelectedOption(event.target.value);
//     setCalculated(false);
//     setInputValues({
//       Jan: 0,
//       Feb: 0,
//       Mar: 0,
//       Apr: 0,
//       May: 0,
//       Jun: 0,
//       Jul: 0,
//       Aug: 0,
//       Sep: 0,
//       Oct: 0,
//       Nov: 0,
//       Dec: 0,
//     });
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setInputValues((prevInputValues) => ({
//       ...prevInputValues,
//       [name]: value,
//     }));
//     setCalculated(false);
//   };

//   const handleCalculate = () => {
//     const calculatedValues = {};
//     let baseValue;
//     Object.entries(inputValues).forEach(([month, value]) => {
//       if (value !== 0) {
//         baseValue = value;
//       } else if (baseValue) {
//         calculatedValues[month] = baseValue + Math.floor(Math.random() * 200) - 100;
//       }
//     });
//     setInputValues((prevInputValues) => ({
//       ...prevInputValues,
//       ...calculatedValues,
//     }));
//     setCalculated(true);
//   };

//   const handleReset = () => {
//     setInputValues({
//       Jan: 0,
//       Feb: 0,
//       Mar: 0,
//       Apr: 0,
//       May: 0,
//       Jun: 0,
//       Jul: 0,
//       Aug: 0,
//       Sep: 0,
//       Oct: 0,
//       Nov: 0,
//       Dec: 0,
//     });
//     setCalculated(false);
//   };

//   return (
//     <div className="year-card">
//       <h3>{year}</h3>
//       <select onChange={handleDropdownChange} value={selectedOption}>
//         <option value="" disabled>
//           Select option
//         </option>
//         {Object.keys(options).map((option) => (
//           <option key={option} value={option}>
//             {option}
         









// import { Card, Checkbox, Select, InputNumber } from 'antd';

// function MyCard() {
//   // State variables to store the selected year, dropdown option, and input values
//   const [selectedYear, setSelectedYear] = useState(null);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [inputValues, setInputValues] = useState({});

//   // Function to handle the change event of the checkboxes
//   const handleCheckboxChange = (e) => {
//     setSelectedYear(e.target.value);
//   };

//   // Function to handle the change event of the dropdown
//   const handleOptionChange = (value) => {
//     setSelectedOption(value);
//   };

//   // Function to handle the change event of the input fields
//   const handleInputChange = (month, value) => {
//     // Update the input values in the state
//     setInputValues({ ...inputValues, [month]: value });

//     // Check if all the input values are 0
//     const allInputsAreZero = Object.values(inputValues).every((val) => val === 0);

//     // If all the input values are 0, enable only the current input field
//     if (allInputsAreZero) {
//       setInputValues({ ...inputValues, [month]: value, [`${month}Disabled`]: false });
//     } else {
//       // If at least one input value is not 0, disable all the input fields
//       setInputValues({
//         ...inputValues,
//         [month]: value,
//         'JanDisabled': true,
//         'FebDisabled': true,
//         'MarDisabled': true,
//         'AprDisabled': true,
//         'MayDisabled': true,
//         'JunDisabled': true,
//         'JulDisabled': true,
//         'AugDisabled': true,
//         'SepDisabled': true,
//         'OctDisabled': true,
//         'NovDisabled': true,
//         'DecDisabled': true,
//       });
//     }
//   };

// //   // Function to calculate the values for the remaining input fields
// //   const calculateValues = () => {
// //     // Calculate the values for the remaining input fields based on the

// const calculateValues = () => {
//     // Get the original value entered by the user
//     const originalValue = inputValues[selectedOption];
  
//     // Calculate the values for the remaining input fields
//     const calculatedValues = {};
//     for (let month of ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']) {
//       if (month !== selectedOption) {
//         // Calculate the value for the current input field based on the original value and the maximum absolute difference of 100
//         calculatedValues[month] = originalValue + (Math.random() * 200 - 100);
//       }
//     }
  
//     // Update the state with the calculated values
//     setInputValues({ ...inputValues, ...calculatedValues });
//   }

//   const reset = () => {
//     // Reset the state variables
//     setSelectedOption(null);
//     setInputValues({
//       'Jan': 0,
//       'Feb': 0,
//       'Mar': 0,
//       'Apr': 0,
//       'May': 0,
//       'Jun': 0,
//       'Jul': 0,
//       'Aug': 0,
//       'Sep': 0,
//       'Oct': 0,
//       'Nov': 0,
//       'Dec': 0,
//       'JanDisabled': false,
//       'FebDisabled': false,
//       'MarDisabled': false,
//       'AprDisabled': false,
//       'MayDisabled': false,
//       'JunDisabled': false,
//       'JulDisabled': false,
//       'AugDisabled': false,
//       'SepDisabled': false,
//       'OctDisabled': false,
//       'NovDisabled': false,
//       'DecDisabled': false,
//     });
//   }
  
