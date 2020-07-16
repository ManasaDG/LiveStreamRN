import React from 'react';
import { View, StyleSheet,Button,SafeAreaView } from 'react-native';

import ScreenName from '../components/ScreenName.js'
import {  NodeCameraView } from 'react-native-nodemediaclient';

export default class ScreenTwo extends React.Component {

  static navigationOptions = {

  };
  
  render() {
    var publish="off";
    return (
      <View style={styles.container}>
         <SafeAreaView>
         <NodeCameraView 
            style={{ height: 400 ,width:1000}}
            ref={(vb) => { this.vb = vb }}
            outputUrl = {"rtmp://global-live.mux.com:5222/app/7b73850b-42d5-4b01-a304-06593f89145b"}
            camera={{ cameraId: 1, cameraFrontMirror: true }}
            audio={{ bitrate: 32000, profile: 1, samplerate: 44100 }}
            video={{ preset: 12, bitrate: 400000, profile: 1, fps: 15, videoFrontMirror: false }}
            autopreview={true}
            />
            <Button
            onPress={() => {
                console.log(publish);
                if(publish=="off"){
                this.vb.start();
                publish="on";
                }
                else if(publish=="on"){
                this.vb.stop();
                publish="off";
                }
                
                }}
                //this.vb.stop()}}
            title="Publish"
            color="#841584"
            />
            </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});