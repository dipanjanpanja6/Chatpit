import { Avatar, Button, Divider, Icon, Input, Layout, MenuItem, OverflowMenu, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';
import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { SafeAreaView } from 'react-native-safe-area-context'
import LeftMessageBox from '../component/Chat/LeftmessageBox';
import RightMessageBox from '../component/Chat/RightmessageBox';
import { BackIcon, InfoIcon, MenuIcon, ClearIcon, ReportIcon } from '../component/Icon/icons';
import { vw } from '../component/tools/responsive';

function ChatScreen(props) {
    const { navigation,route } = props;
    const {userName,id}=route.params;
    console.log(route);
    const [menuVisible, setMenuVisible] = React.useState(false);
    const [msg, setMsg] = React.useState('');
    // const {id}=navigation.useParams()
    const navigateBack = () => {
        navigation.goBack();
    };
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    const renderMenuAction = () => (
        <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
    );
    const moreAction = () => (<>
        <OverflowMenu
            anchor={renderMenuAction}
            visible={menuVisible}
            onBackdropPress={toggleMenu}>
            <MenuItem accessoryLeft={InfoIcon} onPress={() => { navigation.navigate('About'); toggleMenu() }} title='About' />
            <MenuItem accessoryLeft={ClearIcon} title='Clear Chat' />
            <MenuItem accessoryLeft={ReportIcon} title='Report' />
        </OverflowMenu>
    </>);
    const BackAction = () => (<>
        <View style={{ alignSelf: 'center' }}>
            <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
        </View>
        <Avatar {...{
            style: { width: 50, height: 50 },
            source: { uri: 'https://unsplash.it/50/50?image=1' },
            resizeMode: FastImage.resizeMode.contain
        }} ImageComponent={FastImage} progressiveRenderingEnabled
        />
    </>);
    const send = () => {

    }




    return (<>
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title={() => <Text style={{ paddingLeft: 12, fontWeight: 'bold' }} category='h6'>{userName}</Text>}
                subtitle={() => <Text style={{ paddingLeft: 12 }} category='p1'>{"Online"}</Text>} accessoryLeft={BackAction}
                accessoryRight={moreAction} />
            <Divider />
            <ImageBackground style={styles.container} source={require('../assets/chat-bg.jpg')} >


                <Layout level={'3'} style={styles.input}>
                    <Input
                        placeholder='Massage...'
                        value={msg}
                        onChangeText={nextValue => setMsg(nextValue)}
                        accessoryRight={(props) => <TouchableWithoutFeedback onPress={send}>
                            <Icon {...props} name={'paper-plane'} />
                        </TouchableWithoutFeedback>}
                        accessoryLeft={(props) => <TouchableWithoutFeedback onPress={send}>
                            <Icon {...props} name={'plus-square'} />
                        </TouchableWithoutFeedback>}
                        style={{ borderRadius: 20 }}
                    />
                </Layout>
                <Layout style={styles.body}>




                    <RightMessageBox msg='Hi, whats up bro?' time='02:03 PM' status='seen' />
                    <RightMessageBox msg='fine, what about u?' time='02:03 PM'  />
                    <LeftMessageBox msg='' time='02:03 PM' status='unseen' />
                </Layout>
            </ImageBackground>
        </SafeAreaView>
    </>
    )
}
const styles = StyleSheet.create({
    input: {
        flexWrap: 'wrap',
        flexDirection: 'column',
        paddingTop: 9,
        backgroundColor: "transparent"
        // width:50
    },
    container: {
        padding: 5,
        flex: 1,
        // backgroundColor: '#ac1',
        flexDirection: 'column-reverse',
        // resizeMode: "cover",
        // justifyContent: "center"
    },
    body: {
        // flex: 0,
        // resizeMode: "cover",
        // justifyContent: "center",
        // flexDirection: 'row',
        // flexWrap:'wrap-reverse',
        backgroundColor: 'transparent',
        // marginVertical:12
    }
})

export default ChatScreen
