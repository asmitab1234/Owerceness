import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'

const HomeHeader = () => {
    const colors = useTheme()
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: moderateScale(15),
                paddingVertical: moderateScale(15),
            }}>
            <Icon
                name='camera'
                type='EvilIcon'
                color={colors.primaryFontColor}
                size={30}
            />
            <Image
                source={require('../../Assets/Home/Owerceness.png')}
                style={styles.logo}
                resizeMode='contain'
            />
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                <Image
                    source={require('../../Assets/Home/home.png')}
                    style={{
                        ...styles.iconStyl,
                        marginRight: moderateScale(15)
                    }}
                />
                <Image
                    source={require('../../Assets/Home/send.png')}
                    style={
                        styles.iconStyl
                    }
                />
            </View>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    logo: {
        height: moderateScale(30),
        width: moderateScale(150)
    },
    iconStyl: {
        height: moderateScale(20),
        width: moderateScale(20)
    }
})