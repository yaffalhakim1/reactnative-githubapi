import { StyleSheet } from 'react-native'

export const ProfileStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#000D6B',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 15,
    alignItems: 'center',
    paddingBottom: 10,
  },
  headerImage: {
    height: 120,
    width: 120,
    borderRadius: 60,
    marginVertical: 10,
  },
  headerTXT: {
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  headerTXTDesc: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 5,
  },
  bodyTouchable: {
    alignSelf: 'center',
    backgroundColor: '#000D6B',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    margin: 20,
  },
  bodyTXT: {
    color: '#fff',
    fontSize: 20,
  },
})
