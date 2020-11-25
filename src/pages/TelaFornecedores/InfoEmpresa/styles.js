import styled from 'styled-components/native';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 15},
})`
  align-self: stretch;
`;

export const FormPicker = styled.View`
  font-weight: bold;
  width: 363px;
  height: 46px;
  background: #fff;
  border-radius: 8px;
  margin-bottom: 10px;
  margin-top: 0px;
  justify-content: center;

`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
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

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const FormOptions = styled.View`
  margin-top: 20px;
  flex-direction: row;

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
  color: #000;
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









