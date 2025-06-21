import { FlatList } from 'react-native-web'
import TodoItem from './TodoItem'

const Todos = ({ todos, onDelete }) => {
    return (
        <FlatList style={{ width: "90%", top: 10 }} data={todos} keyExtractor={item => (item.id)} renderItem={({ item }) => <TodoItem todo={item} onDelete={onDelete}></TodoItem>}></FlatList>
    )
}

export default Todos