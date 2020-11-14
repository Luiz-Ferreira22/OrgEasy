import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const FormSearch = styled.View`
  background-color: #fff;
  border-radius: 8px;
  margin-top: 20px;
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: -25px;
  z-index: 5;
  flex-direction: row;
  align-items: center;

`;

export const Search = styled.TextInput`

`;

export const FomrIcon = styled.View`
  padding: 6px;
`;

export const FormList = styled.View`
  border-radius: 10px;
  background-color: #ecf0f1;

`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false, // indicador lateral
  contentContainerStyle: { padding: 5 } // conteudo da lista
})`
  margin-top: 10px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-family: bold;
  justify-content: center;
  align-self: center;
`;




