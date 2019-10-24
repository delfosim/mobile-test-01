import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Modal, Alert } from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux'

import Form from '../components/Form';
import List from '../components/List';

import rootReducer from '../reducers';
import devToolsEnchacer from 'remote-redux-devtools';

const store = createStore( rootReducer, devToolsEnchacer() );


export default class Dashboard extends Component {
  static navigationOptions ={
    title: 'Dashboard',
  }

  state = {
    modalVisible: false,
  };

  setModalVisible( visible ){
    this.setState({ modalVisible: visible });
  };

  render(){
    return ( 
      <Provider store={ store }>
        <View style={ styles.container }>
          <View  style={ styles.ComponetsContainer } >

            <Modal
              animationType="slide"
              transparent={ true }
              visible={ this.state.modalVisible }
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>

            <View style={ styles.containerModal }>
              <View style={ styles.modal }>
                <Form />
                  <TouchableOpacity
                    onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <Text style={ styles.text }> Close Modal </Text>
                    </TouchableOpacity>
              </View>
            </View>

            </Modal>

            <ScrollView>
              <List />
            </ScrollView>
           
          </View>

          <View style={ styles.modalContainer }>
              <TouchableOpacity
                  style={ styles.button }
                  onPress={() => {
                      this.setModalVisible(true);
                  }}>
                  <Text style={ styles.buttonText }> + </Text>
              </TouchableOpacity>
          </View>   
                  
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  ComponetsContainer:{
    flex:8,
    padding: 10
  },
  modalContainer:{
    flex:1,
    height:80,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
    container:{
        paddingTop: 20,
        flex:1,
        flexDirection:'column'
    },
    button:{
      height: 60,
      width: 60,
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      margin:10
    },
  buttonText:{
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30,
  },
  text:{
    fontSize:16,
    color: "#c12",

  },
  modal: {    
    height: 80,    
    alignSelf: 'center',            
    backgroundColor:'#fff',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 20,
    justifyContent: 'center',
  },
});
