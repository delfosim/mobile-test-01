import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ onChangeText, value }) => (
    <TextInput
        style={ styles.input }
        onChangeText={ onChangeText }
        value={ value }
        underlineColorAndroid="#ccc"
        placeholder="Ex: 10;20;30;40;50"
    />
);

const styles = StyleSheet.create({
    input:{
        paddingLeft: 15,
        paddingBottom: 15,
    }
});

export default Input;

