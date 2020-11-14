import React, {useState} from 'react';
import { View, Text, Image } from 'react-native';

import Background from '../../components/Background';

import { useSelector } from 'react-redux';

import DashboardInfo from './DashboardInfo';
import DashboardList from './DashboardList';

import styles from './styles';


export default function Dashboard (){
  const profile = useSelector(state => state.user.profile);

  const [preview, setPreview] = useState();

  return (
   <Background>
    <View style={styles.container}>
      <View style={styles.image}>
       <Image
            id="avatar"
            style={styles.avatar}
            source={{
              uri: preview
              ? preview.uri
              : 'https://media.istockphoto.com/vectors/icon-camera-photo-logo-design-universal-business-social-media-pixel-vector-id998587472',
            }}
            />
             <Text style={styles.name}>{profile.name}</Text>
             <Text style={styles.description}>{profile.tipo_usuario}</Text>
          </View>
        <DashboardInfo />
        <DashboardList />
      </View>
    </Background>
  )
}


