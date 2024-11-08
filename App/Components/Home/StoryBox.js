import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Icon, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const StoryBox = ({ item, index }) => {
    const colors = useTheme()
    return (
        <View
            style={{
                alignItems: 'center'
            }}>
            <View
                style={{
                    ...styles.box,
                    borderColor: colors.buttonColor
                }}>
                {index == 0 ?
                    <View
                        style={{
                            ...styles.imgStyl,
                            backgroundColor: colors.buttonColor,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: moderateScale(18)
                        }}>
                        <Icon
                            name='plus'
                            type='AntDesign'
                            // color={:}
                            size={30}
                        />
                    </View>
                    :
                    <Image
                        source={item.img}
                        style={styles.imgStyl}
                        resizeMode='contain'
                    />
                }

            </View>
            <Text
                style={styles.textStyl}
            >
                Lorem
            </Text>
        </View>
    )
}

export default StoryBox

const styles = StyleSheet.create({
    box: {
        borderWidth: moderateScale(1),
        height: moderateScale(74),
        width: moderateScale(74),
        borderRadius: moderateScale(25),
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: moderateScale(5)
    },
    imgStyl: {
        height: moderateScale(62),
        width: moderateScale(62),
        borderRadius: moderateScale(10)
    },
    textStyl: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(12),
        marginTop: moderateScale(2)
    }
})