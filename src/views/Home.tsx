import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../theme';
import SafeAreaView from '../components/SafeAreaView';
import Tile from '../components/Tile';

const HomeView = () => {
  const [tasks, setTasks] = useState([
    {id: 1, name: 'boop', color: colors.yellow},
    {id: 2, name: 'beep', color: colors.orange},
  ]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.row}>
          {tasks.map(task => (
            <Tile
              key={task.name}
              onPress={() => console.log(task.name)}
              task={task}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 200,
  },
});

export default HomeView;
