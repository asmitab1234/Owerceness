import { Dimensions, Image, Pressable, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { AppButton, Icon, RadioButton, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'


const { height, width } = Dimensions.get('window')

const CommentModal = ({ setModalVisible }) => {
    const colors = useTheme()
    const commentArr = [
        {
            name: 'Young -Khann',
            week: '14w',
            comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            img: require('../../Assets/Home/story.png')
        },
        {
            name: 'Young -Khann',
            week: '14w',
            comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            img: require('../../Assets/Home/story.png')
        },
        {
            name: 'Young -Khann',
            week: '14w',
            comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            img: require('../../Assets/Home/story.png')
        },
        {
            name: 'Young -Khann',
            week: '14w',
            comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            img: require('../../Assets/Home/story.png')
        },
        {
            name: 'Young -Khann',
            week: '14w',
            comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            img: require('../../Assets/Home/story.png')
        },
    ]
    return (
        <View
            style={{
                ...styles.modalStyl,
            }}>
            <View
                style={{
                    height: moderateScale(3),
                    width: '30%',
                    backgroundColor: colors.secondaryFontColor,
                    alignSelf: 'center',
                    borderRadius: moderateScale(20)
                }}
            />
            <Text
                style={{
                    ...styles.optionText,
                    color: colors.secondaryFontColor
                }}>
                Comment
            </Text>

{
    commentArr.map((item, index) => (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginVertical: moderateScale(14),
                // marginHorizontal:moderateScale(40),
                // borderWidth: 1,
                // flex:1,
            
            }}
            key={index}>
            <Image
                source={item.img}
                style={{
                    height: moderateScale(40),
                    width: moderateScale(40),
                    borderRadius: moderateScale(50),
                    marginRight: moderateScale(10)
                }}
            />
            <View>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>

                    <Text
                        style={{
                            ...styles.textStyl,
                            // fontSize: moderateScale(16),
                            color: colors.secondaryFontColor
                        }}>
                        {item.name}
                    </Text>
                    <Text style={{
                        ...styles.textStyl,
                        fontSize: moderateScale(10),
                        color: colors.secondaryFontColor,
                        marginLeft: moderateScale(10)
                    }}>
                        {item.week}
                    </Text>
                </View>
                <Text
                    style={{
                        ...styles.textStyl,
                        color: colors.secondaryFontColor,
                        width: '50%'
                    }}>
                    {item.comment}
                </Text>
                <Text
                    style={{
                        ...styles.textStyl,
                        color: colors.secondaryFontColor,
                        fontSize: moderateScale(10),
                        fontFamily: FONTS.Poppins.medium
                    }}>
                    Reply
                </Text>
            </View>
            <View
                style={{
                    alignItems: 'center',
                    // borderWidth:1
                    // marginRight: moderateScale(40),
                }}>
                <Icon
                    name='favorite-border'
                    type='MaterialIcon'
                    color={colors.secondaryFontColor}
                    size={20}
                />
                <Text
                    style={{
                        ...styles.textStyl,
                        color: colors.secondaryFontColor,
                        fontSize: moderateScale(11)
                    }}>
                    1
                </Text>
            </View>
        </View>
    ))
}

        </View >
    )
}

export default CommentModal

const styles = StyleSheet.create({
    modalStyl: {
        // height: height / 4,
        width: width,
        borderRadius: moderateScale(8),
        backgroundColor: '#F5F5F5',
        paddingVertical: moderateScale(20),
        paddingHorizontal: moderateScale(15)
    },
    optionText: {
        fontFamily: FONTS.Poppins.medium,
        fontSize: moderateScale(20),
        marginVertical: moderateScale(10),
        textAlign: 'center'
    },
    textStyl: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(13),
    }
})