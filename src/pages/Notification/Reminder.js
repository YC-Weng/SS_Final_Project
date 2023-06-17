import React, {useState, Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

const NotificationList = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        sport: "羽球",
        Approved: "同意",
        time: "17:00",
        who: "Brandon",
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        sport: "籃球",
        Approved: "婉拒",
        time: "19:30",
        who: "Peter",
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        sport: "羽球",
        Approved: "同意",
        time: "9:30",
        who: "Joyce",
    }
];

const NotificationItems = ({ sport, who, time }) => {
    if (who == "Brandon") return (
        <View style={styles.NotificationContainer}>
            <Image style={styles.sportIcon} source={require("../../images/badminton.png")} alignSelf='center'></Image>
            <View style={styles.informationContainer} alignSelf='center'>
                <Text style={styles.UpperPart}>於今天{time}開始</Text>
                <View style={styles.LowerPart}>
                    <Text style={{flex: 1}}>
                        {sport}
                    </Text>
                    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}>
                            <Image source={require('../../images/DetailsButton.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
            <Image style={styles.Avatar} source={require("../../images/Brandon.png")}></Image>
        </View>
    );
    else if (who == "Peter") return (
        <View style={styles.NotificationContainer}>
            <Image style={styles.sportIcon} source={require("../../images/basketball.png")} alignSelf='center'></Image>
            <View style={styles.informationContainer} alignSelf='center'>
                <Text style={styles.UpperPart}>於今天{time}開始</Text>
                <View style={styles.LowerPart}>
                    <Text style={{flex: 1}}>
                        {sport}
                    </Text>
                    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}>
                            <Image source={require('../../images/DetailsButton.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
            <Image style={styles.Avatar} source={require("../../images/Peter.png")}></Image>
        </View>
    );
    else if (who == "Joyce") return (
        <View style={styles.NotificationContainer}>
            <Image style={styles.sportIcon} source={require("../../images/badminton.png")} alignSelf='center'></Image>
            <View style={styles.informationContainer} alignSelf='center'>
                <Text style={styles.UpperPart}>於明天{time}開始</Text>
                <View style={styles.LowerPart}>
                    <Text style={{flex: 1}}>
                        {sport}
                    </Text>
                    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}>
                            <Image source={require('../../images/DetailsButton.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
            <Image style={styles.Avatar} source={require("../../images/Joyce.png")}></Image>
        </View>
    );
    else return (<View></View>);
}

const ReminderScreen = () => {
    console.log('This is Reminder');
    return (
        <View style={styles.root}>
            <SafeAreaView style={styles.container}>
            <View style={{ height: 450, backgroundColor: '#FFF2E2' }}>
                <FlatList
                    nestedScrollEnabled={true}
                    data={NotificationList}
                    renderItem={({ item }) => { return <NotificationItems sport={item.sport} time={item.time} who={item.who} />; }}
                    />
            </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0
    },
    UpperPart: {
        fontSize: 14,
    },
    LowerPart: {
        flexDirection: 'row',
        fontSize: 13,
        color: 'grey'
    },
    sportIcon: {
        width: 50,
        height: 50,
        marginLeft: 5,
        flex: 1
    },
    NotificationContainer: {
        alignSelf: 'center',
        width: 360,
        flex: 3,
        flexDirection: 'row',
        paddingVertical: 0,
        borderColor: '#CAC4D0',
        borderWidth: 0.8,
        borderRadius: 10,
    },
    informationContainer: {
        flexDirection: 'column',
        marginLeft: 5,
        flex: 4
    },
    Avatar: {
        alignSelf: 'flex-end'
    }
})

export default ReminderScreen;