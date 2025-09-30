import { Text, View, StyleSheet } from 'react-native';

function TelaContato() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Bem-vindo à Tela Contato!</Text>

            <View style={styles.secao}>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.texto}>jose.de.barros0192@gmail.com</Text>
            </View>

            <View style={styles.secao}>
                <Text style={styles.label}>Telefone:</Text>
                <Text style={styles.texto}>(18) 99711-0611</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8f0fe',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#1a73e8',
    },
    secao: {
        marginBottom: 20,
        width: '100%',
    },
    label: {
        fontSize: 18,
        fontWeight: '600',
        color: '#555',
    },
    texto: {
        fontSize: 16,
        color: '#333',
        marginTop: 5,
    },
});

export default TelaContato;
