import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { AppButton, Container, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import HomeHeader from '../../Components/Header/HomeHeader'
import StoryBox from '../../Components/Home/StoryBox'
import PostCard from '../../Components/Home/PostCard'


const Home = () => {
    const color = useTheme();
    const storyArr = [
        { img: require('../../Assets/Home/story.png') },
        { img: require('../../Assets/Home/story.png') },
        { img: require('../../Assets/Home/story.png') },
        { img: require('../../Assets/Home/story.png') },
    ]

    const postArr = [
        {
            img: require('../../Assets/Home/post.png'),
            name: 'lorem',
            time: '16 Hour Ago',
        },
        {
            img: require('../../Assets/Home/post.png'),
            name: 'lorem',
            time: '16 Hour Ago',
        },
        {
            img: require('../../Assets/Home/post.png'),
            name: 'lorem',
            time: '16 Hour Ago',
        },
        {
            img: require('../../Assets/Home/post.png'),
            name: 'lorem',
            time: '16 Hour Ago',
        },
        {
            img: require('../../Assets/Home/post.png'),
            name: 'lorem',
            time: '16 Hour Ago',
        },
    ]

    return (
        <Container>
            <HomeHeader />
            <ScrollView
                contentContainerStyle={{ paddingHorizontal: moderateScale(15) }}
                showsVerticalScrollIndicator={false}>
                <ScrollView
                    horizontal>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginVertical: moderateScale(10)
                        }}>
                        {storyArr.map((item, index) => (
                            <StoryBox
                                key={index}
                                item={item}
                                index={index}
                            />
                        ))}
                    </View>
                </ScrollView>
                {postArr.map((item, index) => (
                    <PostCard
                        key={index}
                        item={item}
                    />
                ))}
            </ScrollView>
        </Container>
    )
}

export default Home

const styles = StyleSheet.create({})