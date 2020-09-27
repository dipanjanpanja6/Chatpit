import React from 'react'
import { Icon, Layout, Text } from '@ui-kitten/components'
import PropTypes from 'prop-types'
function LeftMessageBox(props) {
    return (
        <Layout style={{
            backgroundColor: 'transparent',
            flexWrap: 'wrap-reverse',
            marginVertical: 3,
            justifyContent: 'center'


        }}>
            <Layout level='4' style={{
                alignItems: 'flex-end',
                paddingHorizontal: 12, paddingVertical: 7,
                borderRadius: 20,
                borderBottomRightRadius: 0,
            }}>
                <Text >{props.msg}</Text>
                <Layout style={{ flexDirection: 'row',alignItems:'center',backgroundColor:'transparent' }}>
                    <Text category='c2' style={{ color: '#777', paddingRight: 12 }}>{props.time}</Text>
                    <Icon style={{ width: 20, height: 20, tintColor: props.status=='seen'?"#0f0":"#777" }} name={props.status=='seen'?'done-all-outline':props.status=='unseen'?'checkmark-outline':'clock-outline'} />
                </Layout>
            </Layout>
        </Layout>

    )
}
LeftMessageBox.prototypes={
    time:PropTypes.string.isRequired,
    msg:PropTypes.string.isRequired,

}
export default LeftMessageBox
