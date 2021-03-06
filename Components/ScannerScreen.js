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
import WatchListScreen from "./WatchListScreen";



//API KEY
const cloudVisionKey = '70fb1dd0ce8f2f717ee4c57adcd9833a3acd9859';

//ENDPOINT
const cloudvision = 'https://vision.googleapis.com/v1/images:annotate?key=' + cloudVisionKey;

//Nutrionix APP ID
const appID = 'e8fe8164';

//Nutritionix Key
const applicationKey = '170920103c84249a7b142300794e3058';

//Current List of Product data
let ingredientList = [];

//Allergins to look for list
let allerginsList = [];




class ScannerScreen extends Component {

    static navigationOptions = {
        header: null
    };

    state = {
        warningNeeded:false,

        allerginsFound:[],

        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
    };

    async componentDidMount() {
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({hasCameraPermission: status === 'granted'});
        //For each active list in WatchListScreen, add all non repetitive allergins to 'allerginsList'
        //
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
                <TouchableOpacity
                    onPress={() => {this.handleBarCodeScanned()}}>
                    <Image source={require('../assets/MainPageLogo-E-llergic.png')} //Home Logo
                           style={styles.LogoStyle}/>
                </TouchableOpacity>

            </ImageBackground>
        )
    }

    handleBarCodeScanned = () => {
         //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        fetch("https://api.nutritionix.com/v1_1/item?upc=52200004265&appId="+appID+"&appKey="+applicationKey)
            .then((response) => response.json())
                .then((responseJson) => {
                    alert(responseJson.nf_ingredient_statement);
                    this.handleIngredientData(responseJson.nf_ingredient_statement);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    handleIngredientData = (data) =>{
        ingredientList = data.split(',');
        alert(ingredientList.length);
        for (let i=0; i<ingredientList.length; i++)
            for (let a =0; a<allerginsList.length; a++){
                if(ingredientList[i].includes(allerginsList[a])){
                    this.setState({warningNeeded:true, allerginsFound:this.state.allerginsFound.push(allerginsList[a])});
                }
            }
        //Function that calls a modal depedending on wether 'warningNeeded' is Positive or False
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