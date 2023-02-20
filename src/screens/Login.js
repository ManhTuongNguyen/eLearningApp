import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert
} from "react-native";
import { api } from "../config";
import COLORS from '../colors/Color';


function Login({ navigation }) {
    const [email, setEmail] = useState("admin");
    const [password, setPassword] = useState("123");
    const [loading, setLoading] = useState(false);

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../images/Logo.png")} />
            <View style={{ marginTop: 250 }}></View>
            <View style={styles.inputView}>
                <TextInput
                    defaultValue={email}
                    style={styles.TextInput}
                    placeholder="Tên tài khoản"
                    placeholderTextColor="#333"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    defaultValue={password}
                    style={styles.TextInput}
                    placeholder="Mật khẩu"
                    placeholderTextColor="#333"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity
                style={styles.loginBtn}
                disabled={loading}
                onPress={() => {
                    setLoading(true);
                    let login_url = api.login;
                    fetch(login_url, {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            username: email,
                            password: password
                        })
                    }).then(res => res.json()).then(json => {
                        setLoading(false);
                        if (json.accept == 0) {
                            Alert.alert(
                                json.type == 1 ? "Thành công" : json == 2 ? "Cảnh báo" : "Lỗi",
                                json.message,
                                [
                                    { text: "OK" }
                                ]
                            );
                        }
                        if (json.accept == 1) {
                            navigation.navigate('HomeScreen', {
                                username: email,
                                user_id: json.user_id
                            })
                        }
                    }).catch(error => {
                        setLoading(false);
                        if (error.message.includes('Network request failed')) {
                            Alert.alert(
                                "Thông báo",
                                "Không thể kết nối đến server!",
                                [
                                    { text: "OK" }
                                ]
                            );
                        }
                    })
                }}>
                <Text style={styles.loginText}>{loading ? 'Đang đăng nhập...' : 'Đăng nhập'}</Text>
            </TouchableOpacity>

            <View style={styles.divider}></View>

            <TouchableOpacity onPress={() => {
                navigation.navigate("ForgetPassword");
            }}>
                <Text style={styles.btn}>Quên mật khẩu?</Text>
            </TouchableOpacity>

            <View>
                <Text style={styles.text}>Chưa có tài khoản?</Text>
            </View>
            <TouchableOpacity onPress={() => {
                navigation.navigate('SignUp')
            }}>
                <Text style={styles.btn}>Đăng ký</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        alignItems: "center",
        justifyContent: 'center',
    },

    image: {
        position: 'absolute',
        top: -190,
        width: "80%",
        height: "80%",
        resizeMode: "contain",
    },

    divider: {
        borderWidth: 1,
        borderColor: "#dee0e3",
        width: "80%",
        marginVertical: 30
    },

    inputView: {
        backgroundColor: "#dee0e3",
        borderRadius: 10,
        width: "95%",
        height: 60,
        marginBottom: 20,
        alignItems: "flex-start",
    },

    TextInput: {
        height: 50,
        width: "95%",
        flex: 1,
        padding: 10,
        marginHorizontal: 20,
        fontSize: 18,
        color: "#000"
    },

    text: {
        color: '#969ba3',
        marginBottom: 10
    },

    btn: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 30,
        color: "#3c3d3d",
        backgroundColor: "#94caff",
        borderRadius: 15,
        fontSize: 18
    },

    loginBtn: {
        width: "95%",
        borderRadius: 10,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#2192FF",
    },

    loginText: {
        fontSize: 20,
        color: "#fff"
    }
});

export default Login;