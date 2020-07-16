import React,{ Component } from 'react';
import { View, StyleSheet,Image,Button,Text } from 'react-native';

// pull in the ScreenName component from ScreenName.js
import ScreenName from '../components/ScreenName.js'
import { API, graphqlOperation } from 'aws-amplify';
import awsConfig from '../src/aws-exports';
import { listFilms } from '../src/graphql/queries';
import Amplify from 'aws-amplify';
import Video from 'react-native-video';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
Amplify.configure(awsConfig);

export default class ScreenOne extends Component<Props> {
    videoPlayer;
    state = { films: [],playVideo:"none",
  currentTime: 0,
  duration: 0,
  isFullScreen: false,
  isLoading: true,
  paused: false,
  playerState: PLAYER_STATES.PLAYING,
  screenType: 'content' };
  onSeek = seek => {
    //Handler for change in seekbar
    this.videoPlayer.seek(seek);
  };
  onPaused = playerState => {
    //Handler for Video Pause
    this.setState({
      paused: !this.state.paused,
      playerState,
    });
  };

  onReplay = () => {
    //Handler for Replay
    this.setState({ playerState: PLAYER_STATES.PLAYING });
    this.videoPlayer.seek(0);
  };

  onProgress = data => {
    const { isLoading, playerState } = this.state;
    // Video Player will continue progress even if the video already ended
    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      this.setState({ currentTime: data.currentTime });
    }
  };
  
  onLoad = data => this.setState({ duration: data.duration, isLoading: false });
  
  onLoadStart = data => this.setState({ isLoading: true });
  
  onEnd = () => this.setState({ playerState: PLAYER_STATES.ENDED });
  
  onError = () => alert('Oh! ', error);
  
  exitFullScreen = () => {
    alert('Exit full screen');
  };
  
  enterFullScreen = () => {};
  
  onFullScreen = () => {
    if (this.state.screenType == 'content')
      this.setState({ screenType: 'cover' });
    else this.setState({ screenType: 'content' });
  };
  renderToolbar = () => (
    <View>
      <Text> toolbar </Text>
    </View>
  );
  onSeeking = currentTime => this.setState({ currentTime });

  async componentDidMount() {
    try {
      const filmsData = await API.graphql(graphqlOperation(listFilms))
      console.log('restaurantData:', filmsData.data.listFilms.items[0].title)
      this.setState({
        films: filmsData.data.listFilms.items
      })
    } catch (err) {
      console.log('error fetching films...', err)
    }
  }
  // we won't need to configure navigationOptions just yet
  static navigationOptions = {

  };

  render() {
    return (
        <View style={[styles.container]}>{this.state.playVideo=="none" &&(
        <View>
        {
          this.state.films.map((y) => {
            return (
              <View> 
              
                <View style={styles.rowContainer}>
                    <Image style={[styles.logo]}
                      source={y.thumbNailsUrls}
                    />
                  <Text style={styles.anchorStyle}
                      onPress={() => 
                        this.setState({playVideo:y.hlsUrl})
                      }>
                        {y.title}
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
         ) }
        <View>
          { this.state.playVideo!="none" && (
            <View>
              <Video
                  source={{ uri: this.state.playVideo}}
                  onEnd={this.onEnd}
                  onLoad={this.onLoad}
                  onLoadStart={this.onLoadStart}
                  onProgress={this.onProgress}
                  paused={this.state.paused}
                  resizeMode={this.state.screenType}
                  onFullScreen={this.state.isFullScreen}
                  volume={5}
                  ref={videoPlayer => (this.videoPlayer = videoPlayer)}                                   // Store reference
                  onBuffer={this.onBuffer}                // Callback when remote video is buffering
                  onError={this.videoError}               // Callback when video cannot be loaded
                  style={{
                    aspectRatio: 1,
                    width: "90%"
                }}
              />
              <MediaControls
            duration={this.state.duration}
            isLoading={this.state.isLoading}
            onFullScreen={this.onFullScreen}
            onPaused={this.onPaused}
            onReplay={this.onReplay}
            onSeek={this.onSeek}
            onSeeking={this.onSeeking}
            playerState={this.state.playerState}
            progress={this.state.currentTime}
            toolbar={this.renderToolbar()}
          />
              
              <Button style={{paddingTop:1000}} onPress={()=>
              this.setState({playVideo:"none"})
          } title="Back"></Button>
  
            </View>
            
          ) }
        </View>
        
        </View>
        
      );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingLeft: 20
  },
  rowContainer: {
    flexDirection: 'row'
  },
  logo: {
    width: 66,
    height: 58,
  },
  anchorStyle:{
    paddingLeft: 10,
    color:'blue'
  },
  backgroundVideo: {
    position: 'absolute',
    top: 30,
    aspectRatio: 1,
    height:100,
    bottom: 0,
    right: 0,
  },
});