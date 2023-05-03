import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View,  Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import GenScreen from './screens/GenScreen';
import HomeScreen from './screens/HomeScreen';
import NotesScreen from './screens/NotesScreen';
import Note from './screens/Note';
import Password from './screens/Password';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         tabBarOptions={{
//           showLabel: false,
//           style: styles.navbar,
//         }}
//       >
//         <Tab.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             tabBarIcon: ({ focused }) => (
//               <View style={[styles.navbarTab, focused && styles.activeTab]}>
//                 <MaterialIcons name="lock" size={24} color={focused ? '#4070F4' : '#777'} />
//                 <Text
//                   style={[
//                     styles.tabText,
//                     focused && styles.activeText,
//                   ]}
//                 >
//                   Vault
//                 </Text>
//               </View>
//             ),
//             headerShown: false
//           }}
//         />
//         <Tab.Screen
//           name="Gen"
//           component={GenScreen}
//           options={{
//             tabBarIcon: ({ focused }) => (
//               <View style={[styles.navbarTab, focused && styles.activeTab]}>
//                 <MaterialIcons name="autorenew" size={24} color={focused ? '#4070F4' : '#777'} />
//                 <Text
//                   style={[
//                     styles.tabText,
//                     focused && styles.activeText,
//                   ]}
//                 >
//                   Gen
//                 </Text>
//               </View>
//             ),
//             headerShown: false
//           }}
//         />
//         <Tab.Screen
//           name="Notes"
//           component={NotesScreen}
//           options={{
//             tabBarIcon: ({ focused }) => (
//               <View style={[styles.navbarTab, focused && styles.activeTab]}>
//                 <MaterialIcons name="description" size={24} color={focused ? '#4070F4' : '#777'} />
//                 <Text
//                   style={[
//                     styles.tabText,
//                     focused && styles.activeText,
//                   ]}
//                 >
//                   Notes
//                 </Text>
//               </View>
//             ),
//             headerShown: false
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            "display": "flex"
          },
          null
        ]
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.navbarTab, focused && styles.activeTab]}>
              <MaterialIcons name="lock" size={24} color={focused ? '#4070F4' : '#777'} />
              <Text
                style={[
                  styles.tabText,
                  focused && styles.activeText,
                ]}
              >
                Vault
              </Text>
            </View>
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Gen"
        component={GenScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.navbarTab, focused && styles.activeTab]}>
              <MaterialIcons name="autorenew" size={24} color={focused ? '#4070F4' : '#777'} />
              <Text
                style={[
                  styles.tabText,
                  focused && styles.activeText,
                ]}
              >
                Gen
              </Text>
            </View>
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Notes"
        component={NotesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.navbarTab, focused && styles.activeTab]}>
              <MaterialIcons name="description" size={24} color={focused ? '#4070F4' : '#777'} />
              <Text
                style={[
                  styles.tabText,
                  focused && styles.activeText,
                ]}
              >
                Notes
              </Text>
            </View>
          ),
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Main" component={MainTabNavigator} />
        <Stack.Screen options={{headerShown: false}} name="Note" component={Note} />
        <Stack.Screen options={{headerShown: false}} name="Password" component={Password} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#363636',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: '#242526',
  },
  navbarBottom: {
    backgroundColor: '#373737',
  },
  navbarTab: {
    justifyContent: 'center',
    backgroundColor: '#363636',
    alignItems: 'center',
    height: '103%',
    width: '100%',
  },
  tabText: {
    fontSize: 12,
    color: '#777',
    marginTop: 4,
  },
  activeTab: {
    backgroundColor: '#373737',
  },
  activeText: {
    color: '#4070F4',
  },
});