import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import TodoForm from '../src/components/TodoForm'
import Todos from '../src/components/Todos'
import { styles } from "../styles"
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all");
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

    const filteredTodos = todos.filter((todo) => {
        if (filter === "done") return todo.completed;
        if (filter === "active") return !todo.completed;
        return true;
    });

    const handleToggleComplete = (id) => {
        const updated = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updated);
        saveTodosToStorage(updated);
    };

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 35, fontWeight: "bold", marginBottom: 19 }}>
                Todo App
            </Text>

            <TodoForm onsubmit={(todo) => handleAddTodo(todo)} />
            <View style={styles.dividerLine} />
            <View style={styles.filterContainer}>
                <TouchableOpacity style={styles.filterBtn} onPress={() => setFilter("all")}>
                    <Text style={{ ...styles.filterText, fontWeight: "bold" }}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterBtn} onPress={() => setFilter("active")}>
                    <Text style={{ ...styles.filterText, fontWeight: "bold" }}>Active</Text></TouchableOpacity>
                <TouchableOpacity style={styles.filterBtn} onPress={() => setFilter("done")}>
                    <Text style={{ ...styles.filterText, fontWeight: "bold" }}>Done</Text>
                </TouchableOpacity>
            </View>
            {filteredTodos.length > 0 && (
                <Todos todos={filteredTodos} onDelete={handelDeleteTodo} onToggle={handleToggleComplete}
                />)}
        </View>
    )
}

export default Home