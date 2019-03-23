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
                    imgSrc: require('../assets/images/map-eye.png')
                },
                {
                    latlng: { latitude: 17.47, longitude: 78.34 },
                    title: 'dawvvccxdaw',
                    description: 'sasd',
                    imgSrc: require('../assets/images/map-home.png')
                },
                {
                    latlng: { latitude: 17.54254934, longitude: 78.4448774 },
                    title: 'dawdaw',
                    description: 'sdad',
                    imgSrc: require('../assets/images/map-like.png')

                },
                {
                    latlng: { latitude: 17.437, longitude: 78.434 },
                    title: 'dawvvccxdaw',
                    description: 'sasd',
                    imgSrc: require('../assets/images/map-camera.png')
                },
                {
                    latlng: { latitude: 17.3347, longitude: 78.3334 },
                    title: 'dawvvccxdaw',
                    description: 'sasd',
                    imgSrc: require('../assets/images/map-home.png')
                },
                {
                    latlng: { latitude: 17.4934, longitude: 78.48774 },
                    title: 'dawdaw',
                    description: 'sdad',
                    imgSrc: require('../assets/images/map-eye.png')
                }
            ]

        };

    }

    updateSearch = search => {
        this.setState({ search });
    };

    static navigationOptions = {
        title: null,
        header: (
          <SearchBar lightTheme
        //   inputStyle={{backgroundColor: 'white'}}
          containerStyle={{ borderWidth: 0, borderRadius: 5, marginLeft:10, marginRight:10, marginTop: 30, marginBottom: 10}}
          placeholder="Search"

        //   icon={{ type: 'font-awesome', name: 'search' }}
        //   placeholderTextColor={'#333333'}
          onChangeText={this.updateSearch}/>
        ), 
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

                            <Image style={{ height: 40, width: 40 }}
                                source={marker.imgSrc}
                            />

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


