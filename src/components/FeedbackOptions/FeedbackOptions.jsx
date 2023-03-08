import React from "react";
import PropTypes from 'prop-types';
import { Button, Container } from "./FeedbackOptions.styled";

const FeedbackOptions = ({onLeaveFeedback}) => (
    <Container>
        <Button type="button" onClick={onLeaveFeedback} name="good">Good</Button>
        <Button type="button" onClick={onLeaveFeedback} name="neutral">Neutral</Button>
        <Button type="button" onClick={onLeaveFeedback} name="bad">Bad</Button>
    </Container>
)

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
