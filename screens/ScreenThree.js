import React from 'react';
import { View, StyleSheet,Button,SafeAreaView,Text } from 'react-native';

import awsConfig from '../src/aws-exports';
import { listLiveStreams } from '../src/graphql/queries';
import Amplify from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify';
Amplify.configure(awsConfig);

export default class ScreenTwo extends React.Component {
    state = { streams: [] };
  static navigationOptions = {

  };
  async componentDidMount() {
    try {
      const streamsData = await API.graphql(graphqlOperation(listLiveStreams))
      console.log('restaurantData:', streamsData.data.listLiveStreams.items[0].playbackID)
      this.setState({
        streams: streamsData.data.listLiveStreams.items
      })
    } catch (err) {
      console.log('error fetching streams...', err)
    }
  }
  render() {
    var publish="off";
    return (
      <View style={styles.container}>
         <SafeAreaView>
        <Text style={styles.titleStyle}>Streams</Text>
        <View>
        {
          this.state.streams.map((y) => {
            return (
              <View> 
                <View style={styles.rowContainer}>
                  <Text style={styles.anchorStyle}
                      onPress={() => 
                        console.log("")
                      }>
                        {y.playbackID}
                  </Text>
                </View>
                <Text>
                  {"\n"}
                </Text>
              </View>
            );
          })
        }
  
        </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft:10,
    paddingTop:30
  },
  anchorStyle:{
      color:"blue"
  },
  titleStyle:{
    fontSize:30
  }
});