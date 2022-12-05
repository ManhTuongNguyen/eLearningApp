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


function UpdatePassword({ route, navigation }) {
    const { user_id } = route.params;
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [reNewPassword, setReNewPassword] = useState("");
    const [loading, setLoading] = useState(false);


    const updatePassword = () => {
        setLoading(true);
        let update_password_api = api.updatePassword;
        fetch(update_password_api, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: user_id,
                password: oldPassword,
                new_password: newPassword,
                re_new_password: reNewPassword,
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
                Alert.alert(
                    json.type == 1 ? "Thành công" : json == 2 ? "Cảnh báo" : "Lỗi",
                    json.message,
                    [
                        {
                            text: "OK", onPress: () => {
                                navigation.goBack()
                            }
                        }
                    ]
                );
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
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../images/Logo.png")} />
            <View style={{ marginTop: 250 }}></View>
            <View style={styles.inputView}>
                <TextInput
                    defaultValue={oldPassword}
                    style={styles.TextInput}
                    placeholder="Nhập mật khẩu cũ"
                    placeholderTextColor="#333"
                    secureTextEntry={true}
                    onChangeText={setOldPassword}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    defaultValue={newPassword}
                    style={styles.TextInput}
                    placeholder="Nhập mật khẩu mới"
                    placeholderTextColor="#333"
                    secureTextEntry={true}
                    onChangeText={setNewPassword}
                />
            </View>

            <View style={[styles.inputView, {marginBottom: 80}]}>
                <TextInput
                    defaultValue={reNewPassword}
                    style={styles.TextInput}
                    placeholder="Nhập lại mật khẩu mới"
                    placeholderTextColor="#333"
                    secureTextEntry={true}
                    onChangeText={setReNewPassword}
                />
            </View>

            <TouchableOpacity
                style={styles.loginBtn}
                disabled={loading}
                onPress={() => {
                    updatePassword();
                }}>
                <Text style={styles.loginText}>{loading ? 'Đang xử lý...' : 'Thay đổi mật khẩu'}</Text>
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

export default UpdatePassword;