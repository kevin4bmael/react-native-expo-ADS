import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Bem vindo ao mundo do desenvolvimento Mobile!</Text>
      <StatusBar style="auto" />

       <View style={styles.card}>
      <Text>Kevin</Text>
      <StatusBar style="auto" />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: ' #EBBC4E',
    flex: 1,
    backgroundColor: '#EBBC4E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#f0a800d3',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: '80%',
  },

});
