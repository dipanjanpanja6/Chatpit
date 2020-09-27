import React from 'react'
import { Layout, TopNavigation, TopNavigationAction } from '@ui-kitten/components'
import AppBar from '../component/AppBar';
function Home(props) {
    const {navigation}=props;

    return (
        <Layout>
            <AppBar {...props}/>

        </Layout>
    )
}

export default Home
