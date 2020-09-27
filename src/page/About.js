import { Divider, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import AppBar from '../component/AppBar'
import { BackIcon } from '../component/Icon/icons';

function About(props) {
    const { navigation } = props;
    const navigateBack = () => {
        navigation.goBack();
    };

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
    );
    return (<>
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='About' accessoryLeft={BackAction} />
            <Divider/>
            <Layout style={{ padding: 12, flex: 1 }}>
                <Text category='h4' style={{ fontWeight: "bold" }}>About</Text>
                <Text category='s1' >We are very minded people</Text>
                <Text category='s1' >contact</Text>
            </Layout>
        </SafeAreaView>
    </>)
}

export default About
