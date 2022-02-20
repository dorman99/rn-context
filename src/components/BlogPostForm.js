import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";

const BlogPostForm = ({ navigation }) => {
//   const id = navigation.getParam("id");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { state, editBlogPost, addBlogPost } = useContext(Context);
//   const blogPost = state.find((b) => b.id === id);

//   useEffect(() => {
//     setTitle(blogPost.title);
//     setContent(blogPost.content);
//   }, []);

  return (
    <View>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button title="Save Blog Post" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  containter: {},
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default BlogPostForm;
