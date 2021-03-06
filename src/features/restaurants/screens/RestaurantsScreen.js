import React, { useContext } from 'react'
import { FlatList } from 'react-native'
import { Searchbar } from 'react-native-paper';
import RestaurantInfo from '../components/RestaurantInfo';
import styled from 'styled-components';
import { Spacer } from './../../../components/spacer/Spacer'
import { SafeArea } from '../../../components/utility/SafeArea';
import { RestaurantsContext } from "../../../services/restaurants/RestaurantsContext";
import { ActivityIndicator, Colors } from "react-native-paper";

const SearchContainer = styled.View
  `
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )} 
      <SearchContainer>
        <Searchbar placeholder='Search...' />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfo restaurant={item} />
            </Spacer>
          )
        }}
        keyExtractor={(item) => item.name}
      />


    </SafeArea>
  )
}

export default RestaurantsScreen
