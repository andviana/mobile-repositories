import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const Tech = ({ techs }) => {
  return (
    <View style={styles.techsContainer}>
      {techs.map((tech) => (
        <Text key={tech} style={styles.tech}>
          {tech}
        </Text>
      ))}
    </View>
  );
};
export default Tech;
