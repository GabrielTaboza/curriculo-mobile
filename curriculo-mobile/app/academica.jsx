import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";

export default function Academica() {

  return (

    <ScrollView style={styles.container}>

      <Text style={styles.titulo}>
        Experiência Acadêmica
      </Text>

      <View style={styles.card}>

        <Text style={styles.curso}>
          Ensino Médio Completo
        </Text>

        <Text style={styles.instituicao}>
          Conclusão em 2015
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.curso}>
          Tecnólogo em Análise e Desenvolvimento de Sistemas
        </Text>

        <Text style={styles.instituicao}>
          UNOPAR — Agosto/2021 até Dezembro/2023
        </Text>

        <Text style={styles.descricao}>
          Formação voltada para desenvolvimento de software,
          banco de dados, lógica de programação,
          desenvolvimento web, APIs REST e engenharia de software.
        </Text>

        <Text style={styles.tecnologias}>
          Tecnologias estudadas:
        </Text>

        <Text style={styles.lista}>
          • JavaScript{"\n"}
          • HTML e CSS{"\n"}
          • Banco de Dados{"\n"}
          • SQL{"\n"}
          • Engenharia de Software{"\n"}
          • Desenvolvimento Web
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.curso}>
          Tecnólogo em Sistemas para Internet
        </Text>

        <Text style={styles.instituicao}>
          UNICAP — Agosto/2024 até Dezembro/2026
        </Text>

        <Text style={styles.descricao}>
          Atualmente cursando o 4º período com foco em
          desenvolvimento mobile, front-end, back-end,
          APIs REST, IA e computação em nuvem.
        </Text>

        <Text style={styles.tecnologias}>
          Tecnologias utilizadas:
        </Text>

        <Text style={styles.lista}>
          • React Native{"\n"}
          • Node.js{"\n"}
          • Express{"\n"}
          • PostgreSQL{"\n"}
          • Django{"\n"}
          • Figma{"\n"}
          • Java{"\n"}
          • MySQL
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.curso}>
          Residência Tecnológica — Embarque Digital
        </Text>

        <Text style={styles.instituicao}>
          Porto Digital
        </Text>

        <Text style={styles.descricao}>
          Participação em projetos práticos desenvolvidos
          em parceria com empresas de tecnologia,
          atuando em desenvolvimento de aplicações,
          integração de APIs, IA e metodologias ágeis.
        </Text>

        <Text style={styles.tecnologias}>
          Empresas e projetos:
        </Text>

        <View style={styles.linksContainer}>

          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.neurotech.com.br")
            }
          >
            <Text style={styles.link}>
              • Neurotech
            </Text>
          </TouchableOpacity>

          <Text style={styles.descricaoEmpresa}>
            Projeto de inovação e desenvolvimento web.
          </Text>

          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.accenture.com/br-pt")
            }
          >
            <Text style={styles.link}>
              • Accenture
            </Text>
          </TouchableOpacity>

          <Text style={styles.descricaoEmpresa}>
            Projetos utilizando metodologias ágeis criando agentes com IA.
          </Text>

          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.capgemini.com/br-pt/")
            }
          >
            <Text style={styles.link}>
              • Capgemini
            </Text>
          </TouchableOpacity>

          <Text style={styles.descricaoEmpresa}>
            Desenvolvimento de aplicações web e mobile e integração de serviços para um cliente real
          </Text>

        </View>

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
    color: "#fff",
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

  curso: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  instituicao: {
    color: "#38bdf8",
    fontSize: 16,
    marginBottom: 12,
    lineHeight: 24,
  },

  descricao: {
    color: "#cbd5e1",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
  },

  tecnologias: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 10,
  },

  lista: {
    color: "#cbd5e1",
    fontSize: 15,
    lineHeight: 24,
  },

  linksContainer: {
    marginTop: 10,
  },

  link: {
    color: "#38bdf8",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 4,
    textDecorationLine: "underline",
  },

  descricaoEmpresa: {
    color: "#cbd5e1",
    fontSize: 15,
    marginBottom: 15,
    lineHeight: 22,
  },

});