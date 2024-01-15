// PostComponent.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PostComponent = ({ userName, date, postText }) => {
  return (
    <View style={styles.container}>
      <View style={styles.PostHeader}>
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Text style={styles.postText}>{postText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor:"#fff",
    borderWidth: 0,
    borderColor: '#ccc',
    width:300,
    marginBottom:5
  },
  userName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  date: {
    color: '#888',
    marginBottom: 5,
    margin:2,
  },
  postText: {
    fontSize: 20,
    padding:5,
  },
  PostHeader:{
    display:'flex',
    flexDirection:'row',
    padding:5,
  }
});

export default PostComponent;
