import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {useRouter} from 'expo-router';

export default function SignupScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text>Bem vindo ao mundo do desenvolvimento Mobile!</Text>
      <StatusBar style="auto" />

        <View style={styles.card}>
            <Text>Signup Screen</Text>
            <Button title="Login" onPress={() => router.push('/')} />
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
