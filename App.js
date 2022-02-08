import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-native/Libraries/Text/TextAncestor';
//Step1 : setup redux

export default function App() {
  return (
    <Provider>
      <View style={styles.container}>
        <Text>Let's Build Uber app!</Text>
        <Text>SK Imran Sabuj!</Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
