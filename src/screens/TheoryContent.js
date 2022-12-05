import { api } from '../config';
import { WebView } from 'react-native-webview';
import { useEffect } from 'react';
import COLORS from '../colors/Color';


function TheoryContent({ route, navigation }) {
    const { template } = route.params;
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
    }, [])
    return (
        <WebView
            style={{ flex: 1, backgroundColor: "#EFF5F5" }}
            javaScriptEnabled={false} 
            domStorageEnabled={false} 
            startInLoadingState={false} 
            scalesPageToFit={false} 
            scrollEnabled={true}
            source={{ uri: `${api.getTheory}?template=${template}` }}
        />
    );
}


export default TheoryContent