import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';


if (__DEV__) {
  console.tron = tron;
  const tron = Reactotron.configure({ host: '192.168.0.104' })
  .useReactNative()
  .setAsyncStorageHandler(AsyncStorage)
  .use(reactotronRedux())
  .use(reactotronSaga())
  .connect();

  tron.clear();

  console.tron = tron;
}
