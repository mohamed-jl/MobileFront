// AddPostComponent.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const AddPostComponent = ({ onAddPost }) => {
  const [postText, setPostText] = useState('');

  const handleShare = async () => {
    try {
      await axios.post('https://localhost:9998/posts?Text='+postText);
      setPostText('');
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Share your thoughts..."
        multiline
        value={postText}
        onChangeText={(text) => setPostText(text)}
      />
      <Button title="Share" onPress={handleShare} style={styles.ButtonShare}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderWidth: 0,
    borderColor: '#e0e0e0',
    marginBottom:5,
   
    width:300
  },
  textInput: {
    height: 50,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius:15,
    marginBottom: 8,
    padding: 8,
  },
  ButtonShare:{
    color: '#ffffff', // Text color
    backgroundColor: '#007bff', // Background color
    borderRadius: 4, // Border radius
    paddingVertical: 12, // Vertical padding
    paddingHorizontal: 16, // Horizontal padding

  }
});

export default AddPostComponent;
