import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { Searchbar } from 'react-native-paper';
import RestaurantInfo from '../components/RestaurantInfo';
import styled from 'styled-components';

const SafeArea = styled(SafeAreaView)
`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View
`
  padding: ${(props) => props.theme.space[3]};
`;

const RListContainer = styled.View
`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  padding-top: ${(props) => props.theme.space[0]};
`;

const RestaurantsScreen = () => {
    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar placeholder='Search...' />
            </SearchContainer>
            <RListContainer >
                <RestaurantInfo />
            </RListContainer>
        </SafeArea>
    )
}

export default RestaurantsScreen
