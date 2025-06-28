import { StyleSheet, Text, View } from "react-native";

import axios from "axios";
import { Link } from 'expo-router';
import { useEffect, useState } from "react";

export default function Index() {

  const [surat, setSurat] = useState([]);

const getSurat = async () => {

  // ganti dengan axios
  // try {
  //   const response = await fetch('https://api.quran.sutanlab.id/surah');
  //   const data = await response.json();
  //   console.log(data);
  // } catch (error) {
  //   console.error('Error fetching data:', error);
  // }

  const response = await axios.get('https://equran.id/api/v2/surat');
  const data = response.data;
  console.log(data);
  setSurat(data.data);
};  


useEffect (() => {
  getSurat();
}, []); 


  return (
    <View
      style={styles.container}
    >
      <Text style={{ fontSize: 30, color:"#FE5D26" }}>Halaman Sederhana</Text>
      <Link href="/detail">View details</Link>


       <View style={styles.main}>

        { surat.map((item, index) => (
          <Text key={index} style={{ fontSize: 20, color:"#1B998B" }}>
            {item.nama} - {item.namaLatin}
          </Text>   
        ))}
       
      </View>

    </View>

   
  );
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FAEDCA",
      padding: 20,
      margin: 15,
  },
  main : {

    backgroundColor:"#C1DBB3",
    padding:20,
    margin:15,
    borderRadius:10,
    justifyContent:"center",       
    width:600

  }
});
