import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppTextInput, Container, Icon, StatusBar, useTheme } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'

const Search = () => {
    const colors = useTheme()
    const imgArr = [
        { img: require('../../Assets/img.png') },
        { img: require('../../Assets/img.png') },
        { img: require('../../Assets/img.png') },
        { img: require('../../Assets/img.png') },
        { img: require('../../Assets/img.png') },
        { img: require('../../Assets/img.png') },
    ]
    return (
        <Container>
            <StatusBar barStyle='light-content' backgroundColor={colors.secondaryFontColor} />
            <ScrollView
                contentContainerStyle={{ paddingHorizontal: moderateScale(15) }}
                showsVerticalScrollIndicator={false}>
                <AppTextInput
                    placeholder='Search'
                    titleStyle={styles.titleText}
                    inputStyle={{
                        ...styles.titleText,
                    }}
                    inputContainerStyle={{
                        ...styles.inputContainerStyle,
                        backgroundColor: colors.primaryFontColor
                    }}
                    mainContainerStyle={{
                        marginTop: moderateScale(20)
                    }}
                    // rightAction={
                    //     <Icon
                    //         name='search1'
                    //         type='AntDesign'
                    //     />
                    // }
                    leftIcon={{
                        name: 'search1',
                        type: 'AntDesign',
                        color: '#000000'
                    }}
                />

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: 5
                    }}>
                    {imgArr.map((item, index) => {
                        <Image
                            key={index}
                            source={item.img}
                            style={styles.imageStyl}
                        />
                    })}
                </View>

            </ScrollView>
        </Container>
    )
}

export default Search

const styles = StyleSheet.create({
    titleText: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(15)
    },
    inputContainerStyle: {
        height: moderateScale(40),
        borderRadius: moderateScale(5),
    },
    imageStyl: {
        height: moderateScale(400),
        width: moderateScale(400)
    }
})