// pages/TodoDetails.js
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { styles } from "../styles";

const TodoDetails = () => {
    const route = useRoute();
    const { title, description, completed } = route.params;

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
                Todo Details
            </Text>

            <Text style={{ ...styles.text, color: "black", }}>Title: {title}</Text>
            <Text style={{ ...styles.text, color: "black", }}>Description: {description || "No Description"}</Text>
            <Text style={{ ...styles.text, color: "black", }}>
                Status: {completed ? " Completed" : " In Progress"}
            </Text>
        </View>
    );
};

export default TodoDetails;
