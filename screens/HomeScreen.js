import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,  Button,
  TextInput,
  headerTitle,
  TouchableOpacity,
  View,  
} from 'react-native';
import { WebBrowser } from 'expo';
import { SearchBar, Header } from  'react-native-elements';
import MapView from 'react-native-maps';
import '@expo/vector-icons';  



export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error:null,
      search: '',
    };
  
  }
  updateSearch = search => {
    this.setState({ search });
  };

  static navigationOptions = {
    title: 'null',  
    header: (
      <SearchBar lightTheme
      inputStyle={{backgroundColor: 'white'}}
      containerStyle={{backgroundColor: 'white', borderWidth: 0, borderRadius: 5, marginLeft:10, marginRight:10, marginTop: 30}}
      placeholder="Enter the placename"
 
      icon={{ type: 'font-awesome', name: 'search' }}
      placeholderTextColor={'#333333'}
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
        style={{flex: 1}}
        region={{
          latitude:  this.state.latitude,
          longitude:  this.state.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        showsUserLocation={true}
      />
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


