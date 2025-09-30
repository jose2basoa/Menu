import { Text, View, StyleSheet } from 'react-native';

function TelaSobre() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Bem-vindo à Tela Sobre!</Text>

            <View style={styles.secao}>
                <Text style={styles.label}>Curso:</Text>
                <Text style={styles.texto}>Desenvolvimento de Sistemas (Cursando)</Text>
            </View>

            <View style={styles.secao}>
                <Text style={styles.label}>Habilidades:</Text>
                <Text style={styles.texto}>
                    - Rápido aprendizado{"\n"}
                    - Fácil adaptação ao ambiente{"\n"}
                    - Facilidade no contato com pessoas
                </Text>
            </View>

            <View style={styles.secao}>
                <Text style={styles.label}>Experiências:</Text>
                <Text style={styles.texto}>
                    - Garçom{"\n"}
                    - Ajudante de cozinha{"\n"}
                    - Operador de máquina industrial{"\n"}
                    - Auxiliar administrativo
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
        lineHeight: 22,
    },
});

export default TelaSobre;
