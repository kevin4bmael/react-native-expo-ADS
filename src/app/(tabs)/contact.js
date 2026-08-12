import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text>Contact</Text>
      <StatusBar style="auto" />
      <MaterialIcons name="people" size={24} color="black" />
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
