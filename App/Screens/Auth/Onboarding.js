import { ImageBackground, StyleSheet, View } from 'react-native';
import React from 'react';
import { AppButton, Container, Text, useTheme } from 'react-native-basic-elements';
import Swiper from 'react-native-swiper';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import NavigationService from '../../Services/Navigation';

const Onboarding = () => {
    const colors = useTheme();
    return (
        <Container>
            <Swiper
                dot={<View style={styles.dotStyle} />}
                activeDot={<View style={{
                    ...styles.activeDotStyle,
                    backgroundColor: colors.buttonColor
                }} />}
                paginationStyle={styles.paginationStyle}
                style={styles.wrapper}
            >
                <ImageBackground
                    source={require('../../Assets/sign.png')}
                    style={styles.slide1}>
                    <View style={{ flex: 1 }} />
                    <Text
                        style={{
                            ...styles.textStyl,
                            color: colors.primaryFontColor,
                        }}>
                        Enhance Emotional
                        Fitness on the go
                    </Text>
                </ImageBackground>

                <ImageBackground
                    source={require('../../Assets/sign.png')}
                    style={styles.slide1}>
                    <View style={{ flex: 1 }} />
                    <Text
                        style={{
                            ...styles.textStyl,
                            color: colors.primaryFontColor,
                        }}>
                        Enhance Emotional
                        Fitness on the go
                    </Text>
                </ImageBackground>

                <ImageBackground
                    source={require('../../Assets/sign.png')}
                    style={styles.slide1}>
                    <View style={{ flex: 1 }} />
                    <Text
                        style={{
                            ...styles.textStyl,
                            color: colors.primaryFontColor,
                        }}>
                        Enhance Emotional
                        Fitness on the go
                    </Text>
                    <AppButton
                        onPress={() => NavigationService.navigate('NextScreen')}
                        title='Get Started'
                        textStyle={{
                            ...styles.textStyl,
                            color: colors.buttonColor,
                        }}
                        style={styles.buttonStyl}
                    />
                </ImageBackground>
            </Swiper>
        </Container>
    );
}

export default Onboarding;

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
    },
    textStyl: {
        fontFamily: FONTS.Poppins.bold,
        fontSize: moderateScale(22),
        textAlign: 'center',
        marginHorizontal: moderateScale(15),
    },
    buttonStyl: {
        backgroundColor: '#7A7A7A',
        zIndex: 999,
        width: moderateScale(231),
        alignSelf: 'center',
        marginVertical: moderateScale(20),
    },
    dotStyle: {
        backgroundColor: '#ccc',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
    },
    activeDotStyle: {
        // backgroundColor: '#000',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
    },
    paginationStyle: {
        position: 'absolute',
        bottom: moderateScale(80), // Adjust the position as needed
        left: 0,
        right: 0,
    },
});
