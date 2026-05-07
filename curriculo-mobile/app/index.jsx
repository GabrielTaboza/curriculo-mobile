import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { router } from "expo-router";

export default function Home() {

  return (
    <View style={styles.container}>

      <Text style={styles.nome}>
        Gabriel Taboza
      </Text>

      <Text style={styles.subtitulo}>
        Desenvolvedor em formação
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push("/sobre")}
      >
        <Text style={styles.botaoTexto}>
          Sobre
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push("/academica")}
      >
        <Text style={styles.botaoTexto}>
          Experiência Acadêmica
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push("/profissional")}
      >
        <Text style={styles.botaoTexto}>
          Experiência Profissional
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push("/projetos")}
      >
        <Text style={styles.botaoTexto}>
          Projetos
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#0f172a",
  },

  nome: {
    fontSize: 34,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtitulo: {
    color: "#94a3b8",
    fontSize: 18,
    marginBottom: 40,
  },

  botao: {
    backgroundColor: "#2563eb",
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
  },

  botaoTexto: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },

});