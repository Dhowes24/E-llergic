import React, {Component} from "react";

import {
    View,
    Text,
    StyleSheet,
    Button,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
} from "react-native";

class AccountScreen extends Component {

    static navigationOptions = {
        header: null
    };

    state = {
    };

    render() {
        return (
            <ImageBackground source={require('../assets/AccountsBackground-E-llergic.png')}
                             style={{width: '100%', height: '100%'}}>

                {/* Header */}
                <View style={styles.headerStyle}>
                    <TouchableOpacity style={styles.leftNavigationArrow}
                                      onPress={()=>{this.props.navigation.navigate('ScannerScreen')}}
                    >
                        <Image source={require('../assets/BackArrow-E-llergic.png')} // List Button
                               style={styles.arrowStyle}/>
                        <Text style={styles.navigationText}> Scanner</Text>
                    </TouchableOpacity>

                    <Image source={require('../assets/AccountsIcon-E-llergic.png')} //Home Logo
                           style={styles.LogoStyle}/>

                </View>

                {/* Body */}

            </ImageBackground>
        )
    }
}


export default AccountScreen;


const styles = StyleSheet.create({
    //Header Styles
    headerStyle: {
        flexDirection: 'row',
    },
    leftNavigationArrow: {
        flexDirection: 'row',
        marginTop: '15%',
        marginLeft: '5%',
    },
    arrowStyle: {
        width: '20%',
        height: '7%',
    },
    navigationText: {
        fontSize: 20,
        color: 'white',
        marginTop: '-10%'
    },
    LogoStyle: {
        marginTop: '6%',
        marginLeft: '-2%',
        justifyContent: 'center',
        width: '17%',
        height: '100%'
    },

    //BodyStyles

});