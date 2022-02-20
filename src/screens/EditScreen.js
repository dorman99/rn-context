import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");

  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find((b) => b.id === id);

  return <BlogPostForm />;
};

const styles = StyleSheet.create();

export default EditScreen;
