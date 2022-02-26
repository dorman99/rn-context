import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, removeBlogPost, findBlogPosts } = useContext(Context);

  useEffect(() => {
    findBlogPosts();

    const listener = navigation.addListener("didFocus", () => {
      // didFocus
      findBlogPosts();
    });

    return () => {
      listener.remove();
    }
  }, []);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blog) => blog.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>
                  #{item.id} - {item.title}
                </Text>
                <TouchableOpacity onPress={() => removeBlogPost(item.id)}>
                  <Feather name="trash" style={styles.icon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      // function
      <TouchableOpacity>
        <Feather
          name="plus"
          style={styles.icon}
          onPress={() => navigation.navigate("Create")}
        />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
    padding: 10,
  },
});

export default IndexScreen;
