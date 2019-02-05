import React, {Component} from "react";

import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Button,
    ImageBackground,
    Image,
    TextInput,
    ActivityIndicator,
    TouchableOpacity,
} from "react-native";
import FriendCard from "./FriendCard";


class FriendsScreen extends Component {

    static navigationOptions = {
        header: null
    };

    state = {
        testFriendData:[{FriendName:'David Steinberg'},{FriendName:'Alex Sheer'},{FriendName:'Alexm Sheer'}]
    };

    renderFooter = () => {
        if (!this.state.loading) return null;
        return(
            <View>
                <ActivityIndicator animating size={"large"}/>
            </View>
        )
    };

    render() {
        return (
            <ImageBackground source={require('../assets/AccountsBackground-E-llergic.png')}
                             style={{width: '100%', height: '100%'}}>

                {/* Header */}
                <View style={styles.headerStyle}>
                    <TouchableOpacity style={styles.leftNavigationArrow}
                                      onPress={()=>{this.props.navigation.navigate('AccountScreen')}}
                    >
                        <Image source={require('../assets/BackArrow-E-llergic.png')} // List Button
                               style={styles.arrowStyle}/>
                        <Text style={styles.navigationText}> Accounts</Text>
                    </TouchableOpacity>

                    <Image source={require('../assets/FriendsLogo-E-llergic.png')} //Home Logo
                           style={styles.LogoStyle}/>

                </View>

                {/* Body1 */}

                <View style={styles.containerStyle}>
                    <Text style={styles.titleText}>
                        Friends
                    </Text>
                    <Image source={require('../assets/ThiccLiteBar-E-llergic.png')}
                           style={styles.titleBar}/>
                    <FlatList
                        data={this.state.testFriendData}
                        renderItem={({ item }) => (
                            <FriendCard FriendName={item.FriendName} /> //Add other data when database layout is figured out
                        )}
                        keyExtractor={item => item.FriendName}
                        ListFooterComponent={this.renderFooter()}>

                    </FlatList>
                </View>

                {/* Body2 */}
                <View style={styles.connectContainerStyle}>
                    <Text style={styles.connectTitleText}>
                        Add Friends
                    </Text>
                    <Image source={require('../assets/ThiccLiteBar-E-llergic.png')}
                           style={styles.titleBar}/>

                </View>

            </ImageBackground>
        )
    }
}


export default FriendsScreen;


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
        marginLeft:'-4%',
        justifyContent: 'center',
        width: '24%',
        height: '90%',
        flex:0
    },

    //BodyStyles
    containerStyle:{
        height:'50%',
        width:'95%',
        backgroundColor:'white',
        marginTop:'10%',
        marginLeft:'2.5%',
        marginRight:'2.5%',
        marginBottom: '3%',
    },
    connectContainerStyle:{
        height:'30%',
        width:'95%',
        backgroundColor:'white',
        marginLeft:'2.5%',
        marginRight:'2.5%',
        marginBottom: '3%',
    },
    titleText:{
        color: '#b2d786',
        fontSize: 30,
        marginTop:'4%',
        alignSelf:'center'

    },
    titleBar:{
        marginLeft:'3.5%',
        marginRight:'3.5%',
        marginTop:'2%',
        width:'93%',
        height:'2%',
        marginBottom: '7%',
    },
    connectTitleText:{
        color: '#88c540',
        fontSize: 25,
        marginTop:'7%',
        marginLeft:'7%'

    },
});