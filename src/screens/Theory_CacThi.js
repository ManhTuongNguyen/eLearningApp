import * as React from 'react';
import { Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Divider, useTheme, ListItem } from '@rneui/themed';



function TwelveTenses({ navigation }) {
    const { theme } = useTheme();
    return (
        <SafeAreaView>
            <ScrollView>
            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'ThiHienTaiDon',
                name: 'Thì hiện tại đơn'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>Thì hiện tại đơn</ListItem.Title>
                    <ListItem.Content><Text style={{color: "#ccc"}}>Simple Present</Text></ListItem.Content>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>          

            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'ThiHienTaiTiepDien',
                name: 'Thì hiện tại tiếp diễn'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>Thì hiện tại tiếp diễn</ListItem.Title>
                    <ListItem.Content><Text style={{color: "#ccc"}}>Present Continous</Text></ListItem.Content>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>          

            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'ThiHienTaiHoanThanh',
                name: 'Thì hiện tại hoàn thành'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>Thì hiện tại hoàn thành</ListItem.Title>
                    <ListItem.Content><Text style={{color: "#ccc"}}>Present Perfect</Text></ListItem.Content>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>          

            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'ThiHienTaiHoanThanhTiepDien',
                name: 'Thì hiện hoành thành tiếp diễn'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>Thì hiện tại hoàn thành tiếp diễn</ListItem.Title>
                    <ListItem.Content><Text style={{color: "#ccc"}}>Present Perfect Continous</Text></ListItem.Content>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>          

            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'ThiQuaKhuDon',
                name: 'Thì quá khứ đơn'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>Thì quá khứ đơn</ListItem.Title>
                    <ListItem.Content><Text style={{color: "#ccc"}}>Past Simple</Text></ListItem.Content>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>          

            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'ThiQuaKhuTiepDien',
                name: 'Thì quá khứ tiếp diễn'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>Thì quá khứ tiếp diễn</ListItem.Title>
                    <ListItem.Content><Text style={{color: "#ccc"}}>Past Continous</Text></ListItem.Content>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>          

            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'ThiQuaKhuHoanThanh',
                name: 'Thì quá khứ hoàn thành'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>Thì quá khứ hoàn thành</ListItem.Title>
                    <ListItem.Content><Text style={{color: "#ccc"}}>Past Perfect</Text></ListItem.Content>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>          

            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'ThiQuaKhuHoanThanhTiepDien',
                name: 'Thì quá khứ hoàn thành tiếp diễn'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>Thì quá khứ hoàn thành tiếp diễn</ListItem.Title>
                    <ListItem.Content><Text style={{color: "#ccc"}}>Past Perfect Continous</Text></ListItem.Content>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>          

            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'ThiTuongLaiDon',
                name: 'Thì tương lai đơn'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>Thì tương lai đơn</ListItem.Title>
                    <ListItem.Content><Text style={{color: "#ccc"}}>Simple Future</Text></ListItem.Content>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>          

            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'ThiTuongLaiTiepDien',
                name: 'Thì tương lai tiếp diễn'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>Thì tương lai tiếp diễn</ListItem.Title>
                    <ListItem.Content><Text style={{color: "#ccc"}}>Future Continous</Text></ListItem.Content>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>          

            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'ThiTuongLaiHoanThanh',
                name: 'Thì tương lai hoàn thành'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>Thì tương lai hoàn thành</ListItem.Title>
                    <ListItem.Content><Text style={{color: "#ccc"}}>Future Perfect</Text></ListItem.Content>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>          

            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'ThiTuongLaiHoanThanhTiepDien',
                name: 'Thì tương lai hoàn thành tiếp diễn'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>Thì tương lai hoàn thành tiếp diễn</ListItem.Title>
                    <ListItem.Content><Text style={{color: "#ccc"}}>Future Perfect Continous</Text></ListItem.Content>
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


export default TwelveTenses