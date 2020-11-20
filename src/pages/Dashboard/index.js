import React, {useState} from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Background from '../../components/Background';

import { useSelector } from 'react-redux';

import DashboardInfo from './DashboardInfo';
import DashboardList from './DashboardList';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Dashboard (){

  const profile = useSelector(state => state.user.profile);

  const [preview, setPreview] = useState();

  const navigation = useNavigation();


  return (
   <Background>
    <View style={styles.container}>
      <View style={styles.image}>
       <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
       <Image
            id="avatar"
            style={styles.avatar}
            source={{
              uri: preview
              ? preview.uri
              : 'https://i.pinimg.com/originals/bb/35/61/bb3561121f9fa38ddfaff7d5958a2edb.jpg',
            }}
            />
            </TouchableOpacity>
             <Text style={styles.name}>{profile.name}</Text>
             <Text style={styles.description}>{profile.tipo_usuario}</Text>
          </View>
        <DashboardInfo />
        <DashboardList />
      </View>
    </Background>
  )
}


