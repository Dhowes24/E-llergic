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

class ScannerScreen extends Component {

    static navigationOptions = {
        header: null
    };

    state = {
        fontLoaded: false,
        Login: true,
        Phone: '',
        Password: '',
        User: ''
    };

    render() {
        return (
            <ImageBackground source={require('../assets/MiddleBackground-E-llergic.png')}
                             style={{width: '100%', height: '100%'}}>
                {/*Header */}
                <View style={styles.headerStyle}>
                        <TouchableOpacity style={styles.leftNavigationArrow}
                                          onPress={()=>{this.props.navigation.navigate('ListsScreen')}}
                        >
                            <Image source={require('../assets/BackArrow-E-llergic.png')} // List Button
                                   style={styles.arrowStyle}/>
                            <Text style={styles.navigationText}> Lists</Text>
                        </TouchableOpacity>

                    <Image source={require('../assets/MainPageLogo-E-llergic.png')} //Home Logo
                           style={styles.LogoStyle}/>

                        <TouchableOpacity style={styles.rightNavigationArrow}
                                          onPress={()=>{this.props.navigation.navigate('AccountScreen')}}
                        >
                            <Text style={styles.navigationText}> Account</Text>
                            <Image source={require('../assets/RightArrow-E-llergic.png')} //Account Button
                                   style={styles.arrowStyle}/>
                        </TouchableOpacity>
                </View>

                {/*Preview Body*/}
                <View style={styles.containerStyle}>

                </View>
            </ImageBackground>
        )
    }
}


export default ScannerScreen;

const styles = StyleSheet.create({
    //Header Styles
    headerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftNavigationArrow: {
        flexDirection: 'row',
        marginTop: '15%',
        marginLeft: '2%',
    },
    rightNavigationArrow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: '15%',
        marginRight: '12%',
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
        marginLeft: '10%',
        justifyContent: 'center',
        width: '17%',
        height: '100%'
    },

    //Body Styles
    containerStyle:{
        backgroundColor:'white',
        width:'100%',
        height:'68%',
        marginTop: '8%'
    }

});