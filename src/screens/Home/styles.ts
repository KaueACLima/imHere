import { StyleSheet } from "react-native"; 

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  eventName: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16
  },
  input:{
    height: 56,
    borderStartColor: '#1F1E25',
    color: '#FFF',
    borderRadius: 5,
    padding: 16,
    fontSize: 16
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

