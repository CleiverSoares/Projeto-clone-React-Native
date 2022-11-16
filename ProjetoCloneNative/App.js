import { StyleSheet, View, StatusBar, Image, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import Menu from 'react-native-vector-icons/Feather'
import Pesquisa from 'react-native-vector-icons/AntDesign'
import Seta from 'react-native-vector-icons/AntDesign'
import Carro from 'react-native-vector-icons/AntDesign'
import Logo from './assets/logo.png'
import carrocel from './assets/carrocel.png'
import { Linking } from 'react-native';
import { styles } from "./estilo";


export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <View style={styles.navBar}>
          <View style={styles.nav}>
            <TouchableOpacity>
              <Menu name="menu" style={{ marginLeft: 15, fontSize: 20, color: "#000" }} />
            </TouchableOpacity>
          </View>
          <View style={styles.nav1}>
            <Image source={Logo} style={{ width: 80, height: 50, alignItems: "center" }} />
          </View>

          <View style={styles.nav2}>
          <TouchableOpacity style={{flexDirection:"row"}}>
            <Pesquisa style={{ marginRight: 25 }} name="search1" size={20} color="#000" />
            <Carro style={{ marginRight: 15 }} name="shoppingcart" size={20} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
        <Image source={carrocel} style={{ width: 414, height: 240 }} />

        <Text style={styles.textosPrincipais}>Libere o potencial dos seus funcionários </Text>

        <View style={styles.textosSecundarios}>
          <Text >
            Mais de 12,5 mil empresas em todo o mundo confiam na Udemy Business. {' '}
            <Text
              style={styles.hyperlinkStyle}
              onPress={() => {
                Linking.openURL('https://reactnative.dev');
              }}>

              Descubra o que podemos fazer pela sua empresa
            </Text>
          </Text>
        </View>

        <View style={styles.imput}>
          <TextInput placeholder="O que você quer aprender" />
          <TouchableOpacity>
            <Pesquisa name="search1" style={styles.iconeFinal} />
          </TouchableOpacity>
        </View>
        <Text style={styles.textosPrincipais}>Uma ampla seleção de cursos</Text>
        <Text style={styles.textosSecundarios}>Escolha entre 204.000 cursos em vídeo online com novas adições publicadas mensalmente</Text>

        <View style={styles.formatacaoFinal}>
          <TouchableOpacity>
            <Text style={styles.textoFinal}>Python</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Seta name="down" style={styles.iconeFinal} />
          </TouchableOpacity>
        </View>
        <View style={styles.formatacaoFinal}>
          <TouchableOpacity>
            <Text style={styles.textoFinal}>Excel</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Seta name="down" style={styles.iconeFinal} />
          </TouchableOpacity>
        </View>
        <View style={styles.formatacaoFinal}>
          <TouchableOpacity>
            <Text style={styles.textoFinal}>Desenvolvimento Web</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Seta name="down" style={styles.iconeFinal} />
          </TouchableOpacity>
        </View>
        <View style={styles.formatacaoFinal}>
          <TouchableOpacity>
            <Text style={styles.textoFinal}>JavaScript</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Seta name="down" style={styles.iconeFinal} />
          </TouchableOpacity>
        </View>
        {/*         <View style={styles.formatacaoFinal}>
          <Text style={styles.textoFinal}>Data Science</Text>
          <Seta name="down" style={styles.iconeFinal} />
        </View>
        <View style={styles.formatacaoFinal}>
          <Text style={styles.textoFinal}>Certificado AWS</Text>
          <Seta name="down" style={styles.iconeFinal} />
        </View>
        <View style={styles.formatacaoFinal}>
          <Text style={styles.textoFinal}>Desenho</Text>
          <Seta name="down" style={styles.iconeFinal} />
        </View> */}
        <View style={styles.formatacaoFinal} />
      </View>
    </ScrollView>
  );
}


