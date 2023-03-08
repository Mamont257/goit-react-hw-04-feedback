import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`

export const Button = styled.button`
    min-width: 30px;
    padding: 5px 15px;
    border: 2px solid transparent;
    border-radius: 5px;
    color: white;

    background-color: tomato;
    font-size: 22px;

    :hover,
    :focus {
        background-color: silver;
    }
`