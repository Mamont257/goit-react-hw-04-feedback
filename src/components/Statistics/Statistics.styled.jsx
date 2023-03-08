import styled from 'styled-components';

export const ContainerStat = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const StatisticsInfo = styled.p`
    display: flex;
    gap: 10px;
    font-size: 22px;

    :last-child {
        font-weight: bold;
    }
`;
