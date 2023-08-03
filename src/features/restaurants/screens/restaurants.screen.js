import React from "react";
import { List, Searchbar } from "react-native-paper";
import { Text, View, SafeAreaView, StatusBar } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import styled from "styled-components/native";

const SearchContainer = styled.View`
  padding: 16px;
`;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const RestaurantListContainer = styled.View`
  background-color: blue;
  padding: 16px;
  flex: 1;
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantInfoCard />
    </RestaurantListContainer>
  </SafeArea>
);
