import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <View style={style.containter}>
      <Text style={style.label}>Enter Title</Text>
      <TextInput
        style={style.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={style.label}>Enter Content</Text>
      <TextInput
        style={style.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title="Add Blog"
        onPress={() => {
          addBlogPost({
            title,
            content,
            callback: () => navigation.navigate("Index"),
          });
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
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

export default CreateScreen;
