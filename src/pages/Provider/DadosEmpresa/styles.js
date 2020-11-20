import { BorderlessButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const FormVoltar = styled.View`
 flex-direction: row;
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

  export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-family: bold;
  justify-content: center;
  align-self: center;
  margin-bottom: 30px;
  margin-top: 10px;
`;

export const Avatar = styled.Image`
  max-width: 100%;
  height: 230px;
`;

export const ScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false, // indicador lateral
  contentContainerStyle: { padding: 0 } // conteudo da lista

})`
  background-color: #000;

`;

export const Button = styled.TouchableOpacity`
  margin-left: 10px;
  margin-top: 10px;
`;

export const FormOptions = styled.View`
  margin-top: 20px;
  flex-direction: row;

`;

export const ButtonTel = styled.TouchableOpacity`
  margin-left: 50px;
  height: 100px;
  width: 100px;
  align-items: center;
  align-content: center;
  justify-content: center;

`;

export const ButtonWhats = styled.TouchableOpacity`
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 100px;
  width: 100px;

`;

export const ButtonFavorite = styled.TouchableOpacity`
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 100px;
  width: 100px;
`;

export const Add = styled.Text`
  margin-top: 10px;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin-left: 2px;
  color: #fff;
  font-size: 18px;
`;


export const FormAvatar = styled.View`
  flex: 1;
`;

export const FormName = styled.View`
  flex-direction: row;
  margin-top: 10px;
  margin-left: 10px;
`;

export const Name = styled.Text`
  font-size: 20px;
  font-family: bold;
  color: #fff;
`;

export const FormRamo = styled.View`
  flex-direction: row;
  padding: 10px;
`;

export const Ramo = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const FormCel = styled.View`
  flex-direction: row;
  padding: 10px;
`;

export const FormImage = styled.View`
  margin-left: 10px;
`;

export const AvatarWpp = styled.View`
  margin-left: 10px;
`;

export const Cel = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const FormIcon = styled.View`
  margin-top: 3px;
`;

export const FormCity = styled.View`
  flex-direction: row;
  padding: 10px;
`;

export const City = styled.Text`
  font-size: 20px;
  color: #fff;
  margin-left: 5px;
`;
export const Uf = styled.Text`
  color: #fff;
  font-size: 20px;

`;

export const FormUf = styled.View`
  padding: 10px;
`;






