/* eslint-disable */

import axios from "axios";
import dateFormat from "dateformat";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'; // tambahkan Dimensions
import Carousel from 'react-native-reanimated-carousel';
import PlayButton from "./PlayButton";

const { width } = Dimensions.get('window'); // tambahkan ini

const data = [
  { title: 'Gambar 1', url: 'https://media.suara.com/pictures/1600x840/2024/03/25/66741-desain-banner-dan-spanduk-nuzulul-quran-2024-freepik.jpg' },
  { title: 'Gambar 2', url: 'https://img.freepik.com/premium-vector/quran-with-caligraphy-banner-design-premium_225928-9.jpg' }, 
];


export default function Index() {

    const [surat, setSurat] = useState([]);
    const [errorStatus, setErrorStatus] = useState('terjadi error');

    const navigation = useNavigation();
    
    const getSurat = async () => {    
    
      const response = await axios.get(`https://equran.id/api/v2/surat`);
      const data = response.data;
      // console.log(data);
      setSurat(data.data);
    };  
    
    const now = new Date();
    
    useEffect (() => {
      getSurat();
    }, []); 


  return (
    <ScrollView >


      <View style={styles.container}>
        <Text style={styles.centerText}>{dateFormat(now)}</Text>
      </View>

      <Carousel
        
        width={width}
        height={220}
        data={data}
        renderItem={({ item }) => (
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity>

              <Image source={{ uri: item.url }} style={{ width: width - 60, height: 200, borderRadius: 10 }} />
              <Text>{item.title}</Text>

            </TouchableOpacity>

          </View>
        )}
        loop
        autoPlay
      />

   
      {/* <SliderBox images={images} /> */}

      <Text style={{ fontSize: 30, color:"#FE5D26" }}>Surah</Text>
     

       <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>

        {/* { surat.map((item, index) => (
          <Text key={index} style={{ fontSize: 20, color:"#1B998B" }}>
           {item.nama} -{item.namaLatin} 
          </Text>   
        ))} */}

        <View style={styles.container}>

          <FlatList

            style={styles.carousel}
            data={surat}     
            horizontal={true}    
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('detail',{id: item.nomor})}>
                <Text style={styles.surah}>
                  {item.nama} - {item.namaLatin}
                </Text>

              </TouchableOpacity>
            )}
          />

        </View>

       

      </View>

      <View>

        <PlayButton />
         
      </View>
    
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container : {
    flex: 1,    
  },
  carousel  : {
   flex: 1,
    marginTop: 5
  },
  surah: {
    fontSize: 20, 
    color:"#1B998B",
    paddingHorizontal:15,
    backgroundColor: "#FFFADC",
    margin:5,
    borderRadius: 10

  },
   centerText: {
    textAlign: 'center',
    fontSize: 18,
    paddingVertical: 5
  },
});