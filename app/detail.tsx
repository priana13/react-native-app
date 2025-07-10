import { useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DetailsScreen() {

  const params = useLocalSearchParams();

  useEffect(() => {

    console.log(params)

  });


  return (
    <View style={styles.container}>
      <Text>Ini adalah halaman detail : { JSON.stringify(params) }</Text>
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
