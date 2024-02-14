import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TriangleScreen from './components/TriangleScreen';
import CircleScreen from './components/CircleScreen';
import SquareScreen from './components/SquareScreen';

export default function App() {

  const Tab = createMaterialTopTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarLabelStyle: { color: 'white' },
        tabBarStyle: { backgroundColor: 'navy' }
      }}>
        <Tab.Screen name="Háromszög" component={TriangleScreen} />
        <Tab.Screen name="Kör" component={CircleScreen} />
        <Tab.Screen name="Négyzet" component={SquareScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
