import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";

export default function Projetos() {

  return (

    <ScrollView style={styles.container}>

      <Text style={styles.titulo}>
        Projetos & Redes
      </Text>

      <View style={styles.card}>

        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://github.com/vitorparaizo/projeto-miaudot-residencia")
          }
        >
          <Text style={styles.linkProjeto}>
            Miaudote
          </Text>
        </TouchableOpacity>

        <Text style={styles.descricao}>
          Aplicação inspirada no Instagram voltada
          para adoção de animais, conectando ONGs
          e adotantes através de um feed interativo.
        </Text>

        <Text style={styles.tecnologias}>
          Tecnologias:
        </Text>

        <Text style={styles.lista}>
          • React{"\n"}
          • Django{"\n"}
          • MySQL{"\n"}
          • JavaScript{"\n"}
          • HTML e CSS{"\n"}
          • Figma
        </Text>

      </View>

      <View style={styles.card}>

        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://github.com/simple-money-pi3/simple_money")
          }
        >
          <Text style={styles.linkProjeto}>
            Simple Money
          </Text>
        </TouchableOpacity>

        <Text style={styles.descricao}>
          Protótipo de aplicativo de educação financeira
          focado em metas financeiras e suporte ao usuário.
        </Text>

        <Text style={styles.tecnologias}>
          Tecnologias:
        </Text>

        <Text style={styles.lista}>
          • Figma{"\n"}
          • UX/UI{"\n"}
          • Protótipos Interativos
        </Text>

      </View>

      <View style={styles.card}>

        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://github.com/GabrielTaboza/curriculo-api")
          }
        >
          <Text style={styles.linkProjeto}>
            API Currículo
          </Text>
        </TouchableOpacity>

        <Text style={styles.descricao}>
          API REST desenvolvida com Express e PostgreSQL
          para gerenciamento de currículo, experiências
          profissionais e informações acadêmicas.
        </Text>

        <Text style={styles.tecnologias}>
          Tecnologias:
        </Text>

        <Text style={styles.lista}>
          • Node.js{"\n"}
          • Express{"\n"}
          • PostgreSQL{"\n"}
          • NeonDB{"\n"}
          • Vercel
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.redesTitulo}>
          Redes e Contato
        </Text>

        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://github.com/GabrielTaboza")
          }
        >
          <Text style={styles.link}>
            GitHub
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://linkedin.com/in/gabriel-soares3097/")
          }
        >
          <Text style={styles.link}>
            LinkedIn
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://wa.me/5581996060073")
          }
        >
          <Text style={styles.link}>
            WhatsApp
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            Linking.openURL("mailto:gabrielstaboza@gmail.com")
          }
        >
          <Text style={styles.link}>
            E-mail
          </Text>
        </TouchableOpacity>

      </View>

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
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#1e293b",
    padding: 20,
    borderRadius: 14,
    marginBottom: 20,
  },

  linkProjeto: {
    color: "#38bdf8",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
    textDecorationLine: "underline",
  },

  descricao: {
    color: "#cbd5e1",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
  },

  tecnologias: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 10,
  },

  lista: {
    color: "#cbd5e1",
    fontSize: 15,
    lineHeight: 24,
  },

  redesTitulo: {
    color: "#38bdf8",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },

  link: {
    color: "#38bdf8",
    fontSize: 18,
    marginBottom: 18,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },

});