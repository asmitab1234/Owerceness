import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container, StatusBar, useTheme } from 'react-native-basic-elements'

const LikeScreen = () => {
  const colors = useTheme()
  return (
    <Container>
      <StatusBar barStyle='light-content' backgroundColor={colors.pageBackgroundColor} />
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: moderateScale(15) }}
        showsVerticalScrollIndicator={false}>

      </ScrollView>
    </Container>
  )
}

export default LikeScreen

const styles = StyleSheet.create({})