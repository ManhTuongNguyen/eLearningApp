import * as React from 'react';
import { Linking, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, Share, View, Text } from 'react-native';
import { Divider, ListItem } from '@rneui/themed';
import COLORS from '../colors/Color';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const onShare = async () => {
  try {
    const result = await Share.share({
      message:
        'https://github.com/ManhTuongNguyen/eLearningApp',
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};


function HomeScreen({ route, navigation }) {
  const { user_id } = route.params;
  return (
    <SafeAreaView>
      <ScrollView style={{ width: "94%", marginLeft: "3%", marginTop: 15 }}>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RandomWord')
          }}>
          <View style={styles.card}>
            <View style={styles.leftContainer}>
              <View style={styles.iconContainer}>
                <FontAwesome name="wpforms" size={25} style={styles.iconStyle} />
              </View>
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.title}>Từ mới mỗi ngày</Text>
            </View>
          </View>
          <Divider width={10} color="#EEEEEE" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          navigation.navigate('Dictionary')
        }}>
          <View style={styles.card}>
            <View style={styles.leftContainer}>
              <View style={styles.iconContainer}>
                <Fontisto name="zoom" size={25} style={styles.iconStyle} />
              </View>
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.title}>Từ điển</Text>
            </View>
          </View>
          <Divider width={10} color="#EEEEEE" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          navigation.navigate('Grammar')
        }}>
          <View style={styles.card}>
            <View style={styles.leftContainer}>
              <View style={styles.iconContainer}>
                <Ionicons name="book" size={25} style={styles.iconStyle} />
              </View>
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.title}>Ngữ pháp</Text>
            </View>
          </View>
          <Divider width={10} color="#EEEEEE" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          navigation.navigate('SetQuestions', {
            user_id: user_id
          })
        }}>
          <View style={styles.card}>
            <View style={styles.leftContainer}>
              <View style={styles.iconContainer}>
                <FontAwesome name="pencil-square-o" size={25} style={styles.iconStyle} />
              </View>
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.title}>Bài tập</Text>
            </View>
          </View>
          <Divider width={10} color="#EEEEEE" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          Linking.openURL('fb://profile/100023495001114');
        }}>
          <View style={styles.card}>
            <View style={styles.leftContainer}>
              <View style={styles.iconContainer}>
                <MaterialIcons name="contacts" size={25} style={styles.iconStyle} />
              </View>
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.title}>Liên hệ</Text>
            </View>
          </View>
          <Divider width={10} color="#EEEEEE" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          alert("Chưa hỗ trợ chức năng này!");
        }}>
          <View style={styles.card}>
            <View style={styles.leftContainer}>
              <View style={styles.iconContainer}>
                <FontAwesome name="star-o" size={25} style={styles.iconStyle} />
              </View>
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.title}>Đánh giá</Text>
            </View>
          </View>
          <Divider width={10} color="#EEEEEE" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          Linking.openURL('https://github.com/ManhTuongNguyen/eLearningApp');
        }}>
          <View style={styles.card}>
            <View style={styles.leftContainer}>
              <View style={styles.iconContainer}>
                <Ionicons name="md-information-circle-outline" size={25} style={styles.iconStyle} />
              </View>
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.title}>Thông tin</Text>
            </View>
          </View>
          <Divider width={10} color="#EEEEEE" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          onShare();
        }}>
          <View style={styles.card}>
            <View style={styles.leftContainer}>
              <View style={styles.iconContainer}>
                <Ionicons name="share-social-outline" size={25} style={styles.iconStyle} />
              </View>
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.title}>Chia sẻ</Text>
            </View>
          </View>
          <Divider width={10} color="#EEEEEE" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          navigation.navigate('UpdatePassword', {
            user_id: user_id
          })
        }}>
          <View style={styles.card}>
            <View style={styles.leftContainer}>
              <View style={styles.iconContainer}>
                <MaterialIcons name="security" size={25} style={styles.iconStyle} />
              </View>
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.title}>Đổi mật khẩu</Text>
            </View>
          </View>
          <Divider width={10} color="#EEEEEE" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          navigation.goBack()
        }}>
          <View style={styles.card}>
            <View style={styles.leftContainer}>
              <View style={styles.iconContainer}>
                <MaterialIcons name="logout" size={25} style={styles.iconStyle} />
              </View>
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.title}>Đăng xuất</Text>
            </View>
          </View>
          <Divider width={10} color="#EEEEEE" />
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView >
  );
}


const styles = StyleSheet.create({
  card: {
    height: 65,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  leftContainer: {
    width: "20%",
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1
  },
  iconContainer: {
    padding: 10,
    borderRadius: 30,
    backgroundColor: '#58B4AE',
    aspectRatio: 1,
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10
  },
  iconStyle: {
    color: "#fff"
  },

  rightContainer: {
    justifyContent: 'flex-start',
    width: "80%",
    justifyContent: 'center'
  },

  title: {
    color: "#4d4c4c",
    fontSize: 17
  }
})


export default HomeScreen