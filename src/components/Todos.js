import { FlatList } from 'react-native-web'
import TodoItem from './TodoItem'

const Todos = ({ todos, onDelete, onToggle }) => {
    return (
        <FlatList data={todos} style={{ width: "90%", top: 10 }} keyExtractor={(item) => item.id} renderItem={({ item }) => (<TodoItem todo={item} onDelete={onDelete} onToggle={onToggle} />
        )}
        />
    )
}

export default Todos