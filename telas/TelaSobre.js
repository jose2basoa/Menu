import { Text, View, StyleSheet, Image, useColorScheme, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-web';

function TelaSobre({ navigation }) {
    const scheme = useColorScheme();
    const isDark = scheme === 'dark';

    const bgColor = isDark ? '#121212' : '#f9f9f9';
    const textColor = isDark ? '#ffffff' : '#333';
    const titleColor = isDark ? '#ffb300' : '#053efbff';

    return (
        <View style={[styles.container, { backgroundColor: bgColor }]}>
            <Image
                source={require('../assets/image/eu.jpg')}
                style={[styles.foto, { borderColor: titleColor }]}
            />

            <Text style={[styles.titulo, { color: titleColor }]}>ℹ️ Sobre Mim</Text>

            <ScrollView>
                <View style={styles.secao}>
                    <Text style={[styles.label, { color: textColor }]}>🎓 Curso:</Text>
                    <Text style={[styles.texto, { color: textColor }]}>
                        Desenvolvimento de Sistemas (Cursando)
                    </Text>
                </View>

                <View style={styles.secao}>
                    <Text style={[styles.label, { color: textColor }]}>📖 Biografia:</Text>
                    <Text style={[styles.texto, { color: textColor }]}>
                        Meu nome é José Guilherme Basoa Cardoso. Sou uma pessoa comunicativa, resiliente e apaixonada por aprender. 
                        Sempre gostei de esportes, especialmente vôlei, e encontrei na tecnologia uma oportunidade de unir disciplina e criatividade. 
                        Busco evoluir constantemente, tanto no aspecto profissional quanto pessoal, valorizando o equilíbrio entre saúde, estudos e relacionamentos.
                    </Text>
                </View>

                <View style={styles.secao}>
                    <Text style={[styles.label, { color: textColor }]}>💡 Habilidades:</Text>
                    <Text style={[styles.texto, { color: textColor }]}>
                        - Rápido aprendizado{"\n"}
                        - Fácil adaptação ao ambiente{"\n"}
                        - Boa comunicação e trabalho em equipe{"\n"}
                        - Foco em resultados
                    </Text>
                </View>

                <View style={styles.secao}>
                    <Text style={[styles.label, { color: textColor }]}>💼 Experiências:</Text>
                    <Text style={[styles.texto, { color: textColor }]}>
                        - Garçom{"\n"}
                        - Ajudante de cozinha{"\n"}
                        - Operador de máquina industrial{"\n"}
                        - Auxiliar administrativo
                    </Text>
                </View>

                <View style={styles.secao}>
                    <TouchableOpacity
                        style={[styles.botao, { backgroundColor: titleColor }]}
                        onPress={() => navigation.navigate('Contato')}
                    >
                        <Text style={[styles.botaoTexto, { color: textColor }]}>
                            Entre em Contato
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    foto: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20,
        borderWidth: 2,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },
    secao: {
        marginBottom: 20,
        width: '100%',
        alignItems: 'center',
    },
    label: {
        fontSize: 18,
        fontWeight: '600',
    },
    texto: {
        fontSize: 16,
        marginTop: 5,
        lineHeight: 22,
        textAlign: 'center',
    },
    botao: {
        marginTop: 10,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
    },
    botaoTexto: {
        fontSize: 16,
        fontWeight: '600',
    },
});

export default TelaSobre;
