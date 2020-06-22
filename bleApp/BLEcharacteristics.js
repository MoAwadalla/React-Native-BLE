import React, {useState} from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, View, FlatList, StyleSheet, Text , TextInput,Button} from 'react-native';
import { writeCharacteristic} from './actions';
import DataActivityIndicator from './DataActivityIndicator';
import BLEReadCharacteristic from './BLEReadCharacteristic';
import BLEWriteCharacteristic from './BLEWriteCharacteristic';

function BLEcharacteristic(ReduxStore) {
    if(ReduxStore.selectedCharacteristic.isReadable){
        return(<BLEReadCharacteristic />);
    } else if (ReduxStore.selectedCharacteristic.isWriteableWithResponse || ReduxStore.selectedCharacteristic.isWriteableWithoutRepsonse){
        return(<BLEWriteCharacteristic />);
    }
}

function mapStateToProps(state){
    return{
        selectedCharacteristic: state.BLes.selectedCharacteristic,
    };
}

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps,mapDispatchToProps,null,{forwardRef: true}) (BLEcharacteristic)