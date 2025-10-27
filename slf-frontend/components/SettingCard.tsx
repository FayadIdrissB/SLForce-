import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./ui/settingCard.styles";

interface SettingCardProps {
  logo: string;
  title: string;
  description: string;
  hasChevron?: boolean;
  hasSwitch?: boolean;
  onPress?: () => void;
}

export const SettingCard: React.FC<SettingCardProps> = ({
  logo,
  title,
  description,
  hasChevron = false,
  hasSwitch = false,
  onPress,
}) => {
  const Wrapper = onPress ? TouchableOpacity : View;

  return (
    <Wrapper style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuItemLeft}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>{logo}</Text>
        </View>
        <View>
          <Text style={styles.menuItemTitle}>{title}</Text>
          <Text style={styles.menuItemSubtitle}>{description}</Text>
        </View>
      </View>
      {hasChevron && <Text style={styles.chevron}>›</Text>}
    </Wrapper>
  );
};
