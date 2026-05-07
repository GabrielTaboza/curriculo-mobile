import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function Sobre() {

  return (

    <ScrollView style={styles.container}>

      <Text style={styles.titulo}>
        Sobre Mim
      </Text>

      <Text style={styles.texto}>
        Sou estudante de Tecnologia da Informação e desenvolvedor Front-End,
        com experiência em React Native, JavaScript, Node.js e APIs REST.
      </Text>

      <Text style={styles.subtitulo}>
        Tecnologias Utilizadas
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTexto}>React Native</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTexto}>Expo Router</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTexto}>Node.js</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTexto}>Express</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTexto}>PostgreSQL</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTexto}>NeonDB</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTexto}>Vercel</Text>
      </View>

      <Text style={styles.subtitulo}>
        Funcionalidade Extra
      </Text>

      <Text style={styles.texto}>
        O aplicativo possui navegação entre múltiplas telas e integração
        com API REST utilizando Express + PostgreSQL.
      </Text>

    </ScrollView>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 20,
  },

  titulo: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },

  subtitulo: {
    color: "#38bdf8",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 15,
  },

  texto: {
    color: "#cbd5e1",
    fontSize: 17,
    lineHeight: 26,
  },

  card: {
    backgroundColor: "#1e293b",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },

  cardTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

});