import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const OptionboxNew = ({ item }) => {
    const colors = useTheme()
    return (
        <View
            style={{
                ...styles.boxStyl,
                borderColor: colors.buttonColor
            }}>
            <Text
                style={{
                    ...styles.textStyl,
                    color: colors.primaryFontColor
                }}>
                {item.title}
            </Text>
        </View>
    )
}

export default OptionboxNew

const styles = StyleSheet.create({
    boxStyl: {
        paddingHorizontal: moderateScale(15),
        paddingVertical: moderateScale(10),
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(8)
    },
    textStyl: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(12),
        // width: '90%'
    }
})

