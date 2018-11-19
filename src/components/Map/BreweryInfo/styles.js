import styled from 'styled-components';

export const Container = styled.div`
    height: 200px;
    width: 400px;
    
    div {
        display: flex;
        flex: 1;
        flex-direction: column;

        span {
            padding-bottom: 4px;
        }
    }
`;

export const Name = styled.strong`
    font-size: 20px;
    font-weight: bold;
    color: #22292F;
    padding-bottom: 8px;

    span {
        font-size: 14px;
        color: #22292F;
    }
`;

