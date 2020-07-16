import React from 'react';
import { View, StyleSheet,TextInput,Button,Text} from 'react-native';

import awsConfig from '../src/aws-exports';
import DocumentPicker from 'react-native-document-picker';
import Amplify from 'aws-amplify';
Amplify.configure(awsConfig);
var title="";
var genre="";
export default class ScreenTwo extends React.Component {
 state={title:"",genre:"",singleFile: ''};
  static navigationOptions = {

  };
  async selectOneFile() {
  //Opening Document Picker for selection of one file
  try {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
      //There can me more options as well
      // DocumentPicker.types.allFiles
      // DocumentPicker.types.images
      // DocumentPicker.types.plainText
      // DocumentPicker.types.audio
      // DocumentPicker.types.pdf
    });
    //Printing the log realted to the file
    console.log('res : ' + JSON.stringify(res));
    console.log('URI : ' + res.uri);
    console.log('Type : ' + res.type);
    console.log('File Name : ' + res.name);
    console.log('File Size : ' + res.size);
    //Setting the state to show single file attributes
    this.setState({ singleFile: res });
  } catch (err) {
    //Handling any exception (If any)
    if (DocumentPicker.isCancel(err)) {
      //If user canceled the document selection
      alert('Canceled!');
    } else {
      //For Unknown Error
      alert('Unknown Error: ' + JSON.stringify(err));
      throw err;
    }
  }
}
    chooseFile = () => {
    console.log(this.state);
    //alert("")
    this.selectOneFile();
  };
  uploadVideo = () => {
    if(this.state.singleFile=='')
        alert("Please Select a Video");
    else{
        alert("Uploading");
    }
  };
  handleTitleChange=(name) =>{
    this.setState({title:name});
  }
  handleGenreChange=(name) =>{
    this.setState({genre:name});
  }
 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>Upload Video</Text>
        <Text>{"\n"}</Text>
        <TextInput
        style={{height: 40,backgroundColor:"#dcdcdc",width:"60%"}}
        placeholder="Title"
        value={this.state.title}
        onChangeText={this.handleTitleChange}
      />
      <Text>{"\n"}</Text>
       <TextInput
        style={{height: 40,backgroundColor:"#dcdcdc",width:"60%"}}
        placeholder="Genre"
        value={this.state.genre}
        onChangeText={this.handleGenreChange}
      />
       <Button title="Choose File" style={{textAlign: 'left'}}  onPress={this.chooseFile}></Button>
       <Text style={styles.textStyle}>
          File Name:{' '}
          {this.state.singleFile.name ? this.state.singleFile.name : ''}
          {'\n'}
          Type: {this.state.singleFile.type ? this.state.singleFile.type : ''}
          {'\n'}
          File Size:{' '}
          {this.state.singleFile.size ? this.state.singleFile.size : ''}
          {'\n'}
        </Text>
        <Button title="Upload Video" style={{textAlign: 'left'}}  onPress={this.uploadVideo}></Button>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft:30,
    paddingTop:50
  },
  titleStyle:{
      fontSize:30
  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    color: 'black',
  },
});