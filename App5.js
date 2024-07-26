import { StyleSheet, Text, View, ActivityIndicator, ScrollView, Button, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Api = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [singlePost, setSinglePost] = useState(null);
  const [postId, setPostId] = useState('');
  const [newPost, setNewPost] = useState({ title: '', body: '', userId: 1 });
  const [updatePost, setUpdatePost] = useState({ id: '', title: '', body: '' });
  const [numPosts, setNumPosts] = useState('10');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=${numPosts}')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const getPostById = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts/${postId}')
      .then(response => setSinglePost(response.data))
      .catch(error => console.error(error));
  };

  const addPost = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
      .then(response => {
        setData([...data, response.data]);
        setNewPost({ title: '', body: '', userId: 1 });
      })
      .catch(error => console.error(error));
  };

  const deletePost = (id) => {
    axios.delete('https://jsonplaceholder.typicode.com/posts/${id}')
      .then(() => setData(data.filter(post => post.id !== id)))
      .catch(error => console.error(error));
  };

  const updateExistingPost = () => {
    axios.put('https://jsonplaceholder.typicode.com/posts/${updatePost.id}, updatePost')
      .then(response => {
        setData(data.map(post => (post.id === response.data.id ? response.data : post)));
        setUpdatePost({ id: '', title: '', body: '' });
      })
      .catch(error => console.error(error));
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.form}>
        <Text>Select Number of Posts to Fetch:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter number of posts"
          value={numPosts}
          keyboardType="numeric"
          onChangeText={(value) => setNumPosts(value)}
        />
        <Button title="Fetch Posts" onPress={fetchData} />
      </View>

      {data.map((post) => (
        <View key={post.id} style={styles.postBox}>
          <Text style={styles.title}>Title: {post.title}</Text>
          <Text style={styles.body}>Body: {post.body}</Text>
          <Text style={styles.userId}>User ID: {post.userId}</Text>
          <Button title="Delete" onPress={() => deletePost(post.id)} />
        </View>
      ))}

      <View style={styles.form}>
        <Text>Get Post By ID:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Post ID"
          value={postId}
          onChangeText={setPostId}
        />
        <Button title="Get Post" onPress={getPostById} />
        {singlePost && (
          <View style={styles.postBox}>
            <Text style={styles.title}>Title: {singlePost.title}</Text>
            <Text style={styles.body}>Body: {singlePost.body}</Text>
            <Text style={styles.userId}>User ID: {singlePost.userId}</Text>
          </View>
        )}
      </View>

      <View style={styles.form}>
        <Text>Add New Post:</Text>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={newPost.title}
          onChangeText={(value) => setNewPost({ ...newPost, title: value })}
        />
        <TextInput
          style={styles.input}
          placeholder="Body"
          value={newPost.body}
          onChangeText={(value) => setNewPost({ ...newPost, body: value })}
        />
        <Button title="Add Post" onPress={addPost} />
      </View>

      <View style={styles.form}>
        <Text>Update Post:</Text>
        <TextInput
          style={styles.input}
          placeholder="Post ID"
          value={updatePost.id}
          onChangeText={(value) => setUpdatePost({ ...updatePost, id: value })}
        />
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={updatePost.title}
          onChangeText={(value) => setUpdatePost({ ...updatePost, title: value })}
        />
        <TextInput
          style={styles.input}
          placeholder="Body"
          value={updatePost.body}
          onChangeText={(value) => setUpdatePost({ ...updatePost, body: value })}
        />
        <Button title="Update Post" onPress={updateExistingPost} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  postBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  body: {
    fontSize: 14,
    marginBottom: 5,
    color: '#666',
  },
  userId: {
    fontSize: 12,
    color: '#999',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    marginVertical: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default Api;