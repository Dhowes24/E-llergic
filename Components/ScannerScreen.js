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

import {Camera, Permissions, BarCodeScanner} from 'expo';
import axios from 'axios';



//API KEY
const cloudVisionKey = '70fb1dd0ce8f2f717ee4c57adcd9833a3acd9859';

//ENDPOINT
const cloudvision = 'https://vision.googleapis.com/v1/images:annotate?key=' + cloudVisionKey;


class ScannerScreen extends Component {

    static navigationOptions = {
        header: null
    };

    state = {
        fontLoaded: false,
        Login: true,
        Phone: '',
        Password: '',
        User: '',

        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
    };

    async componentDidMount() {
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({hasCameraPermission: status === 'granted'});
    }

    render() {
        return (
            <ImageBackground source={require('../assets/MiddleBackground-E-llergic.png')}
                             style={{width: '100%', height: '100%'}}>
                {/*Header */}
                <View style={styles.headerStyle}>
                    <TouchableOpacity style={styles.leftNavigationArrow}
                                      onPress={() => {
                                          this.props.navigation.navigate('ListsScreen')
                                      }}
                    >
                        <Image source={require('../assets/BackArrow-E-llergic.png')} // List Button
                               style={styles.arrowStyle}/>
                        <Text style={styles.navigationText}> Lists</Text>
                    </TouchableOpacity>

                    <Image source={require('../assets/MainPageLogo-E-llergic.png')} //Home Logo
                           style={styles.LogoStyle}/>

                    <TouchableOpacity style={styles.rightNavigationArrow}
                                      onPress={() => {
                                          this.props.navigation.navigate('AccountScreen')
                                      }}
                    >
                        <Text style={styles.navigationText}> Account</Text>
                        <Image source={require('../assets/RightArrow-E-llergic.png')} //Account Button
                               style={styles.arrowStyle}/>
                    </TouchableOpacity>
                </View>

                {/*Preview Body*/}
                <View style={styles.containerStyle}>
                    {this.state.hasCameraPermission &&
                    <BarCodeScanner
                        onBarCodeScanned={this.handleBarCodeScanned}
                        style={styles.CameraStyle}
                    />}
                </View>
            </ImageBackground>
        )
    }

    handleBarCodeScanned = ({ type, data }) => {
         alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };
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
    containerStyle: {
        backgroundColor: 'white',
        width: '100%',
        height: '68%',
        top: '8%'
    },
    CameraStyle: {
        flex: 1,
    }

});