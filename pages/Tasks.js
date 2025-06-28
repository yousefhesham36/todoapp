import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from "../styles";

export default function Tasks() {
    const [completedTasks, setCompletedTasks] = useState([]);

    useEffect(() => {
        const loadCompleted = async () => {
            const stored = await AsyncStorage.getItem("todos");
            const parsed = JSON.parse(stored) || [];
            const filtered = parsed.filter(todo => todo.completed === true);
            setCompletedTasks(filtered);
        };
        loadCompleted();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 24, marginBottom: 10 }}> Completed Tasks</Text>
            <Text style={{ fontSize: 16, marginBottom: 20 }}>
                Welcome in CompletedTasks Page
            </Text>
        </View>
    );
}
