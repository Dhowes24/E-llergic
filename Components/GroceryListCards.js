import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TouchableHighlight
} from "react-native";


import {Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon} from "native-base";

class GroceryListCards extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        name: this.props.ListName,

        ellipseToggle: false,
    };


    render() {

        return (
            <Card transparent={true}>

                <CardItem style={styles.CardStyle}>
                    <Text style={styles.nameText}>
                        {this.state.name}
                    </Text>

                    <TouchableHighlight
                        onPress={() => {
                            this.setState({ellipseToggle: !this.state.ellipseToggle})
                        }}
                        style={styles.ellipseStyle}
                        underlayColor={'white'}>
                        <Image source={this.state.ellipseToggle ?
                            require('../assets/HollowElipses-E-llergic.png')
                            : require('../assets/Elipses-E-llergic.png')}
                               style={styles.ellipseImageStyle}/>
                    </TouchableHighlight>


                    <TouchableOpacity>
                        <Text style={styles.EditTextStyle}>
                            Edit
                        </Text>
                    </TouchableOpacity>

                </CardItem>

                {this.state.ellipseToggle && <CardItem style={styles.CardStyle}>
                    <Text>
                        List
                    </Text>
                </CardItem>}

                <CardItem>
                    <Image source={require('../assets/DarkSinnyBar-E-llergic.png')}
                           style={styles.barStyle}/>
                </CardItem>

            </Card>
        )
    }

}

export default GroceryListCards;

const styles = StyleSheet.create({

    CardStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    nameText: {
        color: '#b2d786',
        fontSize: 25,
    },
    ellipseStyle: {
        width: 50,
        height: 14,
    },
    downloadStyle:{
        width:25,
        height:25
    },
    barStyle: {
        height: '30%',
        width: '99%',
        marginBottom: '3%',
        justifyContent: 'center',
    },
    ellipseImageStyle: {
        width: '100%',
        height: '100%'
    },
    downloadImageStyle:{
        width: '100%',
        height: '100%'
    },
    downloadWatchlist: {
        color: '#3b84db',
        fontSize: 15,
    },
    EditTextStyle:{
        color:'#3b84db',
        fontSize: 25
    }

});