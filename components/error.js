import { Text, View } from 'react-native';


const Error = (props: { errorMessage?: string | null }) => {

    const {errorMessage} = props;

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, color: 'red' }}>{errorMessage}</Text>
        </View>
        
    );
}

export default Error;