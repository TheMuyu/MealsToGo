import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const Address = styled.Text
    `
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Info = styled.View
    `
    padding: ${(props) => props.theme.space[3]};
    padding-top: ${(props) => props.theme.space[0]};
`;

export const RCard = styled(Card)
    `
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RCardCover = styled(Card.Cover)
    `
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Rating = styled.View
    `
    flex-direction: row;
    padding-top: ${(props) => props.theme.space[1]};
`;

export const RatingAndOpen = styled.View
    `
    flex-direction: row;
    align-items: center;
`;

export const Open = styled.View
    `
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;