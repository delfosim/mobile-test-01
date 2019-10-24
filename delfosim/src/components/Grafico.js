import React  from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import { Card, CardItem, Text, Body } from 'native-base';
import { Icon } from 'react-native-elements';

import PureChart from 'react-native-pure-chart';


function Grafico ({ valor }){

    let data = valor.split(";").map(Number);
        return(            
            <Card style={styles.cardContainer}>
                <CardItem style={{flex:1, flexDirection:'row'   }} header >
                    <View style={{flex:4}}>
                        <Text>Grafico</Text>
                    </View>
                    <View style={{flex:1}}>
                        <TouchableOpacity>
                            <Icon                                    
                            name='ellipsis-v'
                            type='font-awesome'
                            color='#000'
                            onPress={() => console.log('hello')} />
                        </TouchableOpacity>  
                    </View>
                                    
                </CardItem>
                <CardItem style={{width:300}}>
                    <Body >
                        <PureChart 
                            width={'100%'}
                            height={100} 
                            data={data} 
                            type='line' />
                    </Body>
                </CardItem>
            </Card>
    );       
};


const styles = StyleSheet.create({
    cardContainer:{
        marginBottom:20,

    }
});

export default Grafico;