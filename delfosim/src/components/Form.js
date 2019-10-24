import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

import { connect } from 'react-redux';

import { addDado, setDadoText } from '../actions';
import Input from '../components/Input';

class Form extends Component {
    onChangeText( text ) {
     this.props.dispatchSetDadoText( text );
    }

    onPress() {
       const { text } = this.props.dado;
       this.props.dispatchAddDado( text );       
    }

    render() {
        const { text } = this.props.dado;
        return(
            <View style={ styles.formContainer }>
                <View style={ styles.inputContainer }>
                    <Input 
                    onChangeText={ text => this.onChangeText(text) }
                    value={ text }                
                    />
                </View>

                <View style={ styles.buttonContainer }>
                    <TouchableOpacity 
                        style={ styles.button }
                        onPress={ () => this.onPress() }
                        title="add"
                    >

                        <Text style={ styles.buttonText }>ADD</Text>

                    </TouchableOpacity>
                </View>
               
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formContainer:{
        flexDirection: 'row',
        padding:5
    },
    inputContainer:{
        flex: 4
    },
    buttonContainer:{
        flex: 1
    },
    button:{
        height: 42,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    buttonText:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

const mapStateToProps = state => {
    return {
        dado : state.editingDado
    }
}

export default connect(
    mapStateToProps, 
    {
        dispatchAddDado: addDado,
        dispatchSetDadoText: setDadoText 

    })(Form);