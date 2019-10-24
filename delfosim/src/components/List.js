import React from 'react';

import { View } from 'react-native';
import { connect } from 'react-redux';

import Grafico from './Grafico';

const List = ({ dados }) => (
    <View>
        { dados.map(dado => <Grafico key={dado.id} valor={dado.text} />) } 
    </View>

       
);

const mapStateToProps = state => {
    const { dados } =  state;
    return { dados };
}


export default connect(mapStateToProps)(List);