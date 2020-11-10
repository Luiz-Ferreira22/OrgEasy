//import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '../../components/Input';
import Button from '../../components/Button';


export const Container = styled.View`
  flex: 1;

`;

export const Separator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 20px 0 30px;
  margin-right: 35px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 20px;

`;

export const Form = styled.View`
   align-self: stretch;
   margin-top: 30px;
   margin-left: 35px;
`;


export const FormInput = styled(Input)`
  margin-bottom: 10px;
  padding: 4px;

`;

export const SubmitButton = styled(Button)`
  margin-top: 10px;
  border-radius: 10px;
`;

export const LogoutButton = styled(Button)`
  background: rgba(255, 255, 255, 0.8);
  margin-top: 10px;
  border-radius: 10px;
`;

