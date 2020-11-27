//import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
   margin-top: 30px;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
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

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 15},
})`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const FormTeste = styled.View`
  margin-top: 50px;
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

export const ViewPicker = styled.View`
  flex-direction: row;
  justify-content: center;

`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
`;

export const FormPickerCity = styled.View`
  font-weight: bold;
  width: 260px;
  margin-right: 0px;
  height: 46px;
  background: #fff;
  border-radius: 8px;
  justify-content: center;
`;


export const FormPickerUf = styled.View`
  font-weight: bold;
  width: 90px;
  height: 46px;
  margin-right: 12px;
  background: #fff;
  border-radius: 8px;
  justify-content: center;

`;
