import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components'
import { RestaurantInfoCard } from '../components/restaurant-info-card.component'

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`
const RestaurantContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`

export const RestaurantScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <RestaurantContainer>
        <RestaurantInfoCard />
      </RestaurantContainer>
    </SafeArea>
  )
}
