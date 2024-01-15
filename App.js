import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddPostComponent from './Components/AddPostComponent';
import FeedComponent from './Components/FeedComponent';
import PostComponent from './Components/PostComponent';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <PostComponent userName='hama' date="01/01/00" postText="haaaaahi"/> */}
     
      <FeedComponent/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
