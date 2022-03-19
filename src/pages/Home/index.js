import { Text, View, StatusBar, TouchableOpacity, ScrollView, Modal, TextInput, KeyboardAvoidingView } from 'react-native';
import { useEffect, useState } from 'react'
import styles from "./style";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home() {

    const [nota, setNota] = useState([]);
    const [titulo, setTitulo] = useState();
    const [data, setData] = useState();
    const [texto, setTexto] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const [teste, setTeste] = useState(false);

    function adicionaNota() {
        var objetoNota = {
            titulo: titulo,
            data: data,
            texto: texto,
            id: nota.length ? nota[nota.length - 1].id + 1 : 1,
            favorito: 0
        }
        setNota([...nota, objetoNota]);
        setModalVisible(false)
    }

    function removeNota(id) {
        setNota(nota.filter(item => item.id != id))
    }

    function favoritar(index, id, titulo, data, texto, favorito, notas) {
        var subNota = notas;

        subNota[index] = {
            titulo: titulo,
            data: data,
            texto: texto,
            id: id,
            favorito: favorito
        }
        //NÃO RENDERIZA APÓS SER EXECUTADO, RENDERIZA APENAS QUANDO O PROXIMO STATE É ALTERADO, ESTRANHO
        setNota(subNota);

        //STATE EXECURADO E FRONT-END RENDERIZADO
        setTeste(!teste);
    }

    useEffect(() =>{
       
    },[])

    return (
        <View style={styles.container}>


            <StatusBar
                barStyle="dark-content"
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                style={{ flex: 1 }}
            >
                <View style={{ justifyContent: "flex-end", flex: 1 }}>
                    <View style={styles.modal}>
                        <View>
                            <View style={{ width: "100%", alignItems: "center", marginBottom: 30 }}>
                                <View style={{ width: "50%", height: 3, backgroundColor: "silver", borderRadius: 10 }} />
                            </View>
                            <Text style={{ fontWeight: "bold", fontSize: 20, }}>Nova Nota</Text>
                            <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={-64}>
                                <View style={{ marginTop: 20 }}>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={(text) => setTitulo(text)}
                                        value={titulo}
                                        placeholder="Título"
                                    />
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={(text) => setData(text)}
                                        value={data}
                                        placeholder="Data"
                                    />
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={(text) => setTexto(text)}
                                        value={texto}
                                        placeholder="Texto"
                                    />
                                </View>
                            </KeyboardAvoidingView>
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
                            <View style={{ paddingHorizontal: 5, flex: 1 }}>
                                <TouchableOpacity onPress={adicionaNota} style={{ backgroundColor: "#137eff", padding: 20, borderRadius: 10, alignItems: "center" }}>
                                    <Text style={{ color: "white", fontWeight: "bold", }}>Adicionar</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ paddingHorizontal: 5, flex: 1 }}>
                                <TouchableOpacity onPress={() => setModalVisible(false)} style={{ backgroundColor: "#fa5838", padding: 20, borderRadius: 10, alignItems: "center" }}>
                                    <Text style={{ color: "white", fontWeight: "bold", }}>Cancelar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </View>
            </Modal>
            <View style={styles.area}>
                <View style={{flexDirection: "row", alignItems: "center", backgroundColor: "white", borderRadius: 30, paddingHorizontal: 10, marginBottom: 20}}>
                    <Icon name="search" size={15} color={"silver"} style={{marginRight: 10}}/>
                    <View style={{flex: 1}}>
                        <TextInput
                            placeholder='Search'
                            style={{height: 40}}
                        />
                    </View>
                </View>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.btnAllNotes}>
                        <Icon name="th-list" size={15} color={"white"} />
                        <Text style={styles.textBtnAllNotes}>All Notes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnAddNotes} onPress={() => setModalVisible(true)}>
                        <Icon name="file-text" size={15} color={"white"} />
                        <Text style={styles.textBtnAllNotes}>Add Notes</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>Dia</Text>
                </View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginBottom: 10 }}>
                    <TouchableOpacity style={styles.dia}>
                        <Text style={{ color: "silver", fontWeight: "bold", fontSize: 12 }}>1</Text>
                        <Text style={{ color: "silver", fontWeight: "bold", fontSize: 12 }}>Seg</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.dia, { backgroundColor: "#137eff" }]}>
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 12 }}>2</Text>
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 12 }}>Ter</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.dia}>
                        <Text style={{ color: "silver", fontWeight: "bold", fontSize: 12 }}>3</Text>
                        <Text style={{ color: "silver", fontWeight: "bold", fontSize: 12 }}>Qua</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.dia}>
                        <Text style={{ color: "silver", fontWeight: "bold", fontSize: 12 }}>4</Text>
                        <Text style={{ color: "silver", fontWeight: "bold", fontSize: 12 }}>Qui</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.dia}>
                        <Text style={{ color: "silver", fontWeight: "bold", fontSize: 12 }}>5</Text>
                        <Text style={{ color: "silver", fontWeight: "bold", fontSize: 12 }}>Sex</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.dia}>
                        <Text style={{ color: "silver", fontWeight: "bold", fontSize: 12 }}>6</Text>
                        <Text style={{ color: "silver", fontWeight: "bold", fontSize: 12 }}>Sab</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.dia}>
                        <Text style={{ color: "silver", fontWeight: "bold", fontSize: 12 }}>7</Text>
                        <Text style={{ color: "silver", fontWeight: "bold", fontSize: 12 }}>Dom</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.dia}>
                        <Text style={{ color: "silver", fontWeight: "bold", fontSize: 12 }}>8</Text>
                        <Text style={{ color: "silver", fontWeight: "bold", fontSize: 12 }}>Seg</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.dia}>
                        <Text style={{ color: "silver", fontWeight: "bold", fontSize: 12 }}>9</Text>
                        <Text style={{ color: "silver", fontWeight: "bold", fontSize: 12 }}>Ter</Text>
                    </TouchableOpacity>
                </ScrollView>
                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                    <View style={{ paddingHorizontal: 10 }}>
                        {nota.map(
                            (notas, index) => {
                                return (
                                    <View key={index}>
                                        <View style={{ marginBottom: 5, flexDirection: "row" }}>
                                            <Icon name="clock-o" size={20} color={"silver"} />
                                            <Text style={{ color: "silver" }}>  19h00</Text>
                                        </View>
                                        <View style={styles.nota}>
                                            <View style={styles.headerNota}>
                                                <View style={{ paddingLeft: 20, borderLeftColor: "#8b5edd", borderLeftWidth: 7 }}>
                                                    <Text style={styles.tituloNota}>{notas.titulo}</Text>
                                                    <Text style={styles.dataNota}>{notas.data}</Text>
                                                </View>
                                            </View>
                                            <View style={styles.corpoNota}>
                                                <Text style={styles.textNota}>{notas.texto}</Text>
                                            </View>
                                            <View style={styles.footerNota}>
                                                <View style={{ flexDirection: "row" }}>
                                                    {notas.favorito == 0 ?
                                                        <TouchableOpacity onPress={() => favoritar(index, notas.id, notas.titulo, notas.data, notas.texto, 1, nota)}>
                                                            <Icon name="star-o" size={20} color={"#323232"} />
                                                        </TouchableOpacity>
                                                        :
                                                        <TouchableOpacity onPress={() => favoritar(index, notas.id, notas.titulo, notas.data, notas.texto, 0, nota)}>
                                                            <Icon name="star" size={20} color={"orange"} />
                                                        </TouchableOpacity>
                                                    }
                                                    <TouchableOpacity onPress={() => removeNota(notas.id)}>
                                                        <Icon name="trash-o" size={20} color={"#323232"} style={{ marginLeft: 20 }} />
                                                    </TouchableOpacity>
                                                </View>
                                                <Icon name="ellipsis-v" size={20} color={"#323232"} />
                                            </View>
                                        </View>
                                    </View>
                                )
                            }
                        )}
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

