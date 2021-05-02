import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Card } from 'react-native-paper'
import styled from 'styled-components/native'

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'some restaurant',
    icon,
    photos = [
      'https://mythicscribes.com/wp-content/uploads/2019/06/featured_medieval-food.jpg',
      'https://www.unh.edu/healthyunh/sites/default/files/blog-post/junk-food-istock-zeljkosantrac.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} source={{ uri: photos[1] }} style={styles.cover} />
      <TextStyled>{name}</TextStyled>
    </Card>
  )
}

const TextStyled = styled.Text`
  color: red;
  padding: 16px;
`

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
  },
  cover: {
    padding: 20,
    backgroundColor: 'white',
  },
})
