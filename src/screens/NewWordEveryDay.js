import React, { useState, useEffect } from 'react';
import {
    StyleSheet, Text,
    TouchableOpacity,
    ActivityIndicator,
    LayoutAnimation,
    UIManager,
    View, Platform,
    ScrollView
} from 'react-native';
import Tts from 'react-native-tts'
import { Button, Card } from '@rneui/base';
import Icon from 'react-native-vector-icons/Feather';
import { api } from '../config';
import COLORS from '../colors/Color';
import Ionicons from 'react-native-vector-icons/Ionicons';


Tts.setDefaultLanguage('en-GB')


const ExpandableComponent = ({ item, onClickFunction }) => {
    const [layoutHeight, setLayoutHeight] = useState(0);

    useEffect(() => {
        if (item.isExpanded) {
            setLayoutHeight(null);
        } else {
            setLayoutHeight(0);
        }
    }, [item.isExpanded]);

    return (
        <View>
            <TouchableOpacity
                onPress={onClickFunction}
                style={styles.header}>
                <Text style={styles.headerText}>{item.category_name}</Text>
            </TouchableOpacity>
            <View
                style={{
                    height: layoutHeight,
                    overflow: 'hidden',
                }}>
                {item.subcategory.map((item, key) => (
                    <View
                        key={key}
                        style={styles.content}>
                        <Text style={styles.text}>
                            {key}. {item}
                        </Text>
                    </View>
                ))}
            </View>
        </View>
    );
};


