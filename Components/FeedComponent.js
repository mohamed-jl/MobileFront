import React ,{useEffect,useState} from 'react';
import { View, ScrollView, StyleSheet,FlatList, ActivityIndicator } from 'react-native';
import AddPostComponent from './AddPostComponent';
import PostComponent from './PostComponent';
import axios from 'axios';


const FeedComponent = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://localhost:9998/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
        
    <ScrollView >
      <AddPostComponent/>
      {posts.map((post) => (
        <PostComponent
          key={post.id}
          userName={post.userName}
          date={post.date}
          postText={post.postText}
        />
      ))}
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop:70
  },
});

export default FeedComponent;
