import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,

  },
  viewTitle: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    padding: 15,
    justifyContent: 'center',

  },
  viewButton: {
    flex: 1,
    marginTop: 10,
    padding: 8,
    backgroundColor: '#fff',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    flexDirection: 'row',
  },
  button: {
    borderWidth: 0.1,
    borderColor: '#f03',
    borderRadius: 15,
    marginRight: 4,
    marginLeft: 4,
    width: 160,
    height: 60,

  },
  text: {
    fontSize: 20,
    padding: 12,
    alignSelf: 'center',
  }
});
