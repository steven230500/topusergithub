import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/components/Home';
import PersonScreen from './src/components/Person';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#282828',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Person"
          component={PersonScreen}
          options={{
            title: 'Person',
            headerStyle: {
              backgroundColor: '#282828',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
