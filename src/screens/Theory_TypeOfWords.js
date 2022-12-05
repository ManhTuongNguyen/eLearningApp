import * as React from 'react';
import { View, Text, Button, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dimensions } from 'react-native';
import { Card, Divider, useTheme, ListItem } from '@rneui/themed';


function TypeOfWords({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView>
            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'DanhTu',
                name: 'Danh từ'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>Danh từ</ListItem.Title>
                    <ListItem.Content><Text style={{color: "#ccc"}}>Nouns</Text></ListItem.Content>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'DaiTu',
                name: 'Đại từ'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>Đại từ</ListItem.Title>
                    <ListItem.Content><Text style={{color: "#ccc"}}>Pronouns</Text></ListItem.Content>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'DongTu',
                name: 'Động từ'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>Động từ</ListItem.Title>
                    <ListItem.Content><Text style={{color: "#ccc"}}>Verbs</Text></ListItem.Content>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'TinhTu',
                name: 'Tính từ'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>Tính từ</ListItem.Title>
                    <ListItem.Content><Text style={{color: "#ccc"}}>Adjective</Text></ListItem.Content>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'TrangTu',
                name: 'Trạng từ'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>Trạng từ</ListItem.Title>
                    <ListItem.Content><Text style={{color: "#ccc"}}>Adverb</Text></ListItem.Content>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'GioiTu',
                name: 'Giới từ'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>Giới từ</ListItem.Title>
                    <ListItem.Content><Text style={{color: "#ccc"}}>Prepositions</Text></ListItem.Content>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'LienTu',
                name: 'Liên từ'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>Liên từ</ListItem.Title>
                    <ListItem.Content><Text style={{color: "#ccc"}}>Conjunctions</Text></ListItem.Content>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'ThanTu',
                name: 'Thán từ'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>Thán từ</ListItem.Title>
                    <ListItem.Content><Text style={{color: "#ccc"}}>Interjections</Text></ListItem.Content>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'MaoTu',
                name: 'Mạo từ'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>Mạo từ</ListItem.Title>
                    <ListItem.Content><Text style={{color: "#ccc"}}>Articles</Text></ListItem.Content>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>

            {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
            </ScrollView>
        </SafeAreaView >
    );
}


export default TypeOfWords