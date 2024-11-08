import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const OptionBox = () => {
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

export default OptionBox

const styles = StyleSheet.create({
    boxStyl: {
        // paddingHorizontal: moderateScale(15),
        paddingVertical: moderateScale(10),
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(8)
    },
    textStyl: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(12),
        width: '20%'
    }
})

