import React from "react"
import { View,StyleSheet ,Text} from "react-native"
type Props = {
    children? : React.ReactNode
    bang: boolean
    style?: object
}
const Hello = ({children,bang,style}:Props) => {
    return(
        <View >
           <Text style={[styles.text,style]}>Hello {children}
           {bang ? "!" : ""}
           </Text> 
        </View>
    )
}

Hello.defaultProps = {
    bang: false
}

const styles = StyleSheet.create({
    text: {
        color: "#ffffff",
        backgroundColor: "blue",
        fontSize: 40,
        fontWeight: "bold",
        padding:16,
    }
})
export default Hello
