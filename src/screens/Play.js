import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { FotoPlay } from '../assets'
import { Playbutton, Previous, Next, Pause } from '../assets/icons'

const Play = () => {
    const [Play, setPlay] = useState (false)
    return ( 
    <View style = {{backgroundColor : "#CED9DF", flex : 1}}>
      <View style = {{backgroundColor : "#1F2F22", height : "95%", borderBottomLeftRadius : 20, borderBottomRightRadius : 20, paddingHorizontal : 30, alignItems : 'center', paddingVertical : 20}}>
            <View style = {{alignSelf : "flex-start"}}>
            <Text style = {{fontFamily : "OriginalSurfer-Regular", color : 'white', fontSize : 20}}>Default Playlist Name</Text>
            <Text style = {{fontFamily : "OriginalSurfer-Regular", color : 'white'}}>Music Title - Composer</Text>
            </View>

        <View style = {{borderRadius : 25, overflow : 'hidden', height : "70%", marginTop : 35}}>
            <Image source={FotoPlay} style = {{flex : 1}}/>
        </View>
        <View style = {{flexDirection : 'row', justifyContent : 'space-evenly', width : "70%", marginTop : 50}}>
            <TouchableOpacity>
                <Previous/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Play === true ? setPlay (false) : setPlay (true)}>
              {  Play ? <Pause/> : <Playbutton/> }
            </TouchableOpacity>
            <TouchableOpacity>
                <Next/>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Play

const styles = StyleSheet.create({})