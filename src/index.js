import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text>Bem vindo ao mundo do desenvolvimento Mobile!</Text>
      <StatusBar style="auto" />

        <View style={styles.card}>
            <Text>Login Screen</Text>
            <Button title="Sign up" onPress={() => router.push('/login')} />
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

});
