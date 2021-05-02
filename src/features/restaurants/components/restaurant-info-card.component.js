import React from 'react'
import { Card, Text } from 'react-native-paper'
import styled from 'styled-components/native'

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.ui.primary};
  padding: ${(props) => props.theme.space[3]};
`

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`

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
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[1] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  )
}
