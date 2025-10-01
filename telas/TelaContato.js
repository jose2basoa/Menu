import { Text, View, StyleSheet, Image, TouchableOpacity, Linking, useColorScheme } from 'react-native';
import { ScrollView } from 'react-native-web';

function TelaContato({ navigation }) {
    const scheme = useColorScheme();
    const isDark = scheme === 'dark';

    const bgColor = isDark ? '#121212' : '#fff3f3';
    const textColor = isDark ? '#ffffff' : '#333';
    const titleColor = isDark ? '#ff6f61' : '#ea4335';

    const enviarEmail = () => {
        Linking.openURL('mailto:jose.de.barros0192@gmail.com');
    };

    const enviarWhatsApp = () => {
        const mensagem = 'Olá José! Gostaria de entrar em contato com você sobre uma oportunidade.';
        const numero = '5518997110611';
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
        Linking.openURL(url);
    };

    const abrirInstagram = () => {
        Linking.openURL('https://instagram.com/me.basoajose');
    };

    const abrirGitHub = () => {
        Linking.openURL('https://github.com/jose2basoa');
    };

    const abrirLinkedIn = () => {
        Linking.openURL('https://linkedin.com/in/jose2basoa');
    };

    return (
        <View style={[styles.container, { backgroundColor: bgColor }]}>
            <Image
                source={require('../assets/image/eu.jpg')}
                style={[styles.foto, { borderColor: titleColor }]}
            />

            <Text style={[styles.titulo, { color: titleColor }]}>📞 Entre em Contato</Text>

            <ScrollView>
                <View style={styles.secao}>
                    <Text style={[styles.label, { color: textColor }]}>📧 Email:</Text>
                    <TouchableOpacity onPress={enviarEmail}>
                        <Text style={[styles.texto, { color: titleColor }]}>
                            jose.de.barros0192@gmail.com
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.secao}>
                    <Text style={[styles.label, { color: textColor }]}>📱 Telefone:</Text>
                    <TouchableOpacity onPress={enviarWhatsApp}>
                        <Text style={[styles.texto, { color: titleColor }]}>
                            (18) 99711-0611
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.secao}>
                    <Text style={[styles.label, { color: textColor }]}>📸 Instagram:</Text>
                    <TouchableOpacity onPress={abrirInstagram}>
                        <Text style={[styles.texto, { color: titleColor }]}>
                            @me.basoajose
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.secao}>
                    <Text style={[styles.label, { color: textColor }]}>💻 GitHub:</Text>
                    <TouchableOpacity onPress={abrirGitHub}>
                        <Text style={[styles.texto, { color: titleColor }]}>
                            github.com/jose2basoa
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.secao}>
                    <Text style={[styles.label, { color: textColor }]}>🔗 LinkedIn:</Text>
                    <TouchableOpacity onPress={abrirLinkedIn}>
                        <Text style={[styles.texto, { color: titleColor }]}>
                            linkedin.com/in/jose2basoa
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.secao}>
                    <Text style={[styles.label, { color: textColor }]}>🎯 Objetivos Profissionais:</Text>
                    <Text style={[styles.texto, { color: textColor }]}>
                        Crescer na área de tecnologia, desenvolver projetos como o ServFacil, 
                        e conquistar uma carreira sólida que me permita alcançar independência financeira 
                        e qualidade de vida para minha família.
                    </Text>
                </View>

                <View style={styles.secao}>
                    <TouchableOpacity
                        style={[styles.botao, { backgroundColor: titleColor }]}
                        onPress={() => navigation.navigate('Inicio')}
                    >
                        <Text style={[styles.botaoTexto, { color: textColor }]}>
                            Voltar ao Início
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
        textAlign: 'center',
        lineHeight: 22,
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

export default TelaContato;
