import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import DemoScreen from './DemoScreen';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import { NavigationContainer, } from '@react-navigation/native';




const Tabs = () => {
    return(
        <NavigationContainer>
        <Tab.Navigator 
        
        screenOptions= {{
            tabBarShowLabel : false,
            tabBarVisible : false,
            headerTitle : false,
            tabBarStyle : {
                position: 'absolute',
                bottom : 23,
                left : 20,
                right : 20,
                elevation : 0,
                backgroundColor : '#ffffff',
                borderRadius: 15,
                height: 90,
                ...styles.shadow,
                header: null,
                headerMode : 'none',
                navigationOptions : { header: null }
            },
            headerMode : 'none',
        }}>
            <Tab.Screen name='Browser' component={DemoScreen}
            options={{
                tabBarIcon: ({focused}) =>(
                    <View style={{alignItems : 'center', justifyContent: 'center'}}>
                        <Image 
                            source={require('./assets/icon1.png')}
                            resizeMode='contain'
                            style={{width : 40, height: 40}}
                        />
                    </View>
                )
            }}
            />
            <Tab.Screen name='Menu' component={DemoScreen} 
            options={{
                tabBarIcon: ({focused}) =>(
                    <View style={{alignItems : 'center', justifyContent: 'center'}}>
                        <Image 
                            source={require('./assets/icon2.png')}
                            resizeMode='contain'
                            style={{width : 40, height: 40}}
                        />
                    </View>
                )
            }}/>
            <Tab.Screen name='Add' component={DemoScreen}
            options={{
                tabBarIcon: ({focused}) =>(
                    <View style={{alignItems : 'center', justifyContent: 'center', top: -30}}>
                        <Image 
                            source={require('./assets/icon3.jpg')}
                            resizeMode='contain'
                            style={{width : 60, height: 60}}
                        />
                    </View>
                )
            }}
            />
            <Tab.Screen name='Notification' component={DemoScreen}
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) =>(
                    <View style={{alignItems : 'center', justifyContent: 'center'}}>
                        <Image 
                            source={require('./assets/icon4.png')}
                            resizeMode='contain'
                            style={{width : 40, height: 40}}
                        />
                    </View>
                )
            }}
            />
            <Tab.Screen name='Profile' component={DemoScreen}
            options={{
                tabBarIcon: () =>(
                    <View style={{alignItems : 'center', justifyContent: 'center'}}>
                        <Image 
                            source={require('./assets/icon5.png')}
                            resizeMode='contain'
                            style={{width : 40, height: 40}}
                        />
                    </View>
                )
            }}
            />

        </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    shadow : {
        shadowColor : 'black',
        shadowOffset: {
            width : 5,
            height: 15,
        },
        shadowOpacity : 0.5,
        shadowRadius : 3.5,
        elevation : 7
    }
  });

export default Tabs;