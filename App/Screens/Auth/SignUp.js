import { ImageBackground, Pressable, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { AppButton, AppTextInput, Container, Icon, StatusBar, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'

const SignUp = () => {
    const colors = useTheme()
    return (
        <Container>
            <StatusBar backgroundColor={'transparent'} barStyle='light-content' translucent={true} />
            <ImageBackground
                source={require('../../Assets/sign.png')}
                style={{
                    flex: 1
                }}>
                <View
                    style={{
                        backgroundColor: '#68A2462F',
                        flex: 1
                    }}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingHorizontal: moderateScale(15)
                        }}>

                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: moderateScale(200)
                            }}>
                            <Pressable
                                onPress={() => NavigationService.navigate('SignIn')}>
                                <Text
                                    style={{
                                        ...styles.heading,
                                        color: colors.secondaryThemeColor
                                    }}>
                                    Login
                                </Text>
                            </Pressable>
                            <View
                                style={{
                                    height: '60%',
                                    width: moderateScale(3),
                                    backgroundColor: colors.secondaryThemeColor,
                                    marginHorizontal: moderateScale(15)
                                }} />
                            <Pressable>
                                <Text
                                    style={{
                                        ...styles.heading,
                                        color: colors.buttonColor
                                    }}>
                                    Signup
                                </Text>
                            </Pressable>
                        </View>

                        <View
                            style={{
                                ...styles.loginBox,
                                backgroundColor: '#FAFAFA4D'
                            }}>
                            <Text
                                style={{
                                    ...styles.heading,
                                    color: colors.secondaryThemeColor
                                }}>
                                Get In & at 3 Free
                            </Text>
                            <Text
                                style={{
                                    ...styles.titleText,
                                    color: colors.secondaryThemeColor
                                }}>
                                Amanda
                            </Text>

                            <AppTextInput
                                title='Name'
                                titleStyle={{
                                    ...styles.titleText,
                                    color: colors.secondaryThemeColor
                                }}
                                inputStyle={{
                                    ...styles.placehoderText,
                                    color: colors.secondaryThemeColor
                                }}
                                inputContainerStyle={{
                                    ...styles.inputContainerStyle,
                                    borderColor: colors.secondaryThemeColor
                                }}
                                mainContainerStyle={{
                                    marginTop: moderateScale(20)
                                }}
                            />

                            <AppTextInput
                                title='Email'
                                titleStyle={{
                                    ...styles.titleText,
                                    color: colors.secondaryThemeColor
                                }}
                                inputStyle={{
                                    ...styles.placehoderText,
                                    color: colors.secondaryThemeColor
                                }}
                                inputContainerStyle={{
                                    ...styles.inputContainerStyle,
                                    borderColor: colors.secondaryThemeColor
                                }}
                                mainContainerStyle={{
                                    marginTop: moderateScale(20)
                                }}
                            />

                            <AppTextInput
                                title='Password'
                                titleStyle={{
                                    ...styles.titleText,
                                    color: colors.secondaryThemeColor
                                }}
                                inputStyle={{
                                    ...styles.placehoderText,
                                    color: colors.secondaryThemeColor
                                }}
                                inputContainerStyle={{
                                    ...styles.inputContainerStyle,
                                    borderColor: colors.secondaryThemeColor
                                }}
                                mainContainerStyle={{
                                    marginTop: moderateScale(25)
                                }}
                                secureTextEntry={true}
                                rightAction={
                                    <Icon
                                        name='eye'
                                        type='Entypo'
                                        color={colors.secondaryThemeColor}
                                    />
                                }
                            />

                            <AppButton
                                title='SignUp'
                                textStyle={{
                                    ...styles.titleText,
                                    // fontSize: moderateScale(16),
                                    color: colors.buttonColor
                                }}
                                style={{
                                    ...styles.buttonStyl,
                                    backgroundColor: colors.secondaryThemeColor
                                }}
                                onPress={() => NavigationService.navigate('Onboarding')}
                            />
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
        </Container>
    )
}

export default SignUp

const styles = StyleSheet.create({
    heading: {
        fontFamily: FONTS.Poppins.bold,
        fontSize: moderateScale(18)
    },
    loginBox: {
        paddingVertical: moderateScale(10),
        paddingHorizontal: moderateScale(15),
        marginVertical: moderateScale(20),
        borderRadius: moderateScale(15)
    },
    titleText: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(18),
    },
    inputContainerStyle: {
        height: moderateScale(42),
    },
    placehoderText: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(13),
    },
    buttonStyl: {
        height: moderateScale(45),
        width: moderateScale(278),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: moderateScale(30),
        borderTopLeftRadius: moderateScale(50),
        borderBottomLeftRadius: moderateScale(50),
        borderTopRightRadius: moderateScale(100),
        borderBottomRightRadius: moderateScale(0),
        marginBottom: moderateScale(20)
    }
})