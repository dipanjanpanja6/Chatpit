import React from 'react'
const { Icon } = require("@ui-kitten/components");

export const PersonIcon = (props) => (
    <Icon {...props} name='person-outline' />
);

export const BellIcon = (props) => (
    <Icon {...props} name='bell-outline' />
);

export const EmailIcon = (props) => (
    <Icon {...props} name='email-outline' />
);
export const MenuIcon = (props) => (
    <Icon {...props} name='more-vertical' />
);
export const InfoIcon = (props) => (
    <Icon {...props} style= {{"height": 20, "marginHorizontal": 8, "tintColor": "#00f", "width": 20}} name='info' />
);
export const LogoutIcon = (props) => (
    <Icon {...props} name='log-out' />
);
export const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);
export const DownloadIcon = (props) => (
    <Icon {...props} name='download-outline' />
);
export const WifiIcon = (props) => (
    <Icon {...props} name='wifi' />
);
export const ClearIcon = (props) => {
    console.log(props);
return( 
    <Icon  {...props} style= {{"height": 20, "marginHorizontal": 8, "tintColor": "#F00", "width": 20}}  name='trash-2' />
);}
export const ReportIcon = (props) => (
    <Icon {...props} style= {{"height": 20, "marginHorizontal": 8, "tintColor": "#F00", "width": 20}}  name='alert-circle' />
);