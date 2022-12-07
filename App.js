
import { NavigationContainer, TabRouter } from '@react-navigation/native';
import AboutUsScreen from './src/screens/AboutUsScreen';
import HomeScreen from './src/screens/homescreen';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ThirdScreen from './src/screens/Screen3';
import FourthScreen from './src/screens/Screen4';
import Login from './src/screens/loginScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
import React from "react";



// const Stack = createNativeStackNavigator();

// export default function App() {
  
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{ title: 'Welcome' }}
//         />
//         <Stack.Screen name="AboutUs" component={AboutUsScreen} />
//       </Stack.Navigator>
      
//     </NavigationContainer>
     
//   );
// }

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
         screenOptions={({route}) => ({
          tabBarStyle: { position: 'absolute',
            height: 60,
            backgroundColor: '#A991C8'
        },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: '#0C14A2',
          tabBarIcon: ({focused, size, colour}) => {
            let iconName;
            if (route.name ==="Home"){
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name ==="Login"){
              iconName = focused ? "log-in" : "log-in-outline";
            } else if (route.name ==="About Us"){
              iconName = focused ? "disc" : "disc-outline";
            } else if (route.name ==="Third Screen"){
              iconName = focused ? "flower-sharp" : "flower-outline";
            } else if (route.name ==="Fourth Screen"){
              iconName = focused ? "happy" : "happy-outline";
            }
            return <Ionic name={iconName} size={size} colour={colour}/>
          },
          
          
        })}>

        <Tab.Screen name ="Home" component = {HomeScreen} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="About Us" component={AboutUsScreen} />
        <Tab.Screen name="Third Screen" component={ThirdScreen} />
        <Tab.Screen name="Fourth Screen" component={FourthScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
