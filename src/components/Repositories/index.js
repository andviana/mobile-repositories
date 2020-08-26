import React from "react";
import { FlatList } from "react-native";
import Repository from "../Repository";

const Repositories = ({ repositories, onLikeRepository }) => {
  return (
    <FlatList
      data={repositories}
      keyExtractor={(repository) => repository.id}
      renderItem={({ item: repository }) => (
        <Repository
          key={repository.id}
          repository={repository}
          onLikeRepository={onLikeRepository}
        />
      )}
    />
  );
};

export default Repositories;
