import React from 'react'
import { FlatList } from 'react-native'
import { Searchbar } from 'react-native-paper';
import RestaurantInfo from '../components/RestaurantInfo';
import styled from 'styled-components';
import { Spacer } from './../../../components/spacer/Spacer'
import { SafeArea } from '../../../components/utility/SafeArea';


const SearchContainer = styled.View
  `
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;


const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder='Search...' />
      </SearchContainer>
      <RestaurantList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }, { name: 6 }, { name: 7 }, { name: 8 }]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfo />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />


    </SafeArea>
  )
}

export default RestaurantsScreen
