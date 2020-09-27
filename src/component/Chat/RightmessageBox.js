import React from 'react'
import { Icon, Layout, Text } from '@ui-kitten/components'
import PropTypes from 'prop-types'

function RightMessageBox(props) {
    return (
        <Layout style={{
            backgroundColor: 'transparent',
            flexWrap: 'wrap',
            marginVertical: 3,
            justifyContent: 'center'

        }}>

            <Layout style={{
                paddingHorizontal: 12, paddingVertical: 7, borderRadius: 20, borderBottomLeftRadius: 0,
                alignItems: 'flex-end',
            }}>
                <Text style={{ backgroundColor: 'transparent' }}>{props.msg}</Text>
                {/* <Layout style={{ flexDirection: 'row',alignItems:'center',justifyContent:'flex-start', backgroundColor: 'transparent' }}> */}
                    <Text category='c2' style={{ color: '#777', paddingRight: 12,alignSelf:'flex-start', }}>{props.time}</Text>
                    {/* <Icon style={{ width: 20, height: 20, tintColor: props.status == 'seen' ? "#0f0" : "#777" }} name={props.status == 'seen' ? 'done-all-outline' : props.status == 'unseen' ? 'checkmark-outline' : 'clock-outline'} /> */}
                {/* </Layout> */}
            </Layout>
        </Layout>

    )
}
RightMessageBox.prototypes = {
    time: PropTypes.string.isRequired,
    msg: PropTypes.string.isRequired,

}
export default RightMessageBox
