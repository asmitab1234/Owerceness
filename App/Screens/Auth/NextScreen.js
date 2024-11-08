import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppButton, Container, StatusBar, useTheme } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'
import NavigationService from '../../Services/Navigation'
import OptionboxNew from '../../Components/Auth/OptionboxNew'

const NextScreen = () => {
    const colors = useTheme()
    const optionArr = [
        { title: 'To track my workouts' },
        { title: 'To find and work with Coach' },
        { title: 'To Follow a friend or influencer I know' },
        { title: 'To Use the Workout programs a Coach' },
        { title: 'To meet other fitness enthusiasts' },
        { title: 'To discover workouts' },
        { title: 'Other' },
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
                    Why did You decide to Download{'\n'}
                    Owerceness?
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
                onPress={() => NavigationService.navigate('NextScreenAnother')}
                title='Next'
                textStyle={{
                    ...styles.heading,
                    color: colors.primaryFontColor
                }}
                style={styles.buttonStyl}
            />
        </Container>
    )
}

export default NextScreen

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