import{useState} from 'react';
import{Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App () {
    const [euros, setEuros] = useState('')
    const [pounds, setPounds] = useState(0)

    const calculate = () => {
        const result = euros.replace(',','.')* 0.9
        setPounds(result)
    }

    return (
        <View style = {StyleSheet.contaiber}>
            <Text style = {StyleSheet.field}>Euros</Text>
            <TextInput
                style = {StyleSheet.field}
                value = {euros}
                onChangeText={text => setEuros(text)}
                keyboardType='decimal-pad'
            />
            <Text style = {StyleSheet.field} >Pounds</Text>
            <Text style = {StyleSheet.field}>{pounds.toFixed(2)]</Text>
            <Button title = "Calculate" onPress = {calculate}><</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        marginLeft: 10
    }
    field: {
        marginBottom: 10
    }
});