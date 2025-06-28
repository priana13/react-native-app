import { StyleSheet, Text, View } from "react-native";

import { Link } from 'expo-router';

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={{ fontSize: 30, color:"#FE5D26" }}>Halaman Sederhana</Text>
      <Link href="/detail">View details</Link>


       <View style={styles.main}>

        <Text style={{ fontSize: 20, color:"#1B998B" }}>Selamat datang di aplikasi React Native</Text>
        <Text style={{ fontSize: 16, color:"#2D3142" }}>Ini adalah halaman utama yang sederhana.</Text>
        <Text style={{ fontSize: 16, color:"#2D3142" }}>Anda dapat menavigasi ke halaman detail untuk informasi lebih lanjut.</Text>
       
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
