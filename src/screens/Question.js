import React, { useState, useEffect } from 'react'
import { ActivityIndicator, ScrollView } from 'react-native';
import { View, Text, SafeAreaView, TouchableOpacity, Modal, Animated } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { api } from '../config';
import COLORS from '../colors/Color';


let score_ = -1;
let question_index = -1;
let is_exist = false;


const Quiz = ({ route, navigation }) => {
    const { index, user_id } = route.params;
    const [loading, setLoading] = useState(true);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0);
    const [showNextButton, setShowNextButton] = useState(false);
    const [showScoreModal, setShowScoreModal] = useState(false);
    const [allQuestions, setAllQuestions] = useState([]);


    const UpdateScore = () => {
        let urlUpdateScore = api.updateScore;
        fetch(urlUpdateScore, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: user_id,
                index: index,
                question_index: question_index,
                score: score_,
            })
        });
    }


    React.useEffect(
        () =>
            navigation.addListener('beforeRemove', (e) => {
                if (is_exist) {
                    navigation.dispatch(e.data.action);
                    return;
                }
                e.preventDefault();
                setShowScoreModal(true);
            }),
        [navigation, is_exist]
    );


    useEffect(() => {

        navigation.setOptions({
            headerStyle: {
                backgroundColor: COLORS.headerBg,
            },
            headerTintColor: COLORS.headerTt,
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        })


        fetch(`${api.getListQuestion}?index=${index}&user=${user_id}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(json => {
                setAllQuestions(json.list_question);
                setScore(json.score);
                setCurrentQuestionIndex(json.index_question);
                score_ = json.score;
                question_index = json.index_question;
                is_exist = false;
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                console.log(error.message);
            });

        console.log(question_index + 1);
        Animated.timing(progress, {
            toValue: question_index + 1,
            duration: 3500,
            useNativeDriver: false
        }).start();
    }, []);

    const validateAnswer = (selectedOption) => {
        let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option);
        setIsOptionsDisabled(true);
        if (selectedOption == correct_option) {
            // Set Score
            setScore(score + 1);
            score_ += 1;
        }
        // Show Next Button
        setShowNextButton(true)
    }
    const handleNext = () => {
        if (currentQuestionIndex == allQuestions.length - 1) {
            // Last Question
            // Show Score Modal
            setShowScoreModal(true)
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            question_index += 1;
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionsDisabled(false);
            setShowNextButton(false);
        }
        Animated.timing(progress, {
            toValue: currentQuestionIndex + 1,
            duration: 750,
            useNativeDriver: false
        }).start();
    }
    const restartQuiz = () => {
        setShowScoreModal(false);
        setCurrentQuestionIndex(0);
        setScore(0);
        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionsDisabled(false);
        setShowNextButton(false);
        Animated.timing(progress, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }

    const renderQuestion = () => {
        return (
            <View style={{ marginVertical: 20 }}>
                {/* Question Counter */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                        <Text style={{ color: COLORS.black, fontSize: 20, opacity: 0.6, marginRight: 2 }}>{currentQuestionIndex + 1}</Text>
                        <Text style={{ color: COLORS.black, fontSize: 18, opacity: 0.6 }}>/ {allQuestions.length}</Text>
                    </View>
                    <View>
                        <Text style={{ color: COLORS.black, fontSize: 20, opacity: 0.6, marginRight: 2 }}>{score / allQuestions.length * 10}</Text>
                    </View>
                </View>

                {/* Question */}
                <Text style={{
                    color: COLORS.black,
                    fontSize: 20,
                    marginTop: 10
                }}>{allQuestions[currentQuestionIndex]?.question}</Text>
            </View>
        )
    }


    const renderOptions = () => {
        return (
            <View style={{ marginBottom: 45 }}>
                {
                    allQuestions[currentQuestionIndex]?.options.map(option => (
                        <TouchableOpacity
                            onPress={() => validateAnswer(option)}
                            disabled={isOptionsDisabled}
                            key={option}
                            style={{
                                borderWidth: 3,
                                borderColor: option == correctOption
                                    ? COLORS.success
                                    : option == currentOptionSelected
                                        ? COLORS.error
                                        : COLORS.secondary + '60',
                                backgroundColor: option == correctOption
                                    ? COLORS.success + '20'
                                    : option == currentOptionSelected
                                        ? COLORS.error + '20'
                                        : COLORS.secondary + '20',
                                height: 60, borderRadius: 20,
                                flexDirection: 'row',
                                alignItems: 'center', justifyContent: 'space-between',
                                paddingHorizontal: 20,
                                marginVertical: 10
                            }}
                        >
                            <Text style={{ fontSize: 20, color: COLORS.black }}>{option}</Text>

                            {/* Show Check Or Cross Icon based on correct answer*/}
                            {
                                option == correctOption ? (
                                    <View style={{
                                        width: 30, height: 30, borderRadius: 30 / 2,
                                        backgroundColor: COLORS.success,
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <Icon name="checkcircleo" size={20} color={COLORS.black} />
                                        {/* <MaterialCommunityIcons name="check" style={{
                                            color: COLORS.black,
                                            fontSize: 20
                                        }} /> */}
                                    </View>
                                ) : option == currentOptionSelected ? (
                                    <View style={{
                                        width: 30, height: 30, borderRadius: 30 / 2,
                                        backgroundColor: COLORS.error,
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <Icon name="closecircleo" size={20} color={COLORS.black} />
                                        {/* <MaterialCommunityIcons name="close" style={{
                                            color: COLORS.black,
                                            fontSize: 20
                                        }} /> */}
                                    </View>
                                ) : null
                            }

                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
    const renderNextButton = () => {
        if (showNextButton) {
            return (
                <TouchableOpacity
                    onPress={handleNext}
                    style={{
                        width: '100%', backgroundColor: COLORS.accent, padding: 20, borderRadius: 20,
                        marginBottom: 70,
                    }}>
                    <Text style={{ fontSize: 20, color: COLORS.black, textAlign: 'center' }}>Tiếp theo</Text>
                </TouchableOpacity>
            )
        } else {
            return null
        }
    }


    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length],
        outputRange: ['0%', '100%']
    })
    const renderProgressBar = () => {
        return (
            <View>
                <View style={{
                    width: '100%',
                    height: 20,
                    borderRadius: 20,
                    backgroundColor: '#00000020',

                }}>
                    <Animated.View style={[{
                        height: 20,
                        borderRadius: 20,
                        backgroundColor: COLORS.accent
                    }, {
                        width: progressAnim
                    }]}>

                    </Animated.View>

                </View>
            </View>
        )
    }


    return !loading ? (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} /> */}
            <ScrollView style={{
                flex: 1,
                paddingTop: 30,
                // paddingVertical: 40,
                paddingHorizontal: 16,
                backgroundColor: COLORS.background,
                position: 'relative'
            }}>
                {/* ProgressBar */}
                {renderProgressBar()}

                {/* Question */}
                {renderQuestion()}

                {/* Options */}
                {renderOptions()}

                {/* Next Button */}
                {renderNextButton()}
            </ScrollView>

            {/* Score Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={showScoreModal}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: "#d0d8d9",
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        backgroundColor: "#22A39F",
                        width: '90%',
                        borderRadius: 20,
                        padding: 20,
                        alignItems: 'center'
                    }}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{score > (allQuestions.length / 2) ? 'Congratulations!' : 'Oops!'}</Text>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            marginVertical: 20
                        }}>
                            <Text style={{
                                fontSize: 30,
                                color: score > (allQuestions.length / 2) ? COLORS.success : COLORS.error
                            }}>{score} </Text>
                            <Text style={{
                                fontSize: 20, color: "#00FFF6"
                            }}>/ {allQuestions.length}</Text>
                        </View>

                        {
                            currentQuestionIndex < allQuestions.length - 1 ?
                                (
                                    <TouchableOpacity
                                        onPress={() => {
                                            is_exist = false;
                                            setShowScoreModal(false);
                                        }}
                                        style={{
                                            backgroundColor: "#6ee680", marginBottom: 30,
                                            padding: 20, width: '100%', borderRadius: 20
                                        }}>
                                        <Text style={{
                                            textAlign: 'center', color: "#434d4b", fontSize: 20
                                        }}>Tiếp tục</Text>
                                    </TouchableOpacity>) :
                                (<View></View>)
                        }
                        {/* Retry Quiz button */}
                        <TouchableOpacity
                            onPress={() => {
                                is_exist = false;
                                restartQuiz();
                            }}
                            style={{
                                backgroundColor: "#e8e872",
                                padding: 20, width: '100%', borderRadius: 20
                            }}>
                            <Text style={{
                                textAlign: 'center', color: "#434d4b", fontSize: 20
                            }}>Làm lại</Text>
                        </TouchableOpacity>
                        {/* Retry Quiz button */}
                        <TouchableOpacity
                            onPress={() => {
                                UpdateScore();
                                is_exist = true;
                                navigation.pop();
                            }}
                            style={{
                                backgroundColor: "#f0bf46", marginTop: 30,
                                padding: 20, width: '100%', borderRadius: 20
                            }}>
                            <Text style={{
                                textAlign: 'center', color: "#434d4b", fontSize: 20
                            }}>Thoát</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </Modal>
        </SafeAreaView>
    ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.background }}>
            <ActivityIndicator size="large" color="#F49D1A" />
        </View>
    )
};


export default Quiz