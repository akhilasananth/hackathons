import React , { Component } from 'react';
import {Image,
        StyleSheet, 
        Text, 
        View, 
        Button,
        Alert,
        NavigatorIOS} from 'react-native';

    class LoginChoice extends Component {
      
        render() {
      
          return (
            <View
              style={{flex:1,flexDirection: 'row'}}
            >
              <Image
                style={{
                  resizeMode: 'cover',
                  position:'absolute',left:0,right:0,top:0,bottom:0,
                  width: null,
                  height: null,
                  zIndex: 100
                }}
                source={require('./images/loginChoice.png')}/>
{/*       
                <View style={{
                  position:'absolute',
                  left:0,
                  right:0,
                  top:0,bottom:0,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 200
                }}>
                  <Button onPress={this._handlePress} title="Log!" color="#46A4FB" />
                </View> */}
      
           </View>
          );
        }
      }
      
      const styles = StyleSheet.create({
        fullContainer: {
          flex: 1,
          backgroundColor: '#eee',
          justifyContent: 'center'
        },
      });

      export default LoginChoice;
      
      
      