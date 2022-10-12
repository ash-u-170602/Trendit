import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require=('assets\Trendit-logos_black.png')}/>
      <Text>TRENDIT Coming Soon....</Text>

      <StatusBar style="auto" />
    </View>
  );
}
// a contribution

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});
