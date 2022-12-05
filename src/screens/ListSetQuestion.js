import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, RefreshControl } from 'react-native';
import COLORS from '../colors/Color';
import { api } from '../config';


const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

let reload = false;


function SetQuestions({ route, navigation }) {
    const { user_id } = route.params;
    const [setQuestionsQuantity, setSetQuestionsQuantity] = useState([...Array(0).keys()]);
    const [isLoading, setIsLoading] = useState(true);
    const [score, setScore] = useState([]);
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => {
            reload = !reload;
            setRefreshing(false);
        });
    }, []);

    useEffect(() => {
        fetch(`${api.getListSetQuestion}?user_id=${user_id}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(json => {
                setScore(json);
                console.log(json);
                setSetQuestionsQuantity([...Array(json.length).keys()]);
                setIsLoading(false);
            })
            .catch(error => {
                setIsLoading(false);
                console.log(error.message);
            });
    }, [reload]);



    return !isLoading ? (
        <View style={{ flex: 1, backgroundColor: COLORS.background, justifyContent: 'center' }}>
            <ScrollView contentContainerStyle={{
                alignItems: 'flex-start',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginLeft: 5,
                width: "100%"
            }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }>
                <TouchableOpacity style={{ width: "47%" }}
                    onPress={() => {
                        navigation.navigate('Questions', {
                            index: -1,
                            name: `Bộ đề thử nghiệm`,
                        })
                    }}>
                    <View style={{ marginTop: 20, paddingVertical: 20, paddingHorizontal: 40, width: "95%", backgroundColor: "#76d684", borderRadius: 25 }}>
                        <Text style={styles.title}>Thử nghiệm</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: "47%" }}
                    onPress={() => {
                        navigation.navigate('Questions', {
                            name: `Bộ đề ngẫu nhiên`
                        })
                    }}>
                    <View style={{ marginTop: 20, paddingVertical: 20, paddingHorizontal: 40, width: "95%", backgroundColor: "#76d684", borderRadius: 25 }}>
                        <Text style={styles.title}>Ngẫu nhiên</Text>
                    </View>
                </TouchableOpacity>

                {setQuestionsQuantity.map((prop, key) => {
                    return (
                        <TouchableOpacity style={{ width: "47%" }}
                            onPress={() => {
                                navigation.navigate('Questions', {
                                    index: key,
                                    user_id: user_id,
                                    name: `Bộ đề thứ ${key + 1}`,
                                })
                            }}>
                            <View style={{ marginTop: 20, width: "95%", backgroundColor: "#63B7AF", borderRadius: 25, paddingVertical: 20, paddingHorizontal: 40 }}>
                                <Text style={styles.title}>Bộ đề {`${key + 1}`.padStart(2, '0')}</Text>
                                <Text style={{ color: "#222" }}>{score[key]}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
            <View style={{ marginBottom: 10 }}></View>
        </View>
    ) : (
        <View style={{ flex: 1, backgroundColor: COLORS.background, justifyContent: 'center' }}>
            <ActivityIndicator size="large" color="#F49D1A" />
        </View>);
}


const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: "#fff"
    }
});

export default SetQuestions;