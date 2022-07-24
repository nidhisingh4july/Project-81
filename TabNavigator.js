import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/botoom-tabs'; 
import Ionicons from 'react-native-vector-icons/Ionicons';
import feed from "../screens/Feed";
import CreatePost from "../screen/CreatePost";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () =>  {
    return (
        <Tab.Navigator
           screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Feed') {
                        iconName = focused
                           ? 'book'
                           : 'book-outline';
                    } else if (route.name === 'CreatePos') {
                        iconName = focused 
                           ? 'create'
                           : 'create-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>
                },
            })}
            tabBarOption={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}

        >
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="CreatePost" component={CreatePost}/>
        </Tab.Navigator>           
        
    );
}   
export default BottomTabNavigator