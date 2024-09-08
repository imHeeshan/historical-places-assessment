import React from "react";
import { Text } from "react-native";
import { ITextProps } from "./types";

export const UseText: React.FC<ITextProps> = ({
    text,
    customStyle,
    fontStyle,
    numberOflines,
  }) => {
    return (
      <Text style={[customStyle, fontStyle]} numberOfLines={numberOflines}>
        {text}
      </Text>
    );
  };