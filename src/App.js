import React, { useState, useEffect } from "react";

import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import api from "./services/api";
import Repository from "./components/Repository";
import styles from "./styles";
import Repositories from "./components/Repositories";

export default function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const getRepositories = async () => {
      const response = await api.get("repositories");
      console.log(response);
      setRepositories(response.data);
    };
    getRepositories();
  }, []);

  async function handleLikeRepository(id) {
    const uri = `/repositories/${id}/like`;
    const repository = await api.post(uri);

    const newRepositories = [...repositories];
    const repositoryIndex = newRepositories.findIndex(
      (repository) => repository.id === id
    );
    newRepositories[repositoryIndex].likes = repository.data.likes;
    setRepositories(newRepositories);
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
        <Repositories
          repositories={repositories}
          onLikeRepository={handleLikeRepository}
        />
      </SafeAreaView>
    </>
  );
}
