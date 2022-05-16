import React from 'react';
import {Button} from 'react-native';

const FetchLocation = props => {
    
    return(
        <Button onPress={props.onGetLocation} title="Log!" color="#46A4FB" />
    );
};

export default FetchLocation;