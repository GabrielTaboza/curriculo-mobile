import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function Profissional() {

  return (

    <ScrollView style={styles.container}>

      <Text style={styles.titulo}>
        Experiência Profissional
      </Text>

      <View style={styles.card}>

        <Text style={styles.cargo}>
          Atendimento e Suporte Operacional
        </Text>

        <Text style={styles.empresa}>
          Contrato Temporário — Julho/2016 até Agosto/2017
        </Text>

        <Text style={styles.descricao}>
          Atuação com atendimento ao público,
          resolução de problemas, organização,
          despacho de demandas e suporte operacional.
        </Text>

        <Text style={styles.tecnologias}>
          Competências:
        </Text>

        <Text style={styles.lista}>
          • Comunicação{"\n"}
          • Organização{"\n"}
          • Resolução de Problemas{"\n"}
          • Agilidade de Aprendizagem
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.cargo}>
          Atendimento ao Cliente
        </Text>

        <Text style={styles.empresa}>
          CLT — Janeiro/2019 até Maio/2022
        </Text>

        <Text style={styles.descricao}>
          Experiência voltada para atendimento ao cliente,
          resolução rápida de problemas e foco em metas
          e qualidade no atendimento.
        </Text>

        <Text style={styles.tecnologias}>
          Competências:
        </Text>

        <Text style={styles.lista}>
          • Atendimento ao Cliente{"\n"}
          • Trabalho em Equipe{"\n"}
          • Solução de Problemas{"\n"}
          • Comprometimento com Metas
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.cargo}>
          Auxiliar Administrativo
        </Text>

        <Text style={styles.empresa}>
          VS Plus Size — Março/2026 até Atualmente
        </Text>

        <Text style={styles.descricao}>
          Atuação na resolução de problemas de clientes,
          emissão de nota fiscal, geração de etiquetas
          para envio, organização de estoque e utilização
          de sistemas ERP e PDV.
        </Text>

        <Text style={styles.descricao}>
          Também realizo cadastro de produtos na plataforma Bagy,
          edição do site utilizando HTML e ferramentas da própria plataforma.
        </Text>

        <Text style={styles.tecnologias}>
          Tecnologias e Ferramentas:
        </Text>

        <Text style={styles.lista}>
          • ERP{"\n"}
          • PDV{"\n"}
          • Bagy{"\n"}
          • HTML{"\n"}
          • Controle de Estoque{"\n"}
          • Emissão de Nota Fiscal
        </Text>

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

  cargo: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },

  empresa: {
    color: "#38bdf8",
    fontSize: 16,
    marginBottom: 12,
  },

  descricao: {
    color: "#cbd5e1",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
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

});