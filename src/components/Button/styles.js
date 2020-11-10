import styled from 'styled-components';
import { BaseButton } from 'react-native-gesture-handler';

export const Container = styled(BaseButton)`
  width: 326px;
  height: 46px;
  background: #FF0000;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
