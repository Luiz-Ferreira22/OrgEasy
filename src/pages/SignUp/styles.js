//import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '../../components/Input';
import Button from '../../components/Button';


export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
  padding: 4px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 10px;
  border-radius: 10px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;

`;

export const FormPicker = styled.View`
  font-weight: bold;
  width: 326px;
  height: 46px;
  background: #fff;
  border-radius: 8px;
  margin-top: 10px;
  justify-content: center;

`;

export const FormPickerUf = styled.View`
  font-weight: bold;
  width: 90px;
  height: 46px;
  margin-right: 10px;
  background: #fff;
  border-radius: 8px;
  justify-content: center;
`;

export const FormPickerCity = styled.View`
  font-weight: bold;
  width: 225px;
  margin-right: 7px;
  height: 46px;
  background: #fff;
  border-radius: 8px;
  justify-content: center;
`;
export const ViewPicker = styled.View`
  flex-direction: row;
  justify-content: center;

`;

