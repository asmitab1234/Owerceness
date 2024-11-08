import { Dimensions, Image, ImageBackground, Pressable, ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Container, Icon, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'
import Modal from "react-native-modal";
import CommentModal from '../../Components/Home/CommentModal'
const { height, width } = Dimensions.get('window')

const SingleScreen = () => {
    const colors = useTheme()
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }
    const reactArr = [
        {
            img: require('../../Assets/Home/postshare.png'),
            no: "45",
        },
        {
            img: require('../../Assets/Home/postsend.png'),
            no: "45",
        },
        {
            img: require('../../Assets/Home/commrnt.png'),
            no: "45",
            handelClick: () => { toggleModal() }
        },
        {
            img: require('../../Assets/Home/like.png'),
            no: "45",
        },
    ]
    return (
        <Container>
            <StatusBar backgroundColor={colors.secondaryFontColor} barStyle={'light-content'} />
            {/* <ScrollView
                showsVerticalScrollIndicator={false}> */}
            <ImageBackground
                source={require('../../Assets/Home/post.png')}
                style={styles.imageBox}
                borderRadius={30}
            >
                {/* <Pressable
                        onPress={() => NavigationService.navigate('SingleScreen')}
                        style={{
                            ...styles.imageBox,
                            marginVertical: 0,
                            borderRadius: moderateScale(30),
                            backgroundColor: '#0000009F'
                        }}
                    > */}

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginHorizontal: moderateScale(15),
                        marginVertical: moderateScale(15)
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <Icon
                            name='chevron-small-left'
                            type='Entypo'
                            size={35}
                            onPress={() => NavigationService.back()}
                        />
                        <View
                            style={{
                                ...styles.box,
                                borderColor: colors.buttonColor
                            }}>
                            <Image
                                source={require('../../Assets/Home/post.png')}
                                style={styles.imgStyl}
                                resizeMode='contain'
                            />
                        </View>
                        <View>
                            <Text
                                style={styles.name}>
                                Lorem
                            </Text>
                            <Text
                                style={styles.hour}>
                                19 hour ago
                            </Text>
                        </View>
                        <TouchableOpacity
                            style={{
                                ...styles.followBox,
                                borderColor: colors.buttonColor
                            }}>
                            <Text
                                style={{
                                    ...styles.hour,
                                    color: colors.buttonColor
                                }}>
                                Follow
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            height: moderateScale(50),
                            width: moderateScale(50),
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: moderateScale(70),
                            // marginRight: moderateScale(20)
                        }}>
                        <Image
                            source={require('../../Assets/Home/Save.png')}
                            style={{
                                height: moderateScale(21),
                                width: moderateScale(21)
                            }}
                        />
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: "row", }}>
                    <View style={{
                        flex: 1,
                        // backgroundColor: 'red'
                    }} />

                    <View
                        style={{
                            // marginVertical:moderateScale(8)
                            // flex:1,
                            justifyContent: 'space-evenly',
                            marginRight: moderateScale(15)
                        }}>
                        {reactArr.map((item, index) => (
                            <Pressable
                                onPress={()=>item.handelClick()}
                                style={{
                                    alignItems: 'center',
                                }}
                                key={index}>
                                <Image
                                    source={item.img}
                                    style={styles.iconStyl}
                                    resizeMode='contain'
                                />
                                <Text
                                    style={{
                                        ...styles.name,
                                        fontSize: moderateScale(30)
                                    }}>
                                    {item.no}
                                </Text>
                            </Pressable>
                        ))}
                    </View>
                </View>
                {/* </Pressable> */}
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#000000B3',
                        width: moderateScale(150),
                        height: moderateScale(30),
                        borderRadius: moderateScale(50),
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginVertical: moderateScale(20),
                        marginHorizontal: moderateScale(20)
                    }}>
                    <Icon
                        name='music'
                        type='FontAwesome'
                        style={{
                            marginRight: moderateScale(10)
                        }}
                    />
                    <Text
                        style={styles.hour}>
                        Lorem Ipsum
                    </Text>
                </View>
            </ImageBackground>
            {/* </ScrollView> */}
            <Modal isVisible={isModalVisible}
                style={{
                    justifyContent: 'flex-end',
                    margin: moderateScale(0),
                }}
                onBackdropPress={() => setModalVisible(false)}
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}
            >
                <CommentModal
                    setModalVisible={setModalVisible} />
            </Modal>
        </Container>
    )
}

export default SingleScreen

const styles = StyleSheet.create({
    imageBox: {
        // height: moderateScale(360),
        // width: moderateScale(360),
        // marginVertical: moderateScale(15)
        flex: 1
    },
    box: {
        borderWidth: moderateScale(1),
        height: moderateScale(54),
        width: moderateScale(54),
        borderRadius: moderateScale(18),
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: moderateScale(10)
    },
    imgStyl: {
        height: moderateScale(46),
        width: moderateScale(46),
        borderRadius: moderateScale(20)
    },
    name: {
        fontFamily: FONTS.Poppins.medium,
        fontSize: moderateScale(15),
    },
    hour: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(12),
    },
    followBox: {
        paddingHorizontal: moderateScale(13),
        paddingVertical: moderateScale(2),
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(20),
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: moderateScale(15)
    },
    iconStyl: {
        height: moderateScale(40),
        width: moderateScale(40)
    }
})