export default function Dictionary() {

    const [loading, setLoading] = useState(false);
    const [checkedWord, setCheckedWord] = useState("");
    const [pronounce, setPronounce] = useState("");
    const [listDataSource, setListDataSource] = useState([]);
    useEffect(() => {
        getInfo();
    }, [])

    const UpdateData = (listNoun, listVerb, listAdjective, listAdverb, listExample) => {
        setListDataSource([]);
        if (listNoun.length > 0) {
            setListDataSource(oldArray => [...oldArray, {
                isExpanded: false,
                category_name: 'Danh từ',
                subcategory: listNoun,
            }]);
        }

        if (listAdjective.length > 0) {
            setListDataSource(oldArray => [...oldArray, {
                isExpanded: false,
                category_name: 'Tính từ',
                subcategory: listAdjective,
            }]);
        }

        if (listVerb.length > 0) {
            setListDataSource(oldArray => [...oldArray, {
                isExpanded: false,
                category_name: 'Động từ',
                subcategory: listVerb,
            }]);
        }
        if (listAdverb.length > 0) {
            setListDataSource(oldArray => [...oldArray, {
                isExpanded: false,
                category_name: 'Trạng từ',
                subcategory: listAdverb,
            }]);
        }

        if (listExample.length > 0) {
            setListDataSource(oldArray => [...oldArray, {
                isExpanded: false,
                category_name: 'Ví dụ',
                subcategory: listExample,
            }]);
        }
    };


    const getInfo = () => {
        setLoading(true);
        let url = `${api.getRandomWord}`;

        return fetch(url)
            .then((data) => {
                return data.json()
            })
            .then((res) => {
                var wordInput = res[0].word.toUpperCase();
                var _pronounce = res[0].phonetic;
                if (_pronounce === undefined) {
                    for (let i = 0; i < res[0].phonetics.length; i++) {
                        if (_pronounce === undefined) {
                            _pronounce = res[0].phonetics[i].text;
                        }
                    }
                }
                setCheckedWord(wordInput);
                setPronounce(_pronounce);

                let listNoun = [];
                let listVerb = [];
                let listAdjective = [];
                let listAdverb = [];
                let listExample = [];
                res.map((data) => {
                    data.meanings.map((meaning) => {
                        meaning.definitions.map((definition) => {
                            if (definition.example) {
                                listExample.push(definition.example);
                            }
                            if (meaning.partOfSpeech === 'noun') {
                                listNoun.push(definition.definition);
                            }
                            else if (meaning.partOfSpeech === 'verb') {
                                listVerb.push(definition.definition);
                            }
                            else if (meaning.partOfSpeech === 'adjective') {
                                listAdjective.push(definition.definition);
                            }
                            else if (meaning.partOfSpeech === 'adverb') {
                                listAdverb.push(definition.definition);
                            }
                        })
                    })
                })
                UpdateData(listNoun, listVerb, listAdjective, listAdverb, listExample);
                setLoading(false);
            }).catch((error) => {
                console.log(error);
                alert("Từ không tồn tại!");
                setLoading(false);
            });
    };

    const speak = () => {
        if (checkedWord == null || checkedWord == '') {
            return;
        }
        Tts.speak(checkedWord);
    }

    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const updateLayout = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        if (listDataSource[index].subcategory.length === 0) {
            return;
        }
        const array = [...listDataSource];
        // array[index]['isExpanded'] = !array[index]['isExpanded']; // Multiple open

        // Single open
        array.map((value, placeindex) =>
            placeindex === index
                ? (array[placeindex]['isExpanded'] = !array[placeindex]['isExpanded'])
                : (array[placeindex]['isExpanded'] = false)
        );
        setListDataSource(array);
    };

    const ListData = () => {
        return (
            <ScrollView style={{ width: "90%" }}>
                <Text style={styles.info}>Phát âm: {pronounce}</Text>
                <Card.Divider />
                {listDataSource.map((item, key) => (
                    <View>
                        <ExpandableComponent
                            key={item.category_name}
                            onClickFunction={() => {
                                updateLayout(key);
                            }}
                            item={item}
                        />
                        <View style={{ marginTop: 10 }}></View>
                    </View>
                ))}
            </ScrollView>
        );
    };


    return !loading ? (
        <View style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <TouchableOpacity style={{ width: 96, marginTop: 15 }}>
                    <Button color="#139190" containerStyle={{ borderRadius: 10 }}
                        disabled={loading}
                        onPress={() => {
                            getInfo();
                        }}>
                        Từ khác
                        <Ionicons name="reload" size={18} color="#fff" style={{marginLeft: 7}} />
                    </Button>
                </TouchableOpacity>
                <View style={{ fontSize: 24, flexDirection: "row", alignItems: 'center', marginTop: 20, marginLeft: "17%"}}>
                    <Text style={{fontSize: 28, fontWeight: '700', color: "#454444"}}>
                        {checkedWord}
                    </Text>
                    <View style={{marginLeft: 20, width: "14%"}}>
                    <TouchableOpacity
                        style={{ paddingLeft: 14}}
                        onPress={() => {
                            speak();
                        }}>
                        <Icon name="volume-2" size={28} color="#454444" />
                    </TouchableOpacity>
                    </View>
                </View>
                <Card.Divider />

                <ListData />
            </View>

        </View>
    )
        :
        (
            <View style={styles.container}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                <TouchableOpacity style={{ width: 96, marginTop: 15 }}>
                    <Button color="#139190" containerStyle={{ borderRadius: 10 }}
                        disabled={loading}
                        onPress={() => {
                            getInfo();
                        }}>
                        Từ khác
                        <Ionicons name="reload" size={18} color="#fff" style={{marginLeft: 7}} />
                    </Button>
                </TouchableOpacity>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.background }}>
                        <ActivityIndicator size="large" color="#F49D1A" />
                    </View>
                </View>
            </View>
        );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingTop: 0
    },
    info: {
        color: "#000",
        fontSize: 18,
        marginBottom: 10,
        marginLeft: 10,
    },
    header: {
        backgroundColor: '#9ED5C5',
        padding: 20,
        color: "#fff",
        borderRadius: 20
    },
    headerText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff'
    },
    text: {
        fontSize: 16,
        color: '#000',
        padding: 10,
    },
    content: {
        marginTop: 5,
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'rgba(222, 245, 229, 0.4)',
    },
});
