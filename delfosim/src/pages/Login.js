import React from 'react';
import {    
     View,
     Text,
     Image, 
     StyleSheet, 
     TextInput, 
     TouchableOpacity,
     KeyboardAvoidingView, 
} from 'react-native';

import logo from '../imgs/delfos.png';

export default function Login({ navigation }) {
    handleLogin = () => {
        navigation.navigate("Dashboard");
    }

    email = () => alert('Password Recovery Process');
      
  return (
    <KeyboardAvoidingView behavior='padding' style={ styles.container }>
        <Image style={{ width:250, height:150 }} source={ logo } />

        <View style={ styles.form }>
            <Text style={ styles.label }> E-MAIL </Text>
            <TextInput
                style={ styles.input }
                placeholder="Seu e-mail"
                placeholderTextColor='#999'
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={ false }
            />

            <Text style={ styles.label }>PASSWORD</Text>
            <TextInput
                style={ styles.input }
                placeholder="Seu password"
                placeholderTextColor='#999'
                autoCapitalize='none'
                autoCorrect={ false }
                secureTextEntry={ true }                
            />

            <TouchableOpacity onPress={ this.handleLogin } style={ styles.button }>
                <Text style={ styles.buttonText }> Login </Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.recovery } onPress={ email }>
                <Text style={ styles.txtRecovery }> Forgot password </Text>
            </TouchableOpacity>
        </View>       
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    form:{
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop:10
    },
    label:{
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },
    input:{
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },
    button:{
        height: 42,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        
    },
    buttonText:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    recovery:{
        alignItems:'center',
        justifyContent: 'center',
        padding: 10
    },
    txtRecovery:{
        color:'#ccc'
    }
});
