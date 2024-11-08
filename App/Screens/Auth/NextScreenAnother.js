import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppButton, Container, StatusBar, useTheme } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'
import NavigationService from '../../Services/Navigation'
import OptionboxNew from '../../Components/Auth/OptionboxNew'

const NextScreenAnother = () => {
    const colors = useTheme()
    const optionArr = [
        { title: ' I’m a beginner' },
        { title: ' I’m an intermediate' },
        { title: ' I’m an expert' },
    ]
    return (
        <Container
            style={{
                // backgroundColor: colors.primaryFontColor
            }}>
            <StatusBar barStyle='light-content' backgroundColor={colors.primaryFontColor} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: moderateScale(15) }}>
                <Text
                    style={{
                        ...styles.heading,
                        color: colors.primaryFontColor,
                        marginTop: moderateScale(40)
                    }}>
                    Where are You in Your{'\n'}
                    Fitness Journey?
                </Text>
                <Text
                    style={{
                        ...styles.subHeadingText,
                        color: colors.primaryFontColor
                    }}>
                    You Can select more than 1 answer
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: 10,
                        marginVertical: moderateScale(20)
                    }}>
                    {optionArr.map((item, index) => (
                        <OptionboxNew
                            key={index}
                            item={item}
                        />
                    ))}
                </View>
            </ScrollView>
            <AppButton
                title='Next'
                textStyle={{
                    ...styles.heading,
                    color: colors.primaryFontColor
                }}
                style={styles.buttonStyl}
                onPress={() => NavigationService.navigate('AppStack')}
            />
        </Container>
    )
}

export default NextScreenAnother

const styles = StyleSheet.create({
    heading: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(18),
        textAlign: 'center',
    },
    subHeadingText: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(14),
        textAlign: 'center',
        marginTop: moderateScale(5)
    },
    buttonStyl: {
        marginVertical: moderateScale(20),
        height: moderateScale(45)
    }
})