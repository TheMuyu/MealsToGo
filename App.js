import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { ThemeProvider } from 'styled-components/native';
import RestaurantsScreen from './src/features/restaurants/screens/RestaurantsScreen';
import { theme } from './src/features/structure/theme'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeArea } from './src/components/utility/SafeArea';
import { Text } from './src/components/typography/Text';
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsContextProvider } from "./src/services/restaurants/RestaurantsContext";
import { LocationContextProvider } from "./src/services/location/LocationContext";

import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

function MapsScreen() {
    return (
        <SafeArea style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Maps!</Text>
        </SafeArea>
    );
}

function SettingsScreen() {
    return (
        <SafeArea style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </SafeArea>
    );
}

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
        tabBarIcon: ({ size, color }) => (
            <Ionicons name={iconName} size={size} color={color} />
        ),
        headerShown: false,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
    };
};

export default function App() {
    const [oswaldLoaded] = useOswald({
        Oswald_400Regular,
    });
    const [latoLoaded] = useLato({
        Lato_400Regular,
    });

    if (!oswaldLoaded || !latoLoaded) {
        return null;
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <LocationContextProvider>
                <RestaurantsContextProvider>
                    <NavigationContainer>
                        <Tab.Navigator screenOptions={createScreenOptions} >
                            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
                            <Tab.Screen name="Map" component={MapsScreen} />
                            <Tab.Screen name="Settings" component={SettingsScreen} />
                        </Tab.Navigator>
                    </NavigationContainer>
                </RestaurantsContextProvider>
                </LocationContextProvider>
            </ThemeProvider>
            <ExpoStatusBar style="auto" />
        </>
    );
}

const styles = StyleSheet.create({
    
});