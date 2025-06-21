import { View, Text } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { styles } from "../../styles"
import { useState } from 'react';

const TodoItem = ({ todo, onDelete }) => {
    return (
        <View style={styles.todoItem}>
            <Text style={{ fontSize: 20, fontWeight: 500 }}>{todo.title}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <AntDesign name="checkcircleo" size={20} color="green" />
                <EvilIcons name="trash" size={28} color="red" onPress={() => onDelete(todo.id)} />
            </View>
        </View>
    )
}

export default TodoItem