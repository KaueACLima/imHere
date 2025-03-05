import { Text, TextInput, View } from "react-native";
import { styles } from './styles'

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Terça, 4 Novembro 2025</Text>
      <TextInput style={styles.input} />
    </View>
  );
}
