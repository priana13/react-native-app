import axios from "axios";
import { useEffect, useState } from "react";
import { Text, View } from 'react-native';
import API_URL from "../services/request"; // Import the API URL from the request file



const Home = () => {

    const [surat, setSurat] = useState([]);
    
    const getSurat = async () => {
    
    
      const response = await axios.get(`${API_URL}/v2/surat`);
      const data = response.data;
      console.log(data);
      setSurat(data.data);
    };  
    
    
    useEffect (() => {
      getSurat();
    }, []); 


  return (
    <View >
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

export default Home;

