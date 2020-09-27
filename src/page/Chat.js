import React from 'react';
import { Platform, BackHandler, Image, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View, VirtualizedList, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Button, Divider, Layout, TopNavigation, Text, Card, Input, RangeDatepicker, CalendarViewModes, List, ListItem, Icon, Avatar } from '@ui-kitten/components';
import AppBar from "../component/AppBar";
import { vw } from '../component/tools/responsive'
import { WifiIcon } from '../component/Icon/icons';
import FastImage from 'react-native-fast-image';
export const data = new Array(19).fill({
    title: 'Dipanjan',
    desc: 'Hello, how r u?'
});


const Chat = (props) => {
    const { navigation, route } = props
    const [value, setValue] = React.useState('');
    const [range, setRange] = React.useState({});

    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                Alert.alert(
                    'Exit App',
                    'Exiting the application?', [{
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel'
                    }, {
                        text: 'OK',
                        onPress: () => BackHandler.exitApp()
                    },], {
                    cancelable: false
                })
                return true;
            };

            if (Platform.OS == "android" && route.name === 'Chat') {
                BackHandler.addEventListener('hardwareBackPress', onBackPress);
            }

            // BackHandler.addEventListener('hardwareBackPress', onBackPress);

            return () =>
                BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        })
    );

    const navigateChatScreen = (id) => {
        navigation.navigate('ChatScreen', { id: 'test',userName:"Sumit" });
    };

    const RenderItem = ({ item, index }) => (
        <ListItem onPress={() => { navigateChatScreen(index) }} style={{ width: '100%' }}
            accessoryLeft={() => <Avatar {...{
                style: { width: 50, height: 50 },
                source: { uri: 'https://unsplash.it/50/50?image=1' },
                resizeMode: FastImage.resizeMode.contain
            }} ImageComponent={FastImage} progressiveRenderingEnabled
            />}
            accessoryRight={() => <View>
                <Text category='c2'>Last seen 01:32 PM</Text>
            </View>}
            title={() => <Text style={{ paddingLeft: 12, fontWeight: 'bold' }} category='h6'>{item.title}</Text>}
            description={() => <Text style={{ paddingLeft: 12 }} category='p1'>{item.desc}</Text>} />
    );


    return (
        <>
            {/* <View>
                <StatusBar hidden={false} />
            </View> */}
            <SafeAreaView style={{ flex: 1 }} >
                <AppBar {...props} />
                <List ItemSeparatorComponent={Divider}
                    style={styles.list}
                    data={data}
                    renderItem={RenderItem}
                />

            </SafeAreaView>
        </>)
}

const COLUMNS = 2;
const MARGIN = vw(1);
const SPACING = (COLUMNS + 1) / COLUMNS * MARGIN;
const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    layout: {
        backgroundColor: 'transparent',
        marginLeft: MARGIN,
        marginTop: MARGIN,
        width: vw(100) / COLUMNS - SPACING,
        height: 160,
        borderRadius: 20,
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 7,
    },
    subTitle: {
        textAlign: 'center',
        color: '#fff',
    },
    list: {
        width: '100%',
    }
});

export default Chat
