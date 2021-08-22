import React from 'react'
import { SvgXml } from 'react-native-svg';
import starSvg from './../../../../assets/star'
import openSvg from './../../../../assets/open'
import { Image } from 'react-native';
import { Text } from '../../../components/typography/Text';
import { Address, Info, RCard, RCardCover, Rating, RatingAndOpen, Open } from './RestaurantInfoStyles';

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
        isClosedTemporarily = false,
    } = restaurant;

    const ratingArray = Array.from(new Array(rating), (x, i) => i + 1);
    
    return (
        <RCard elevation={5}>
            <RCardCover key={name} source={{ uri: 'https://picsum.photos/700' }} />
            <Info>
                <Text variant='label'>{name}</Text>
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

