import { ScrollView, StyleSheet, Text } from 'react-native';

export default function Video() {




  return (
  <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>

    <Text>Video Kajian</Text>

    {/* <VideoPlayer

    source={{ 
        uri: 'https://www.youtube.com/watch?v=M5B1yPEIW8c'
     }}
    
     controlTimeout={1000}
    /> */}
       
   
 

  </ScrollView>
);

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:20   
  },
});
