import {
image,
button,
touchableOpacity,
text
} from "react";

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
                <touchableOpacity style={styles.e1} onPress={()=>this.props.navigation.navigate("e1")}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    mainContainer:{

    },
    topContainer:{

    },
    e1:{},
    e2:{},
    e3:{},
    e4:{},
    e5:{},
    e6:{},
    e7:{},
    e8:{},
    e9:{},
    e10:{},
    e11:{},
    e12:{},
    e13:{},
    e14:{},
    e15:{},
    e16:{},
    e17:{},
    e18:{},
    e19:{},
    e20:{},
    e21:{},
    e22:{},
    e23:{},
    e24:{},
    e25:{},
    e26:{},
    e27:{},
    e28:{},
    e29:{},
    e30:{},
    e31:{},
    e32:{},
    e33:{},
    e34:{},
    e35:{},
    e36:{},
    e37:{},
    e38:{},
    e39:{},
    e40:{},
    e41:{},
    e42:{},
    e43:{},
    e44:{},
    e45:{},
    e46:{},
    e47:{},
    e48:{}
});

