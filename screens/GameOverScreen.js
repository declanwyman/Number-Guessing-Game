import {Text, View, StyleSheet, Image} from 'react-native';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';
function GameOverScreen ({roundsNumber, userNumber, onStartNewGame}) {
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over</Title>
        
            <View style={styles.imageContainer}>
                <Image style={styles.imageStyle} 
                source={require('../assets/images/success.png')} />
                
                    
                
            </View>
            <Text style={styles.summaryText}>
                        Your phone needed<Text style={styles.highlight}> {roundsNumber} </Text> 
                        rounds to guess the number <Text style={styles.highlight}>
                            {userNumber}</Text>.
            </Text>
            <PrimaryButton onPress={onStartNewGame}> Start New Game </PrimaryButton>
        </View>
    )
}

export default GameOverScreen;




const styles = StyleSheet.create({

    imageContainer: {
        borderRadius: 150,
        width: 300,
        height:300,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
        
    },
    imageStyle: {
        width: '100%',
        height: '100%',
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    
        
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 22,
        textAlign: 'center',
        marginVertical: 24,
        
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,

    },
    



});