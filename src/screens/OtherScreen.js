import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import { BackGround2 } from '../assets';
import { Eis, Pohon, Airair,Angin, Apiapi, Headset, Payung } from '../assets/icons';

const OtherScreen = () => {
  return (
    <View style = {{ backgroundColor : "#CED9DF", flex: 1}}>
      <View
        style={{
          backgroundColor: '#1F2F22',
          width: '100%',
          height: 50,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
        }}></View>
      <View style = {{paddingLeft : 22, marginTop : 32}}>
        <Text style = {{fontSize : 20, color : "#3E563E", fontFamily : "OriginalSurfer-Regular"}}>Choose your sounds</Text>
        <Text style = {{fontSize : 13, color : "#3E563E", width : "80%", fontFamily : "OriginalSurfer-Regular"}}>
        Complete the scenery with a set of sounds to bring the magic to life.
        </Text>
        <View style={{backgroundColor: '#7993A0', width: '100%', marginTop: 45, borderTopLeftRadius: 30, borderBottomLeftRadius: 30, overflow: 'hidden',flexDirection: 'row',}}>
          <TouchableOpacity style={{width: 90, height: 90, backgroundColor: '#1F2F22', justifyContent: 'center', alignItems: 'center',borderBottomRightRadius: 30, borderTopRightRadius: 30}}>
            <Text style={{color: 'white', fontSize: 20, textAlign: 'center', fontFamily : "OriginalSurfer-Regular"}}>nature sounds</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', flex: 1}}>
          <TouchableOpacity style={{borderRadius: 10, width: 50, height: 50,backgroundColor: 'white', justifyContent : 'center', alignItems : 'center'}}>
              <Eis/>
            </TouchableOpacity>
            <TouchableOpacity style={{borderRadius: 10, width: 50, height: 50,backgroundColor: 'white', justifyContent : 'center', alignItems : 'center'}}>
              <Pohon/>
            </TouchableOpacity>
            <TouchableOpacity style={{borderRadius: 10, width: 50, height: 50,backgroundColor: 'white', justifyContent : 'center', alignItems : 'center'}}>
              <Angin/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{backgroundColor: '#7993A0', width: '100%', marginTop: 45, borderTopLeftRadius: 30, borderBottomLeftRadius: 30, overflow: 'hidden',flexDirection: 'row',}}>
          <TouchableOpacity style={{width: 90, height: 90, backgroundColor: '#1F2F22', justifyContent: 'center', alignItems: 'center',borderBottomRightRadius: 30, borderTopRightRadius: 30}}>
            <Text style={{color: 'white', fontSize: 20, textAlign: 'center', fontFamily : "OriginalSurfer-Regular"}}>binaural beats</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', flex: 1}}>
            <TouchableOpacity style={{borderRadius: 10, width: 50, height: 50,backgroundColor: 'white', justifyContent : 'center', alignItems : 'center'}}>
              <Headset/>
            </TouchableOpacity>
            <TouchableOpacity style={{borderRadius: 10, width: 50, height: 50,backgroundColor: 'white', justifyContent : 'center', alignItems : 'center'}}>
              <Headset/>
            </TouchableOpacity>
            <TouchableOpacity style={{borderRadius: 10, width: 50, height: 50,backgroundColor: 'white', justifyContent : 'center', alignItems : 'center'}}>
              <Headset/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{backgroundColor: '#7993A0', width: '100%', marginTop: 45, borderTopLeftRadius: 30, borderBottomLeftRadius: 30, overflow: 'hidden',flexDirection: 'row',}}>
          <TouchableOpacity style={{width: 90, height: 90, backgroundColor: '#1F2F22', justifyContent: 'center', alignItems: 'center',borderBottomRightRadius: 30, borderTopRightRadius: 30}}>
            <Text style={{color: 'white', fontSize: 20, textAlign: 'center', fontFamily : "OriginalSurfer-Regular"}}>ASMR</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', flex: 1}}>
            <TouchableOpacity style={{borderRadius: 10, width: 50, height: 50,backgroundColor: 'white', justifyContent : 'center', alignItems : 'center'}}>
              <Airair/>
            </TouchableOpacity>
            <TouchableOpacity style={{borderRadius: 10, width: 50, height: 50,backgroundColor: 'white', justifyContent : 'center', alignItems : 'center'}}>
              <Payung/>
            </TouchableOpacity>
            <TouchableOpacity style={{borderRadius: 10, width: 50, height: 50,backgroundColor: 'white', justifyContent : 'center', alignItems : 'center'}}>
              <Apiapi/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OtherScreen;

const styles = StyleSheet.create({});
