// Arthur Nunes de Souza Possato
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const CartaoPerfil = ({ nome, cidade,profissao, email }) => {
  const handlePress = () => {
    Alert.alert("E-mail enviado", 'E-mail enviado para: ${email}');
  };

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.nomeText}>{nome}</Text>
      <Text style={styles.infoText}>{cidade}</Text>
      <Text style={styles.profissaoText}>{profissao}</Text>
      <Text style={styles.emailText}>{email}</Text>
      <TouchableOpacity 
        style={styles.botao} 
        onPress={handlePress}
        activeOpacity={0.7}
      >
        <Text style={styles.botaoTexto}>ENVIAR E-MAIL</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#ffffff',
    padding: 25,
    borderRadius: 15,
    width: '85%',
    alignItems: 'leaft',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  nomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    textTransform: 'uppercase',
  },


  infoText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
   profissaoText: {
    fontSize: 18,
    color: '#00428d',
    marginBottom: 10,
  },
  botao: {
    backgroundColor: '#007736',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '100%',
    alignItems: 'left',
  },
  emailText: {
    fontSize: 14,
    color: '#616161',
    marginBottom: 20,
    fontStyle: 'italic', 
 },
  botaoTexto: {
    color: '#bbbbbb',
    fontSize: 16,
    fontWeight: '600',
  },
});
export default CartaoPerfil;