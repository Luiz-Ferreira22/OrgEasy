import styled from 'styled-components/native';

export const Container = styled.View`
  width: 326px;
  height: 48px;
  background: #fff;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;

`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#000',

})`
  font-size: 15px;
  margin-left: 4px;
`;

