import { ScrollView, StyleSheet } from "react-native";
import Home from "../screens/Home"; // Import the Home component
4

export default function Index() {


  return (
    <ScrollView>    

      <Home />

    </ScrollView>

   
  );
}


const styles = StyleSheet.create({
  main : {

    backgroundColor:"#C1DBB3",
    padding:20,
    margin:15,
    borderRadius:10,
    justifyContent:"center",       
    width:600

  }
});
