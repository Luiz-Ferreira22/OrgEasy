import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Background from '../../components/Background';

import { useSelector } from 'react-redux';

import api from '../../services/api';

import DashboardInfo from './DashboardInfo';
import DashboardList from './DashboardList';

import styles from './styles';

export default function Dashboard (){

  const profile = useSelector(state => state.user.profile);

  // const [preview, setPreview] = useState();

  const navigation = useNavigation();


  const [file, setFile] = useState('');

  useEffect(() => {
    async function loadFile() {

      const response = await api.get('users');
      setFile(response.data);
    }
    loadFile();

 },[file]);

  return (
   <Background>
    <View style={styles.container}>
      <View style={styles.image}>
       <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
       <Image
            style={styles.avatar}
            source={{
              uri: file
              ? file.avatar.url :
             'https://i.pinimg.com/236x/a1/97/da/a197da41e229b0d38b9b856dff6b8518--camera-icon-camera-logo.jpg',
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


