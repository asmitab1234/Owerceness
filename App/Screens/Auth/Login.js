import { Image, ImageBackground, StyleSheet, View } from 'react-native'
import React from 'react'
import { AppButton, Card, Container, StatusBar, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { useDispatch } from 'react-redux'
import { setUser } from '../../Redux/reducer/User'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'

const Login = () => {
    const colors = useTheme();

    const iconArr = [
        {
            img: require('../../Assets/facebook.png')
        },
        {
            img: require('../../Assets/Google.png')
        },
        {
            img: require('../../Assets/apple-logo.png')
        }
    ]
    return (
        <Container
        style={{
            backgroundColor:colors.secondaryThemeColor 
        }}>
            <StatusBar backgroundColor={colors.primaryFontColor} barStyle='dark-content' />
            <View
                style={{
                    ...styles.imgBorder,
                    borderColor: colors.buttonColor
                }}>
                <ImageBackground
                    source={require('../../Assets/Mask_group.png')}
                    borderRadius={100}
                    // resizeMode='contain'
                    style={{
                        height: moderateScale(310),
                        width: moderateScale(180),
                    }}>
                    <Image source={require('../../Assets/Group.png')}
                        style={styles.print}
                    />
                </ImageBackground>
            </View>

            <Text
                style={{
                    ...styles.signinText,
                    marginTop: moderateScale(20)
                }}>
                Sign in with Touch ID
            </Text>
            <Text
                style={styles.paraText}>
                use your touch ID for faster,
                easier access to your account.
            </Text>
            <AppButton
                title='Login With Email'
                textStyle={{
                    ...styles.signinText,
                    fontSize: moderateScale(16),
                    color: colors.secondaryThemeColor
                }}
                style={styles.buttonStyl}
                onPress={() => NavigationService.navigate('SignIn')}
            />
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginVertical: moderateScale(10)
                }}>
                <View
                    style={{
                        height: moderateScale(1),
                        width: '25%,',
                        backgroundColor: colors.secondaryFontColor,
                    }}
                />
                <Text
                    style={{
                        fontFamily: FONTS.Poppins.regular,
                        fontSize: moderateScale(13),
                        color: colors.secondaryFontColor,
                    }}>
                    Or Login With
                </Text>

                <View
                    style={{
                        height: moderateScale(1),
                        width: '25%,',
                        backgroundColor: colors.primaryFontColor,
                    }}
                />

            </View>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginHorizontal: moderateScale(30),
                    marginVertical: moderateScale(15)
                }}>
                {iconArr.map((item, index) => (
                    <Card
                        key={index}>
                        <Image
                            source={item.img}
                            style={{
                                height: moderateScale(20),
                                width: moderateScale(20)
                            }}
                        />
                    </Card>
                ))}


            </View>
        </Container>
    )
}

export default Login

const styles = StyleSheet.create({
    imgBorder: {
        height: moderateScale(338),
        width: moderateScale(200),
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(100),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginTop: moderateScale(50)
    },
    print: {
        height: moderateScale(80),
        width: moderateScale(60),
        marginLeft: moderateScale(26),
        marginVertical: moderateScale(120)
    },
    signinText: {
        fontFamily: FONTS.Poppins.semiBold,
        fontSize: moderateScale(18),
        textAlign: 'center',
    },
    paraText: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(13),
        alignSelf: 'center',
        width: '60%',
        textAlign: 'center'
    },
    buttonStyl: {
        height: moderateScale(50),
        width: moderateScale(278),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: moderateScale(30),
        borderTopLeftRadius: moderateScale(50),
        borderBottomLeftRadius: moderateScale(50),
        borderTopRightRadius: moderateScale(100),
        borderBottomRightRadius: moderateScale(0)
    }
})