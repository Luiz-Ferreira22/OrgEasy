import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import api from '../../../services/api';
import { useSelector } from 'react-redux';

import ImagePicker from 'react-native-image-picker';


// import { Container } from './styles';

export default function AvatarInput() {
  const profile = useSelector(state => state.user.profile);

  const [preview, setPreview] = useState(profile.file_id);

  const imagePickerOptions = {
    title: 'Selecione uma Opção',
    takePhotoButtonTitle: 'Tirar Foto',
    chooseFromLibraryButtonTitle: 'Fotos da Galeria',
  };
  function imagePickerCallback(data) {
    if (data.didCancel) {
      return;
    }
    if (data.error) {
      return;
    }

    if (!data.uri) {
      return;
    }

    setPreview(data); // sempre que o usuario escolher uma foto, mas pode alterar
  }

  async function UploadImage(e) {
    const data = new FormData();

    data.append('files', {
      name: 'name',
      path: 'path',
    });

    const response = await api.post('files', data);

    const {id, url} = response.data;

    console.log.tron(IMAGEM);

    setPreview(id);
    setFile(url);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          ImagePicker.showImagePicker(imagePickerOptions, imagePickerCallback)
        }>
        <View>
          <Image
            id="avatar"
            style={styles.avatar}
            source={{
              uri: preview
                ? preview.uri
                : 'https://media.istockphoto.com/vectors/icon-camera-photo-logo-design-universal-business-social-media-pixel-vector-id998587472',
            }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity styele={styles.Salvar} onPress={UploadImage}>
        <Text style={styles.text}>Salvar Foto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 80,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
  Salvar: {
    padding: 15,
    backgroundColor: '#f04',
  },
  text: {
    color: '#f04',
  }
});
