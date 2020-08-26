import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Tech from "../Tech";

const Repository = ({ repository, onLikeRepository }) => {
  const handleLikeRepository = (id) => {
    onLikeRepository(id);
  };

  return (
    <View key={repository.id} style={styles.repositoryContainer}>
      <Text style={styles.repository}>{repository.title}</Text>

      <Tech techs={repository.techs} />

      <View style={styles.likesContainer}>
        <Text
          style={styles.likeText}
          testID={`repository-likes-${repository.id}`}
        >
          {repository.likes} curtidas
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleLikeRepository(repository.id)}
        testID={`like-button-${repository.id}`}
      >
        <Text style={styles.buttonText}>Curtir</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Repository;
