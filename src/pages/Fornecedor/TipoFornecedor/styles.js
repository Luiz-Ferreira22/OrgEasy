import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const FormDescription = styled.TouchableOpacity`
  flex-direction: row;
  margin-left: 10px;
  margin-top: 10px;
  `;

  export const Voltar = styled.Text`
  margin-left: 10px;
  color: #f04;
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

export const FormPicker = styled.View`
  font-weight: bold;
  width: 300px;
  height: 46px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  margin-top: 10px;
  justify-content: center;

`;

export const Title = styled.Text`
    color: #fff;
    font-size: 20px;
    font-family: bold;
    justify-content: center;
    align-self: center;
  `;

export const FomrIcon = styled.View`
  padding: 6px;
`;

export const FormList = styled.View`
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.0);

`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false, // indicador lateral
  contentContainerStyle: { padding: 5 } // conteudo da lista
})`
  margin-top: 10px;
`;

export const ListProvider = styled(RectButton)`
 margin-top: 0px;
`;

export const Avatar = styled.Image`
  margin-top: 30px;
  border-radius: 5px;
  max-width: 100%;
  height: 200px;
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


export const FormPreco = styled.View`
  margin-top: 5px;
  margin-left: 5px;

`;

export const Preco = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: bold;


`;

export const Bio = styled.View`
  margin-top: 5px;
  margin-left: 5px;

`;
export const Description = styled.Text`
  color: #fff;
  font-size: 14px;
  font-family: bold;
`;



