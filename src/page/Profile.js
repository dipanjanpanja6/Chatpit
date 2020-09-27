import React from 'react';
import { ImageBackground, SafeAreaView, Settings, StyleSheet, View } from 'react-native';
import { Avatar, Button, Divider, Icon, Layout, List, ListItem, Tab, TabBar, TabView, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import AppBar from "../component/AppBar";
import { BellIcon, EmailIcon, PersonIcon } from '../component/Icon/icons';
import { ScrollView } from 'react-native-gesture-handler';

// const useTabBarState = (initialState = 0) => {
//   const [selectedIndex, setSelectedIndex] = React.useState(initialState);
//   return { selectedIndex, onSelect: setSelectedIndex };
// };
const About = (props) => {
    const { navigation } = props
    console.log(navigation);
    // const bottomState = useTabBarState();
    const listData = [
        { name: 'Settings' }
    ]
    const ListNavigator = (id) => {
        navigation.navigate(id)
    }

    return (<>
        <AppBar {...props} />
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <Layout style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <View style={{ width: '100%', height: 150, backgroundColor: '#ff0' }} />
                    <Avatar size='giant' style={styles.avatar}
                        source={require('../assets/logo512.png')}
                        ImageComponent={ImageBackground}
                    />
                    <View style={{ marginTop: 12, marginBottom: 12 }}>
                        <Text category='h5' style={{ fontWeight: 'bold' }}>
                            User One
                        </Text>
                    </View>

                    <Divider />
                    <ListItem style={styles.listItem} title={() => <Text category='s1'>Change User Information</Text>} />
                    <Divider />
                    <ListItem onPress={() => ListNavigator('Setting')} style={styles.listItem} title={() => <Text category='s1'>Settings</Text>} />
                    <Divider />
                    <ListItem onPress={() => ListNavigator('About')} style={styles.listItem} title={() => <Text category='s1'>About</Text>} />
                    <Divider />
                    <ListItem style={styles.listItem} title={() => <Text category='s1'>Feedback</Text>} />
                    <Divider />
                    <ListItem style={styles.listItem} title={() => <Text category='s1'>Log out</Text>} />

                    {/* </View> */}
                </Layout>
            </ScrollView>
        </SafeAreaView>
    </>);
};
const styles = StyleSheet.create({
    avatar: {
        marginTop: -65,
        width: 150,
        height: 150
    },
    tabContainer: {
        height: 64,
        alignItems: 'center',
        justifyContent: 'center',
    },
    listItem: {
        width: '100%'
    }
})
export default About