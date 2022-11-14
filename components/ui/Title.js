import {Text, StyleSheet} from 'react-native';


function Title({children}) {
    return (
    
    <Text style={styles.title}>{children}</Text>
    
    );
    
}

export default Title;

const styles = StyleSheet.create({

    title: {
        fontSize: 22,
        color: 'black',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#C8A2C8',
        padding: 12,
        backgroundColor: 'white',
        fontFamily: 'open-sans-bold',

    },



});