import styled from "styled-components"

export const TableLine = styled.tr`
    border: 1px solid #CCC;
    border-radius: 5px;
`;

export const TableColumn = styled.td`
    padding: 10px 0;   
`;

export const Category = styled.div<{ color: string }>`
    display: inline-block;
    padding: 5px 10px;
    color: #FFF;   
    border-radius: 5px;
    background-color: ${props => props.color};
`;