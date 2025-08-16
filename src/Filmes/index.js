import React ,{useState} from "react";
import { View, Text, StyleSheet,Image,TouchableOpacity,Modal} from 'react-native';

import Detalhes from '../Detalhes'


export default function Filmes({ data }) {
    const [visibleModal, setVisibleModal] = useState(false);


    return (
        <View>

            <View style ={styles.card}>
            <Text style = {styles.titulo}>{data.nome}</Text>
            <Image
            source={{uri: data.foto}}
            style={styles.capa}
            />

            <View style = {styles.areaBotao}>
                <TouchableOpacity style = {styles.botao} onPress={() => setVisibleModal(true)}>
                    <Text style = {styles.botaoTexto}> LEIA MAIS </Text>
                </TouchableOpacity>
            </View>

            </View>

            <Modal  transparent = {true} animationType ="fade" visible = {visibleModal} >
                <Detalhes filme={data} voltar={ () => setVisibleModal(false) } />
                
            </Modal>


        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:'#ffffffff',
        margin:15,
        elevation:15,
        marginTop: 25,
    },
    titulo:{
        padding: 15,
        fontSize: 15,
        fontWeight: 'bold',

    },
    capa:{
        height:250,
        zIndex: 2,
    },
    areaBotao:{
        alignItems: 'flex-end',
        marginTop: -45,
        zIndex: 9,
        
    },
    botao:{
        width: 100,
        backgroundColor: '#ff0000ab',
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 20,
        borderBottomEndRadius: 15,
        marginRight: 5,
       


    },
    botaoTexto:{
        color: '#ffffffff',
        textAlign: 'center',

    },



});
