import * as React from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Theory from '../screens/Theory';
import TwelveTenses from '../screens/Theory_CacThi';
import TypeOfWords from '../screens/Theory_TypeOfWords';
import TheoryContent from '../screens/TheoryContent';
import Dictionary from '../screens/Dictionary';
import { Dimensions } from 'react-native';
import Quiz from '../screens/Question';
import SetQuestions from '../screens/ListSetQuestion';
import RandomWord from '../screens/NewWordEveryDay';
import HomeScreen from '../screens/HomeScreen';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import ForgetPassword from '../screens/ForgetPassword';
import UpdatePassword from '../screens/UpdatePassword';
import COLORS from '../colors/Color';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const screenOptions = {
  headerShown: false,
  navigationBarColor: 'black',
  animation: 'slide_from_right',
};


const Stack = createNativeStackNavigator();


function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}
          screenOptions={screenOptions}
          options={{
            headerShown: false,
            gestureEnabled: true,
            animationEnabled: true,
            gestureDirection: 'horizontal',
            headerStyle: {
              backgroundColor: COLORS.headerBg,
            },
            headerTintColor: COLORS.headerTt,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="SignUp" component={SignUp}
          screenOptions={screenOptions}
          options={{
            title: 'Đăng ký',
            gestureEnabled: true,
            animationEnabled: true,
            gestureDirection: 'horizontal',
            headerStyle: {
              backgroundColor: COLORS.headerBg,
            },
            headerTintColor: COLORS.headerTt,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="UpdatePassword" component={UpdatePassword}
          screenOptions={screenOptions}
          options={{
            title: 'Đổi mật khẩu',
            gestureEnabled: true,
            animationEnabled: true,
            gestureDirection: 'horizontal',
            headerStyle: {
              backgroundColor: COLORS.headerBg,
            },
            headerTintColor: COLORS.headerTt,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword}
          screenOptions={screenOptions}
          options={{
            title: 'Quên mật khẩu',
            gestureEnabled: true,
            animationEnabled: true,
            gestureDirection: 'horizontal',
            headerStyle: {
              backgroundColor: COLORS.headerBg,
            },
            headerTintColor: COLORS.headerTt,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen}
          screenOptions={screenOptions}
          options={{
            headerShown: true,
            gestureEnabled: true,
            animationEnabled: true,
            gestureDirection: 'horizontal',
            headerBackVisible: false,
            title: 'Trang chủ',
            headerStyle: {
              backgroundColor: COLORS.headerBg,
            },
            headerTintColor: COLORS.headerTt,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="RandomWord" component={RandomWord}
          screenOptions={screenOptions}
          options={{
            title: 'Từ mới mỗi ngày',
            gestureEnabled: true,
            animationEnabled: true,
            gestureDirection: 'horizontal',
            headerStyle: {
              backgroundColor: COLORS.headerBg,
            },
            headerTintColor: COLORS.headerTt,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="SetQuestions" component={SetQuestions}
          screenOptions={screenOptions}
          options={{
            title: 'Bài tập',
            gestureEnabled: true,
            animationEnabled: true,
            gestureDirection: 'horizontal',
            headerStyle: {
              backgroundColor: COLORS.headerBg,
            },
            headerTintColor: COLORS.headerTt,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="Questions" component={Quiz}
          screenOptions={screenOptions}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen name="Dictionary" component={Dictionary}
          screenOptions={screenOptions}
          options={{
            title: 'Từ điển',
            gestureEnabled: true,
            animationEnabled: true,
            gestureDirection: 'horizontal',
            headerStyle: {
              backgroundColor: COLORS.headerBg,
            },
            headerTintColor: COLORS.headerTt,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="Grammar" component={Theory}
          screenOptions={screenOptions}
          options={{
            title: 'Ngữ pháp tiếng anh',
            gestureEnabled: true,
            animationEnabled: true,
            gestureDirection: 'horizontal',
            headerStyle: {
              backgroundColor: COLORS.headerBg,
            },
            headerTintColor: COLORS.headerTt,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="Tenses" component={TwelveTenses}
          options={{
            title: "Các thì trong tiếng anh",
            gestureEnabled: true,
            animationEnabled: true,
            gestureDirection: 'horizontal',
            headerStyle: {
              backgroundColor: COLORS.headerBg,
            },
            headerTintColor: COLORS.headerTt,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="TypeOfWords" component={TypeOfWords}
          options={{
            title: "Các loại từ",
            gestureEnabled: true,
            animationEnabled: true,
            gestureDirection: 'horizontal',
            headerStyle: {
              backgroundColor: COLORS.headerBg,
            },
            headerTintColor: COLORS.headerTt,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="TheoryContent"
          component={TheoryContent}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation
