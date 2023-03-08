import React from "react";
import PropTypes from 'prop-types';
import { StatisticsInfo, ContainerStat } from "./Statistics.styled";

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
    <ContainerStat>
        <StatisticsInfo>Good: <span>{good}</span></StatisticsInfo>
        <StatisticsInfo>Neutral: <span>{neutral}</span></StatisticsInfo>
        <StatisticsInfo>Bad: <span>{bad}</span></StatisticsInfo>
        <StatisticsInfo>Total: <span>{total}</span></StatisticsInfo>
        <StatisticsInfo>Positive feedback: <span>{positivePercentage}%</span></StatisticsInfo>
    </ContainerStat>
)

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
