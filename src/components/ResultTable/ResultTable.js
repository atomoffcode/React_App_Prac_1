import React from "react";
import classes from './ResultTable.module.css'
export const ResultTable = (props) => {
  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((yearData) => (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>${Number(yearData.savingsEndOfYear).toFixed(2)}</td>
            <td>${Number(yearData.yearlyInterest).toFixed(2)}</td>
            <td>${Number(yearData.savingsEndOfYear - props.initInvestment - yearData.yearlyContribution * yearData.year).toFixed(2)}</td>
            <td>${props.initInvestment + yearData.yearlyContribution * yearData.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
