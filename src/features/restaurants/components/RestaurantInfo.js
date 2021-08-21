import React from 'react'
import { Card } from 'react-native-paper';
import styled from 'styled-components';
import { SvgXml } from 'react-native-svg';
import starSvg from './../../../../assets/star'
import openSvg from './../../../../assets/open'
import { View, Image, Text } from 'react-native';

const Title = styled.Text
    `
    color: ${(props) => props.theme.colors.ui.primary};
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body}
`;
const Address = styled.Text
    `
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Info = styled.View
    `
    padding: ${(props) => props.theme.space[3]};
    padding-top: ${(props) => props.theme.space[0]};
`;

const RCard = styled(Card)
    `
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RCardCover = styled(Card.Cover)
    `
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Rating = styled.View
    `
    flex-direction: row;
    padding-top: ${(props) => props.theme.space[1]};
`;

const RatingAndOpen = styled.View
    `
    flex-direction: row;
    align-items: center;
`;

const Open = styled.View
    `
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;

const RestaurantInfo = ({ restaurant = {} }) => {
    const {
        name = "Some Restaurant",
        icon = "https://i.hizliresim.com/fnpoepz.png",
        photos = [
          "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
    } = restaurant;
    const ratingArray = Array.from(new Array(rating), (x, i) => i + 1);
    return (
        <RCard elevation={5}>
            <RCardCover key={name} source={{ uri: 'https://picsum.photos/700' }} />
            <Info>
                <Title>{name}</Title>
                <RatingAndOpen>
                    <Rating>
                        {
                            ratingArray.map((i) => (
                                <SvgXml key={i} width="20" height="20" xml={starSvg} />
                            ))
                        }
                    </Rating>
                    <Open>
                         
                        
                        {(isOpenNow && !isClosedTemporarily) && <SvgXml xml={openSvg} width={20} height={20} />}
                        
                        {isClosedTemporarily && <Image style={{ width: 60, height: 20 }} source={{ uri: icon }} />}
                    </Open>
                </RatingAndOpen>
                <Address>{address}</Address>
            </Info>
        </RCard>
    )
}

export default RestaurantInfo

