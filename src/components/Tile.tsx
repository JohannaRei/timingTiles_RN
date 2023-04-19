import {View, Pressable, StyleSheet, useWindowDimensions} from 'react-native';
import {Body1} from './Text';
import {colors} from '../theme';

interface Props {
  onPress: () => void;
  task: {name: string; color: string};
}

const Tile = ({onPress, task: {name, color}}: Props) => {
  const {height, width} = useWindowDimensions();

  return (
    <Pressable
      onPress={onPress}
      style={[styles.tile, {backgroundColor: color}]}>
      <Body1>{name}</Body1>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Tile;
