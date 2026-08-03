import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  // 1. Detect the system theme ('light', 'dark', or null/undefined)
  const theme = useColorScheme() ?? 'light';

  // 2. If a specific color override is passed via props, use it
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    // 3. Otherwise, fall back to the global predefined palette
    return Colors[theme][colorName];
  }
}
