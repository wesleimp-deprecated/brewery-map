import styled from 'styled-components';

export const Container = styled.div`
    height: 140px;
    width: 370px;
    
    div {
        display: flex;
        flex: 1;
        flex-direction: column;

        span {
            margin-bottom: 5px;
            font-size: 14px;
            color: #a0a0a0;
        }

        a {
            i { margin: 0 5px 0 5px; }

            border: none;
            text-decoration:none;
            color: #ffffff;
            background: #0490be;
            padding: 5px;
            width: 50%;
            margin-top: 5px;
            font-size: 14px;
            font-weight: bold;
            text-transform: uppercase;
            border-radius: 5px;
        }
    }
`;

export const Name = styled.strong`
    font-size: 20px;
    color: #22292F;
    padding-bottom: 8px;

    span {
        font-size: 14px;
        color: #22292F;
    }
`;

