// import {Stack} from 'expo-router';

// export default function Layout() {
//   return (
//     <Stack >
//       <Stack.Screen name="index" options={{ headerShown: false }} />
//       <Stack.Screen name="contact" options={{ title: "My App" }} />
//     </Stack>
//   );
// }

import {Tabs} from 'expo-router';

export default function Layout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarLabelStyle: { fontSize: 9, fontWeight: 'bold' },
      tabBarIconStyle: { fontSize: 10 },
      tabBarStyle: { backgroundColor: '#EBBC4E', height: 60, paddingBottom: 5, paddingTop: 5 },
    }}>
      <Tabs.Screen name="index" options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color }) => (
            <Text style={{ color }}>🏠</Text>
        )
      }} />
      <Tabs.Screen name="contact" options={{
        tabBarLabel: "Contact",
        tabBarIcon: ({ color }) => (
            <Text style={{ color }}>📞</Text>
        )
      }} />
    </Tabs>
  );
}
