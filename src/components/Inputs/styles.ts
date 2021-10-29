import styled from "styled-components";

export const InputText = styled.input`
    border-radius: 5px;
    height: 10px;
    width: 350px;
    font-size: 1rem;
    padding: 5px;
`;

export const Container = styled.div<{ error: string }>`
    display: flex;
    flex-direction: column;
    
    input{
    border-radius: 5px;
    border-color: ${props => props.error ?? "#FFF"};
    height: 10px;
    width: 350px;
    font-size: 1rem;
    padding: 5px;
    }

    span{
        color: red;
        font-size: 0.8rem;
    }
`;