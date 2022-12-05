import React, { useState } from "react";
import {
    StyleSheet, StatusBar,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from "react-native";

function ForgetPassword({navigation}) {
    const [email, setEmail] = useState("");

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../images/Logo.png")} />
            <View style={{ marginTop: 250 }}></View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Tên tài khoản"
                    placeholderTextColor="#333"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>Lấy lại mật khẩu</Text>
            </TouchableOpacity>
            
            <View style={styles.divider}></View>

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
        backgroundColor: "#f5f7fa",
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

export default ForgetPassword;