import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import background from '../../assets/imgs/bg.jpg';

export const Container = styled.div`
  background-image: url(${background});
  width:100vw;
  height:100vh;
  background-size:cover;
  align-items: center;
  

  @media(max-width: 800px) {
    h1 {
    font-size:40px;
    margin:20px;
    }
  }
`;


export const ContainerCenter = styled.div`
  align-items: center;
  justify-content:center;
  flex-direction: column;
  display: flex;
  height:500px;
`;
export const ContainerSearch = styled(Grid)`
   box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

export const Logo = styled.img`
  margin:10px;
`;

export const Title = styled.h1`
    font-family: 'Open Sans', sans-serif;
    font-size:60px;
    color:#fff;
    font-weight:800;
    margin:10px;
`;

export const TitleCity = styled.h1`
    font-family: 'Open Sans', sans-serif;
    font-size:24px;
    color:#333;
    font-weight:600;
`;


export const InpuBox = styled.input`
  
`;

export const SearchButton = styled.button`
    background-color:#39b54a;
    border:none;
    color:#FFF;
    font-family:'Open Sans', sans-serif;
    font-weight:600;
    width:95%;
    height:50px;
    margin: 0 10px;
`;

