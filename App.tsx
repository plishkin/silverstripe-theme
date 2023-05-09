import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {AppBar} from "@react-native-material/core";
import IWsTimerResponse from "./components/models/IWsTimerResponse";
import Api from "./components/api/Api";

export default function App() {

    const [content, setContent] = useState<string>("time is here");

    useEffect(() => {
        Api.open('timer/start', {message: 'start'}, (data: IWsTimerResponse) => {
            if (data.countdown > 0) {
                const minutes = Math.floor(data.countdown / 60);
                const seconds = data.countdown % 60;
                setContent(`${minutes} minutes ${seconds} seconds left`);
            } else {
                setContent(`Nothing left`);
            }
        });
    }, []);

    return (
        <View style={{width: '100%'}}>
            <AppBar
                title="Countdown"
                style={{width: "100%"}}
            />
            <View style={viewStyles.container}>
                <Text style={{fontSize: 32}}>{content}</Text>
            </View>
        </View>
    );
}

const viewStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
