import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
        itemList:{
            padding: 15,
            elevation: 12,
            borderRadius: 7,
            borderWidth: 2,
            borderColor: 'white',
            marginVertical: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            backgroundColor: '#000000c0'

        },
        itemToBuy:{
            color: 'white',
            fontSize: 24,
            textDecorationLine: 'none',
        },
        itemBought:{
            color: 'white',
            fontSize: 24,
            textDecorationLine: 'line-through',
        },
        actionIcon: {
            height: 40,
            width: 40,
            backgroundColor: 'darkgreen',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '10',
            borderRadius: 20,
        }
});