import { StyleSheet } from 'react-native'

export const HomeStyle = StyleSheet.create({
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
    width: 100,
  },
  headerTXT: {
    color: '#fff',
    fontWeight: 'bold',
  },
  flatlist: {
    flex: 1,
    marginHorizontal: 10,
  },
  itemListContainerGanjil: {
    height: 100,
    backgroundColor: '#9C19E0',
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  itemListContainerGenap: {
    height: 100,
    backgroundColor: '#FF5DA2',
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  itemListContent: {
    marginLeft: 10,
  },
  itemListGarisGanjil: {
    backgroundColor: '#000D6B',
    width: 5,
    height: '80%',
  },
  itemListGarisGenap: {
    backgroundColor: '#000D6B',
    width: 5,
    height: '80%',
  },
  itemListTXTGanjil: {
    color: '#fff',
    marginVertical: 2,
    fontWeight: 'bold',
    fontSize: 17,
  },
  itemListTXTGenap: {
    color: '#1B262C',
    marginVertical: 2,
    fontWeight: 'bold',
    fontSize: 17,
  },
})
