import {ReactNode} from 'react';
import {
  SafeAreaView as SafeArea,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';
import {colors} from '../theme';

interface Props {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const SafeAreaView = ({children, style}: Props) => {
  const insets = useSafeAreaInsets();
  const headerHeight = useHeaderHeight();

  return (
    <SafeArea style={[styles.container, style, {marginTop: headerHeight}]}>
      {children}
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.deepMaroon,
  },
});

export default SafeAreaView;
