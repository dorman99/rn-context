import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as BlogPostsAPI from "../api/blogpostAPI";

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [blogPost, setBlogPost] = useState({});

  const findBlog = async () => {
    const response = await BlogPostsAPI.find(id);
    if (response) {
      setBlogPost(response);
    } else {
      navigation.pop();
    }
  };

  useEffect(async () => {
    findBlog();
    const listener = navigation.addListener("didFocus", () => {
      // didFocus
      findBlog();
    });
    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginVertical: 100,
    marginHorizontal: 50,
    flex: 1,
    justifyContent: "space-around",
    borderColor: "black",
  },
  editIcon: {
    fontSize: 30,
    color: "black",
    marginLeft: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    fontSize: 18,
  },
});

ShowScreen.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam("id");
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Edit", { id })}>
        <Entypo name="pencil" style={styles.editIcon} />
      </TouchableOpacity>
    ),
  };
};

export default ShowScreen;
