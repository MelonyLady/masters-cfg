
import { NavigationContainer } from '@react-navigation/native';
import AboutUsScreen from './src/screens/AboutUsScreen';
import HomeScreen from './src/screens/homescreen';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ThirdScreen from './src/screens/Screen3';
import FourthScreen from './src/screens/Screen4';


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
         screenOptions={{
          tabBarStyle: { position: 'absolute' },
        }}>
        <Tab.Screen name ="Home" component = {HomeScreen} />
          <Tab.Screen name="About Us" component={AboutUsScreen} />
          <Tab.Screen name="Third Screen" component={ThirdScreen} />
          <Tab.Screen name="Fourth Screen" component={FourthScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}