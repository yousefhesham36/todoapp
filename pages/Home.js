import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import TodoForm from '../src/components/TodoForm'
import Todos from '../src/components/Todos'
import { styles } from "../styles"
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = () => {
    const [todos, setTodos] = useState([]);
    saveTodosTostorage = async (todos) => {
        try {
            await AsyncStorage.setItem("todos", JSON.stringify(todos));
        } catch (e) {
            console.log(e)
        }
    }

    loadedTodosFromStorage = async () => {
        try {
            const storedTodos = await AsyncStorage.getItem("todos")
            setTodos(JSON.parse(storedTodos))
            // }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        loadedTodosFromStorage();
    }, [])

    const handleAddTodo = (todo) => {
        const updated = [...todos, todo];
        setTodos(updated);
        saveTodosTostorage(updated)
    }
    const handelDeleteTodo = (id) => {
        const updated = todos.filter((todo) => todo.id !== id);
        setTodos(updated);
        saveTodosTostorage(updated)
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 35, fontWeight: "bold", marginBottom: 19 }}>
                Todo App
            </Text>

            <TodoForm onsubmit={(todo) => handleAddTodo(todo)} />
            <View style={styles.dividerLine} />
            <View style={styles.filterContainer}>
                <TouchableOpacity style={styles.filterBtn}>
                    <Text style={{ ...styles.filterText, fontWeight: "bold" }}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterBtn}>
                    <Text style={{ ...styles.filterText, fontWeight: "bold" }}>Active</Text></TouchableOpacity>
                <TouchableOpacity style={styles.filterBtn}>
                    <Text style={{ ...styles.filterText, fontWeight: "bold" }}>Done</Text>
                </TouchableOpacity>
            </View>
            {todos.length > 0 && <Todos todos={todos} onDelete={handelDeleteTodo}></Todos>}
        </View>
    )
}

export default Home