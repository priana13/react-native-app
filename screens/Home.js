import axios from "axios";
import { useEffect, useState } from "react";
import { Dimensions, Image, Text, View } from 'react-native'; // tambahkan Dimensions
import Carousel from 'react-native-snap-carousel';
import API_URL from "../services/request";

const { width } = Dimensions.get('window'); // tambahkan ini

const data = [
  { title: 'Gambar 1', url: 'https://media.suara.com/pictures/1600x840/2024/03/25/66741-desain-banner-dan-spanduk-nuzulul-quran-2024-freepik.jpg' },
  { title: 'Gambar 2', url: 'https://img.freepik.com/premium-vector/quran-with-caligraphy-banner-design-premium_225928-9.jpg' }, 
];


export default function Home(){

    const [surat, setSurat] = useState([]);
    
    const getSurat = async () => {
    
    
      const response = await axios.get(`${API_URL}/v2/surat`);
      const data = response.data;
      console.log(data);
      setSurat(data.data);
    };  


    const renderItem = ({ item }) => (
          <View style={{ alignItems: 'center' }}>
            <Image source={{ uri: item.url }} style={{ width: width - 60, height: 200, borderRadius: 10 }} />
            <Text>{item.title}</Text>
          </View>
        );
    
    
    useEffect (() => {
      getSurat();
    }, []); 


  return (
    <View >

       <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width - 60}
        loop={true}
      />

   
      {/* <SliderBox images={images} /> */}

      <Text style={{ fontSize: 30, color:"#FE5D26" }}>Surah</Text>
     

       <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>

        { surat.map((item, index) => (
          <Text key={index} style={{ fontSize: 20, color:"#1B998B" }}>
           {item.nama} -{item.namaLatin} 
          </Text>   
        ))}
       
      </View>
    </View>
  );
}





