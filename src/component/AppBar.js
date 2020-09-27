import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Avatar, Divider, Icon, Layout, List, ListItem, MenuItem, OverflowMenu, Popover, Text, Tooltip, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { MenuIcon, BackIcon, InfoIcon, LogoutIcon, BellIcon } from './Icon/icons'
// import { data } from '../Page/Home/Home'


const AppBar = (props) => {
    const { navigation, route } = props
    const [menuVisible, setMenuVisible] = React.useState(false);
    const [bellVisible, setBellVisible] = React.useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    const toggleBell = () => {
        setBellVisible(!bellVisible);
    };

    const renderMenuAction = () => (
        <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
    );
    const renderBellAction = () => (<TopNavigationAction icon={BellIcon} onPress={toggleBell} />);

    const renderOverflowMenuAction = () => (
        <React.Fragment>
            <Popover
                anchor={renderBellAction}
                visible={bellVisible}
                onBackdropPress={toggleBell}>
                <Layout style={styles.content}>
                    <View >
                        <Text category='h6' style={{ fontWeight: 'bold', textAlign: 'center' }}>
                            Notification
                        </Text>
                        <Divider/>
                        <List ItemSeparatorComponent={Divider}
                            style={styles.list}
                            data={['data']}
                            renderItem={({ item, index }) => (
                                <ListItem style={{ minWidth: 240 }}
                                    // accessoryLeft={renderItemIcon}
                                    accessoryRight={() => <View>
                                        <Text >02:23 PM</Text>
                                    </View>}
                                    title={'item.title'} description={'item.desc'} />)} />
                    </View>
                </Layout>
            </Popover>
            <OverflowMenu
                anchor={renderMenuAction}
                visible={menuVisible}
                onBackdropPress={toggleMenu}>
                <MenuItem accessoryLeft={InfoIcon} onPress={() => { navigation.navigate('About'); toggleMenu() }} title='About' />
                {/* <MenuItem accessoryLeft={LogoutIcon} title='Logout' /> */}
            </OverflowMenu>
        </React.Fragment>
    );

    const renderTitle = (props) => (
        <View style={styles.titleContainer}>
            {/* <Avatar
                style={styles.logo}
                source={require('../assets/logo512.png')}
            /> */}
            <Text  {...props} category='h4' style={{ fontWeight: 'bold' }}>Chatpit</Text>
        </View>
    );
    const navigateBack = () => {
        navigation.goBack();
    };
    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
    );
    return (<>
        <TopNavigation title={renderTitle} subtitle={'Online'} accessoryRight={renderOverflowMenuAction} accessoryLeft={route.name === 'Chat' ? "" : BackAction} />
        <Divider />
    </>);
};

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        marginHorizontal: 16,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 4,
        paddingVertical: 8,
    },
    list: {
        width: '100%',
        maxHeight: 500
    }
});
export default AppBar