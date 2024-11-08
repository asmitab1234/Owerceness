import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';
import { moderateScale } from '../Constants/PixelRatio';
import Home from '../Screens/Home/Home';
import Search from '../Screens/Search/Search';
import AddPost from '../Screens/AddPost/AddPost';
import LikeScreen from '../Screens/LikeScreen/LikeScreen';
import Profile from '../Screens/Profile/Profile';
import { FONTS } from '../Constants/Fonts';
import { useTheme } from 'react-native-basic-elements';

const Tab = createBottomTabNavigator();

function BottomTab() {
    const colors = useTheme()
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                // tabBarLabelStyle: {
                //     fontFamily: FONTS.Poppins.regular,
                //     fontSize: moderateScale(12)
                // },
                tabBarShowLabel: false
            }}

            initialRouteName='Home'
        >
            <Tab.Screen
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size, focused }) => (

                        <Image
                            source={require('../Assets/BottomTab/Home.png')}
                            style={styles.bottomImg}
                            resizeMode='contain'
                            tintColor={focused ? colors.secondaryButtoncolor : colors.secondaryFontColor}
                        />
                    )
                }}
                name="Home"
                component={Home}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Image
                            source={require('../Assets/BottomTab/search.png')}
                            style={styles.bottomImg}
                            resizeMode='contain'
                            tintColor={focused ? colors.secondaryButtoncolor : colors.secondaryFontColor}
                        />
                    )
                }}
                name="Search" component={Search} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Image
                            source={require('../Assets/BottomTab/add.png')}
                            style={styles.bottomImg}
                            resizeMode='contain'
                            tintColor={focused ? colors.secondaryButtoncolor : colors.secondaryFontColor}
                        />
                    )
                }}
                name="AddPost" component={AddPost} />




            <Tab.Screen
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Image
                            source={require('../Assets/BottomTab/excersise.png')}
                            style={styles.bottomImg}
                            resizeMode='contain'
                            tintColor={focused ? colors.secondaryButtoncolor : colors.secondaryFontColor}
                        />
                    )
                }}
                name="LikeScreen" component={LikeScreen} />

            <Tab.Screen
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Image
                            source={require('../Assets/BottomTab/Profile.png')}
                            style={styles.bottomImg}
                            resizeMode='contain'
                            tintColor={focused ? colors.secondaryButtoncolor : colors.secondaryFontColor}
                        />
                    )
                }}
                name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}
export default BottomTab
const styles = StyleSheet.create({
    bottomImg: {
        height: moderateScale(20),
        width: moderateScale(20)
    }
})