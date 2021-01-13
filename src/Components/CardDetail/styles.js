import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled(Grid)`
    background-color:#fff;
    background-image: url(${props => props.image});
    background-size:cover;
    height:350px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

    align-items:flex-end;
    
  
`;


export const ContainerInfo = styled.div`
  background-color:#fff;
  flex-direction:column;
  display:flex;
  width:100%;
  height:60%;
  justify-content:flex-end;

`;

export const Title = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-weight:600;
    color:#333;
    font-size:20px;
    margin: 4px;
`;

export const Adress = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-weight:300;
    color:#A5A5A5;
    font-size:14px;
    margin:4px;
`;

export const ContainerValue = styled.button`
    background-color: #39b54a;
    margin: 4px;
    flex-direction:row;
    display:flex;
    align-items:center;
    border:none;
    height:30px;
`;

export const ValueText = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-weight:600;
    color:#fff;
    font-size:18px;
`;

export const ContainerCategory = styled.button`
    background-color:#A5A5A5;
    flex-direction:row;
    display:flex;
    align-items:center;
    border:none;
    height:30px;
    margin: 4px;
`;

export const TextCategory = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-weight:300;
    color:#484848;
    font-size:18px;
`;