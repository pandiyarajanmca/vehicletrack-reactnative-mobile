import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet, Button,
    TextInput,
    headerTitle,
    TouchableOpacity,
    View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { SearchBar, Header } from 'react-native-elements';
import MapView from 'react-native-maps';
import '@expo/vector-icons';

const imageName = require("../assets/images/marker-green.png");


export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: 17.22,
            longitude: 76.22,
            error: null,
            search: '',
            marker: [
            {
                latlng: { latitude: 17.4254934, longitude: 78.448774 },
                title: 'dawdaw',
                description: 'sdad',
                type:'shop'
            },
            {
                latlng: { latitude: 17.67, longitude: 78.24 },
                title: 'dawvvccxdaw',
                description: 'sasd',
                type:'driving'
            }
            ]

        };

    }

    updateSearch = search => {
        this.setState({ search });
    };

    static navigationOptions = {
        header: null
        // title: null,
        // headerStyle: {
        //     backgroundColor: 'transparent'
        // },  
        // header: (
        //   <SearchBar lightTheme
        // //   inputStyle={{backgroundColor: 'white'}}
        //   containerStyle={{ borderWidth: 0, borderRadius: 5, marginLeft:10, marginRight:10, marginTop: 30}}
        //   placeholder="Enter the text"

        // //   icon={{ type: 'font-awesome', name: 'search' }}
        // //   placeholderTextColor={'#333333'}
        //   onChangeText={this.updateSearch}/>
        // ), 
    };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
        );
    }
    render() {

        return (
            <View style={styles.container}>
                <MapView
                    style={{ flex: 1 }}
                    region={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                    showsUserLocation={true}
                >
                  {this.state.marker.map(marker => (
                    <MapView.Marker
                        coordinate={marker.latlng}
                        title={marker.title}
                        description={marker.description}
                    >
                    if(marker.type=="driving") {
                    <Image
                    source={require('../assets/images/marker-green.png')}
                     />
                    }
                    </MapView.Marker>
                  ))}
                </MapView>
            </View>
        );

    }

}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

});


