import styled from 'styled-components';
import Autocomplete from 'react-autocomplete';

export const Container = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  background-color:#FFF;
  margin: 0 10px 10px 10px;
`;
export const ContainerItems = styled.div`
  background-color:#FFF;
  border-bottom: #767676 solid 0.5px;
  height:50px;
  padding:4px;
`;

export const AutocompleteBox = styled(Autocomplete)`
  width:100%;
`;

export const TitleCity = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  color:#767676;
  font-size:24px;
  margin:0 !important;
`;

export const TitleState = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  color:#767676;
  font-size:14px;
  margin:0 !important;
`;