import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/screens/Home';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import Course from './src/screens/Course';
import UserData from './src/screens/UserData';
import CourseDetails from './src/screens/CourseDetails';

const Stack = createNativeStackNavigator()
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name='Course' component={Course}
          options={{
            headerTitleStyle: {
              fontSize: 25
            },
            headerTitle: 'Courses',
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen name='Students' component={UserData}
          options={{
            headerTitleStyle: {
              fontSize: 25
            },
            headerTitle: 'Students',
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen name='About' component={About}
          options={{
            headerTitleStyle: {
              fontSize: 25
            },
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen name='Join Us' component={Contact}
          options={{
            headerTitleStyle: {
              fontSize: 25
            },
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen name = "Details" component={CourseDetails}
        options = {{
          headerTitleStyle : {
            fontSize : 25
          },
          headerTitle : 'Course Details',
          headerTitleAlign : 'center'
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

