import {
image,
button,
touchableOpacity,
text
} from "react";
import {safeAreaProvider} from "react-native-safe-area-context";

import e1 from "./e1";
import e2 from "./e2";
import e3 from "./e3";
import e4 from "./e4";
import e5 from "./e5";
import e6 from "./e6";
import e7 from "./e7";
import e8 from "./e8";
import e9 from "./e9";
import e10 from "./e10";
import e11 from "./e11";
import e12 from "./e12";
import e13 from "./e13";
import e14 from "./e14";
import e15 from "./e15";
import e16 from "./e16";
import e17 from "./e17";
import e18 from "./e18";
import e19 from "./e19";
import e20 from "./e20";
import e21 from "./e21";
import e22 from "./e22";
import e23 from "./e23";
import e24 from "./e24";
import e25 from "./e25";
import e26 from "./e26";
import e27 from "./e27";
import e28 from "./e28";
import e29 from "./e29";
import e30 from "./e30";
import e31 from "./e31";
import e32 from "./e32";
import e33 from "./e33";
import e34 from "./e34";
import e35 from "./e35";
import e36 from "./e36";
import e37 from "./e37";
import e38 from "./e38";
import e39 from "./e39";
import e40 from "./e40";
import e41 from "./e41";
import e42 from "./e42";
import e43 from "./e43";
import e44 from "./e44";
import e45 from "./e45";
import e46 from "./e46";
import e47 from "./e47";
import e48 from "./e48";
let customFonts={
    "ComicNeue": require("../assets/fonts/ComicNeue-Bold.ttf")
};
export default class listE extends Component{
    constructor(props){
        super(props);
        this.state={
            dark_theme: true
        };
    }
    async _loadFontsAsync(){
        await Font.loadAsync (customFonts);
        this.setState({fontsLoaded:true});
    }
    render() {
        return(

            <View style={styles.mainContainer}>
                <View style={styles.topContainer}>
                    <button style={styles.comeBackStart} onPress={()=>this.props.navigation.navigate("start")}/>
                </View>
                <safeAreaProvider>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e1")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e2")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e3")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e4")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e5")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e6")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e7")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e8")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e9")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e10")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e11")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e12")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e13")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e14")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e15")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e16")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e17")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e18")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e19")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e20")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e21")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e22")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e23")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e24")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e25")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e26")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e27")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e28")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e29")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e30")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e31")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e32")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e33")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e34")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e35")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e36")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e37")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e38")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e39")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e40")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e41")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e42")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e43")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e44")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e45")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e46")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e47")}/>
                    <touchableOpacity style={styles.e} onPress={()=>this.props.navigation.navigate("e48")}/>
                </safeAreaProvider>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    mainContainer:{

    },
    topContainer:{

    },
     e:{borderWidth: 5, backgroundColor: "#6c6c6c",borderRadius:100},
  
});

