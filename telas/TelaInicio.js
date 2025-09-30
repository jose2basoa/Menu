import { Text, View, StyleSheet } from 'react-native';

function TelaInicio() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Bem-vindo à Tela Inicial!</Text>

            <View style={styles.secao}>
                <Text style={styles.label}>Nome:</Text>
                <Text style={styles.texto}>José Basoa</Text>
            </View>

            <View style={styles.secao}>
                <Text style={styles.label}>Hobbies:</Text>
                <Text style={styles.texto}>Jogar vôlei, CS2, Academia</Text>
            </View>

            <View style={styles.secao}>
                <Text style={styles.label}>Biografia:</Text>
                <Text style={styles.texto}>
                    Sou uma pessoa dedicada, apaixonada por esportes e tecnologia. Gosto de desafios e estou sempre buscando evoluir.
                </Text>
            </View>

            <View style={styles.secao}>
                <Text style={styles.label}>Sonhos:</Text>
                <Text style={styles.texto}>
                    Ser rico e sustentar uma família com conforto e amor.
                </Text>
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

export default TelaInicio;
