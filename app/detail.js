import axios from 'axios';
import { Audio } from 'expo-av';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function DetailsScreen() {

  const params = useLocalSearchParams();

  const [fullAudio, setFullAudio] = useState({});
  const [surat, setSurat] = useState();
  const [ayat, setAyat] = useState({});



  const getSurat = async (id) => {    

    // console.log(id)
    
      const response = await axios.get(`https://equran.id/api/v2/surat/${id}`);
      const dataResponse = await response;

      // if(response.ok){

        setSurat(dataResponse.data);
        setFullAudio(dataResponse?.data?.data?.audioFull || {});     
        setAyat(dataResponse?.data?.data?.ayat || {});     

        console.log(dataResponse?.data?.data?.ayat)

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
  <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
    <Text>Surat: {surat?.data?.nama}</Text>
    <Text>Ayat</Text>

    {ayat && (
      <View style={styles.container} >
        {Object.entries(ayat).map(([index, value]) => (
          <View key={index} style={{ marginVertical: 20 }}>                     
            <Text style={{ fontFamily: 'LPMQ', fontSize: 24 }}> {value.nomorAyat}  {value.teksArab} </Text>          
            <Text>{value.nomorAyat}. {value.teksIndonesia}</Text>          
            {/* <Text>{value}</Text>           */}
            {/* <Button title="Play" onPress={() => playSound(value.audio.01)} />            */}
          </View>
        ))}
      </View>
    )}
  </ScrollView>
);

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:20   
  },
});
