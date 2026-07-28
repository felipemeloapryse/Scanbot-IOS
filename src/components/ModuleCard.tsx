import { Ionicons } from "@expo/vector-icons";
import type { ComponentProps } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/homeStyles";

export type IoniconName = ComponentProps<typeof Ionicons>["name"];

type ModuleCardProps = {
  title: string;
  description: string;
  icon: IoniconName;
  onPress: () => void;
};

export default function ModuleCard({
  title,
  description,
  icon,
  onPress,
}: ModuleCardProps) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        <Ionicons name={icon} size={22} color="#E30613" />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>

      <Ionicons name="chevron-forward" size={18} color="#C4C4C4" />
    </TouchableOpacity>
  );
}
