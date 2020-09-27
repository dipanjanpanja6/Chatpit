import { Divider, Layout, List, ListItem, Text, Toggle, TopNavigation, TopNavigationAction } from '@ui-kitten/components'
import React from 'react'
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackIcon } from '../component/Icon/icons';

function Setting(props) {

    const { navigation } = props
    const navigateBack = () => {
        navigation.goBack();
    };
    const BackAction = () => (<View style={{ alignSelf: 'center' }}>
        <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
    </View>)
    const [activeChecked, setActiveChecked] = React.useState(true);

    const onActiveCheckedChange = (isChecked) => {
        setActiveChecked(isChecked);
    };
    return (<Layout style={{flex:1}}>
        <SafeAreaView >
            <TopNavigation title={() => <Text style={{ paddingLeft: 12, fontWeight: 'bold' }}
                category='h4'>{"Setting"}</Text>}
                accessoryLeft={BackAction}
            />
            <Layout style={styles.container} level='1'>
                <Divider />
                <ListItem style={styles.ListItem}
                    disabled
                    // accessoryLeft={renderItemIcon}
                    accessoryRight={() => <View>
                        <Toggle disabled
                            style={styles.toggle}
                            checked={activeChecked}
                            onChange={onActiveCheckedChange} />
                    </View>}
                    title={!activeChecked ? 'Use Dark Mode' : "Use Light Mode"} description='Theme change' />
                <Divider />
                <ListItem style={styles.ListItem}
                    disabled
                    // accessoryLeft={renderItemIcon}
                    accessoryRight={() => <View>
                        <Toggle disabled
                            style={styles.toggle}
                            checked={activeChecked}
                            onChange={onActiveCheckedChange} />
                    </View>}
                    title={!activeChecked ? 'Use Dark Mode' : "Use Light Mode"} description='Theme change' />

            </Layout>
        </SafeAreaView>
    </Layout>
    )
}
const styles = StyleSheet.create({
    container: {
        // flexDirection: 'column',
        // flexWrap: 'wrap',

    },
    toggle: {
        margin: 2,
    },
    ListItem: {
        // flex: 1
    }
});

export default Setting
