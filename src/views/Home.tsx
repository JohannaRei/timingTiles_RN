import {StyleSheet, View} from 'react-native';
import {Body1} from '../components/Text';
import {colors} from '../theme';
import SafeAreaView from '../components/SafeAreaView';

const HomeView = () => {
  return (
    <SafeAreaView>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Body1>Home</Body1>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.deepMaroon,
  },
});

export default HomeView;
