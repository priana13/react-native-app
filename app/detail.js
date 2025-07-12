import axios from 'axios';
import { Audio } from 'expo-av';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function DetailsScreen() {

  const params = useLocalSearchParams();

  const [fullAudio, setFullAudio] = useState({});
  const [surat, setSurat] = useState();



  const getSurat = async (id) => {    

    // console.log(id)
    
      const response = await axios.get(`https://equran.id/api/v2/surat/${id}`);
      const dataResponse = await response;

      // if(response.ok){

        setSurat(dataResponse.data);
        setFullAudio(dataResponse?.data?.data?.audioFull || {});     

        console.log(dataResponse?.data?.data?.audioFull)

      // }

      
    }; 

  const playSound = async (url) => {
    const { sound } = await Audio.Sound.createAsync({ uri: url });
    await sound.playAsync();
  };

  useEffect(() => {

    getSurat(params.id)

    // console.log(params.id)

  },[]);


  return (
  <View style={styles.container}>
    <Text>Surat: {surat?.data?.nama}</Text>
    <Text>Ayat</Text>

    {fullAudio && (
      <View>
        {Object.entries(fullAudio).map(([key, url]) => (
          <View key={key} style={{ marginBottom: 10 }}>
            <Text>{key}</Text>          
            <Button title="Play" onPress={() => playSound(url)} />           
          </View>
        ))}
      </View>
    )}
  </View>
);

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
