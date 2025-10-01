import { Text, View, StyleSheet, Image, useColorScheme } from 'react-native';
import { ScrollView } from 'react-native-web';

function TelaInicio() {
    const scheme = useColorScheme();
    const isDark = scheme === 'dark';

    const bgColor = isDark ? '#121212' : '#e8f0fe';
    const textColor = isDark ? '#ffffff' : '#333';
    const titleColor = isDark ? '#bb86fc' : '#34a853';

    return (
        <View style={[styles.container, { backgroundColor: bgColor }]}>
            <Image
                source={require('../assets/image/eu.jpg')}
                style={[styles.foto, { borderColor: titleColor }]}
            />

            <Text style={[styles.titulo, { color: titleColor }]}>
                🏠 Bem-vindo à Tela Inicial!
            </Text>

            <ScrollView>
                <View style={styles.secao}>
                    <Text style={[styles.label, { color: textColor }]}>🙋 Nome:</Text>
                    <Text style={[styles.texto, { color: textColor }]}>José Basoa</Text>
                </View>

                <View style={styles.secao}>
                    <Text style={[styles.label, { color: textColor }]}>🎮 Hobbies:</Text>
                    <Text style={[styles.texto, { color: textColor }]}>
                        Jogar vôlei, CS2, Academia
                    </Text>
                </View>

                <View style={styles.secao}>
                    <Text style={[styles.label, { color: textColor }]}>📖 Biografia:</Text>
                    <Text style={[styles.texto, { color: textColor }]}>
                        Sou um jovem dedicado, apaixonado por esportes e tecnologia. 
                        Atualmente curso Desenvolvimento de Sistemas, buscando sempre aprender e me aprimorar. 
                        Tenho interesse em programação, musculação e jogos, equilibrando minha rotina entre estudo, trabalho e lazer. 
                        Acredito na importância da disciplina e da evolução constante.
                    </Text>
                </View>

                <View style={styles.secao}>
                    <Text style={[styles.label, { color: textColor }]}>🌟 Sonhos:</Text>
                    <Text style={[styles.texto, { color: textColor }]}>
                        Construir uma carreira sólida na área de tecnologia, conquistar independência financeira 
                        e sustentar uma família com conforto, amor e segurança.
                    </Text>
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
        textAlign: 'center',
        lineHeight: 22,
    },
});

export default TelaInicio;
