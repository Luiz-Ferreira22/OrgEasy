import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Form = styled.View`
  margin-top: 30px;
  width: 400px;
  height: 415px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FormAvatar = styled.View`
  margin-top: 20px;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  margin-left: 10px;
  margin-top: 10px;
`;

export const ListProvider = styled.TouchableOpacity`
  margin-left: 10px;
  margin-top: 10px;
`;


export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const FormTitle = styled.View`
  margin-top: 10px;
  flex-direction: row;
`;

export const Name = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const Description = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const ScrollView = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false, // indicador lateral
  contentContainerStyle: { padding: 5 } // conteudo da lista
})`
  background-color: 0;
`;

export const Image = styled.Image`
  height: 240px;
  width: 340px;
  border-radius: 10px;
`;

export const FormEmpresa = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;

export const FormName = styled.View`
  margin-left: 8px;
  margin-top: 5px;
  flex-direction: row;
`;

export const Empresa = styled.Text`
  font-size: 16px;
  font-family: bold;
  color: #fff;
`;

export const FormCity = styled.View`
  flex-direction: row;
  margin-left: 8px;
  margin-top: 5px;
`;

export const City = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-left: 3px;
`;

export const Uf = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const FormCel = styled.View`
  flex-direction: row;
  margin-left: 8px;
  margin-top: 5px;
`;

export const Cel = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const FormIcon = styled.View`
  margin-top: 1px;
`;

export const FormRamo = styled.View`
  flex-direction: row;
  margin-left: 10px;
  margin-top: 5px;
`;

export const Ramo = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const FormPreco = styled.Text`
 flex-direction: row;
 margin-top: 5px;
 margin-left: 10px;

`;

export const Preco = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const Formcnpj = styled.Text`
 flex-direction: row;

`;

export const Cnpj = styled.Text`
  color: #fff;
  font-size: 16px;
`;

