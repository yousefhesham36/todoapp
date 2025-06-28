import { View, Text } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { styles } from "../../styles"
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const TodoItem = ({ todo, onDelete, onToggle }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.todoItem}>
            <View style={{ flex: 1 }}>
                <Text
                    onPress={() =>
                        navigation.navigate("Details", {
                            title: todo.title,
                            description: todo.description,
                            completed: todo.completed,
                        })
                    }
                    style={{
                        fontSize: 20,
                        fontWeight: "500",
                        textDecorationLine: todo.completed ? "line-through" : "none",
                        color: todo.completed ? "#888" : "#000",
                    }}
                >
                    {todo.title}
                </Text>

                {todo.description && (
                    <Text
                        style={{
                            fontSize: 14,
                            color: todo.completed ? "#999" : "#333",
                            textDecorationLine: todo.completed ? "line-through" : "none",
                        }}
                    >
                        {todo.description}
                    </Text>
                )}
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <AntDesign name="checkcircleo" size={24} color={todo.completed ? "green" : "gray"} onPress={() => onToggle(todo.id)} />
                <EvilIcons name="trash" size={28} color="red" onPress={() => onDelete(todo.id)} />
            </View>
        </View>
    )
}

export default TodoItem