import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

    return (
        <View style={styles.background}>
            <Feather style={styles.iconStyle} name="search" size={30} />
            <TextInput
                autoCapitalize={"none"}
                autoCorrect={false}
                placeholder={"Search"}
                style={styles.inputStyle}
                value={term}
                onChangeText={(newTerm) => onTermChange(newTerm)}
                onEndEditing={() => onTermSubmit()}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#E0E0E0',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginVertical: 10
        // alignItems: 'center'
    },
    inputStyle: {
        // borderColor: 'black',
        // borderWidth: 1,
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;