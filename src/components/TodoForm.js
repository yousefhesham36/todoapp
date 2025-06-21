import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from "../../styles"

const TodoForm = ({ onsubmit }) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = () => {
        if (!title) return;
        const todo = {
            id: Math.random().toString(),
            title,
            description,
            completed: false,
        };
        onsubmit(todo);
        setTitle("");
        setDescription("");
    }



    return (
        <>
            <TextInput placeholder="Enter A Title" onChangeText={(val) => setTitle(val)} style={styles.input} value={title}></TextInput>
            <TextInput placeholder="Enter A Description" style={styles.input} onChangeText={(val) => setDescription(val)} value={description}></TextInput>
            <TouchableOpacity style={styles.submitBtn} activeOpacity={0.7} onPress={handleSubmit}>
                <Text style={{ ...styles.text, fontWeight: "bold" }} >Save</Text>
            </TouchableOpacity>
        </>
    )
}

export default TodoForm