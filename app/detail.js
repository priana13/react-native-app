import axios from 'axios';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DetailsScreen() {

  const params = useLocalSearchParams();

  const [fullAudio, setFullAudio] = useState('test');



  const getSurat = async (id) => {    

    // console.log(id)
    
      const response = await axios.get(`https://equran.id/api/v2/surat/${id}`);
      const data = await response;


      // console.log(data)

      setFullAudio(data?.data?.audioFull);

      console.log(fullAudio);
      
    }; 

  useEffect(() => {

    getSurat(params.id)

    // console.log(params.id)

  },[]);


  return (
    <View style={styles.container}>
      <Text>Ini adalah halaman detail : { fullAudio }</Text>
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
