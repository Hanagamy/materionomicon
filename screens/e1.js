let customFonts={
    "name": require("../assets/fonts/BreeSerif-Regular.ttf"),
    "evocation": require("../assets/fonts/Lobster-Regular.ttf")
};
import { LinearGradient } from 'expo-linear-gradient';
import {
Image,
Text,
useState, 
useEffect 
} from "React";



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
                <TouchableOpacity style={styles.elemento}>
                    <image>source={require("../assets/elementos/ignis.png")}</image>
                </TouchableOpacity>
                <text style={styles.cidadela}>igners</text>
                <text style={styles.el}>ignis</text>
                <text style={styles.texto}>igners, convoque-me uma grande chama</text>
                <LinearGradient 
                    style={{
                	height: 45, 
                	width: 100, 
	                marginTop: 15, 
	                borderRadius: 5}}

	                colors={['#A62A5C','#6A2597']}>

                </LinearGradient>
            </View>
        )
    };
}
function app(){
    const [windowsSize,setWindowSize]=useState({
        width:window.innerWidth,
        height:window.innerHeight
    });
    useEffect(()=>{
        function handleResize(){
            setWindowSize({
                width:window.innerWidth,
                height:window.innerHeight
            });
        }
        window.addEventListener("resize",handleResize);
        return()=>window.removeEventListener("resize",handleResize);
    },[]);
    return(
        <div>
            style={{
                height: `${windowsSize.height}px`, 
                width:  `${windowsSize.width}px`
            }}
            >
        </div>
    )
}