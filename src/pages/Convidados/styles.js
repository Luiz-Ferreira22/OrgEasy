import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

  export const Voltar = styled.Text`
  margin-left: 10px;
  color: #f04;
`;

export const Form = styled.View`
  margin-top: 30px;
  align-items: center;
`;

export const Title = styled.Text`
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  color: #fff;
`;

export const IconDesc = styled.View`
  margin-top: 2px;
`;

export const FormList = styled.View`
  height: 530px;
  display: flex;
`;

export const ScrollView = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false, // indicador lateral
  contentContainerStyle: { padding: 0 } // conteudo da lista
})`
  background-color: #000;

`;

export const Button = styled.TouchableOpacity`
  height: 80px;
  border-radius: 10px;
  margin-left: 4px;
  margin-right: 8px;
  margin-top: 10px;
  background-color: #fff;

`;

export const FormName = styled.View`
  align-items: center;
  margin-top: 25px;
  margin-left: 10px;
  flex-direction: row;
`;

export const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;

