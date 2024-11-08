import { Dimensions, Image, ImageBackground, Pressable, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'
const { height, width } = Dimensions.get('window')
import Modal from "react-native-modal";
import CommentModal from './CommentModal'

const PostCard = ({ item }) => {
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
    <ImageBackground
      source={item.img}
      style={styles.imageBox}
      borderRadius={30}
    >
      <Pressable
        onPress={() => NavigationService.navigate('SingleScreen')}
        style={{
          ...styles.imageBox,
          marginVertical: 0,
          borderRadius: moderateScale(30),
          backgroundColor: '#0000009F'
        }}
      >

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
            <View
              style={{
                ...styles.box,
                borderColor: colors.buttonColor
              }}>
              <Image
                source={item.img}
                style={styles.imgStyl}
                resizeMode='contain'
              />
            </View>
            <View>
              <Text
                style={styles.name}>
                {item.name}
              </Text>
              <Text
                style={styles.hour}>
                {item.time}
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
              marginRight: moderateScale(20)
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
              // justifyContent: 'flex-end',
              marginRight: moderateScale(10)
            }}>
            {reactArr.map((item, index) => (
              <Pressable
                onPress={() => item.handelClick()}
                style={{
                  alignItems: 'center',
                  marginVertical: moderateScale(15)
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
                    fontSize: moderateScale(12)
                  }}>
                  {item.no}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      </Pressable>
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
    </ImageBackground>
  )
}

export default PostCard

const styles = StyleSheet.create({
  imageBox: {
    height: moderateScale(360),
    width: width - moderateScale(30),
    marginVertical: moderateScale(15)
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
    height: moderateScale(16),
    width: moderateScale(16)
  }
})