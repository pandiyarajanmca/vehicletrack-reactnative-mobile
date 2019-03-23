import React from 'react';
import { ScrollView, StyleSheet , Image} from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'Search',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
           <Image source={require('./../assets/images/icon.png')} style={styles.backgroundImage} />

        <ExpoLinksView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  container: {
    flex: 1,
    paddingTop: 15,  
    // backgroundColor: '#fff',
  },
 
});
