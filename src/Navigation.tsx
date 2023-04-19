import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeView from './views/Home';
import {colors} from './theme';

const MainStack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        id="MainStack"
        initialRouteName="Home"
        screenOptions={{
          statusBarStyle: 'light',
          //headerShadowVisible: false,
          //headerTransparent: true,
          //headerTintColor: 'white',
          headerShown: false,
        }}>
        <MainStack.Screen name="Home" component={HomeView} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
