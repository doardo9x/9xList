import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header:{
        padding: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#9D8E87',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    title: {
        color: '#37245D',
        fontSize: 24,
        fontWeight: 'bold',
    },
    icon:{
        color: '#37245D'
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#645853',
        borderTopLeftRadius: 30,
  
    },
    inputContainer: {
        backgroundColor:'#645853',
        flex: 1,
        height: 50,
        marginVertical: 20,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    iconContainer: {
        borderRadius: 25,
        elevation: 40,
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#37245D"
    },  
    List:{
        backgroundColor: 'green'
    }
})