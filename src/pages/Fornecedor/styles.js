import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    //padding: 10,
    flex: 1,
    padding: 4,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  title: {
    padding: 10,
    marginBottom: 5,
    fontSize: 25,
    color: '#fff',
  },
  Scroll: {
    flex: 1,
    marginTop: 20,
  },
  teste: {
    flexDirection: 'row',
    flexWrap: 'wrap',

  },
  button: {
    borderRadius: 15,
    backgroundColor: '#fff',
    marginHorizontal: 8,
    marginLeft: 10,
    marginBottom: 15,
    width: 170,
    height: 80,
    alignItems: 'center',
  },
  description: {
    fontSize: 13,
    marginVertical: 26,
    fontFamily: 'roboto',
  },
});
