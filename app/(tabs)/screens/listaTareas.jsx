import task from '@/assets/task.json';
import { FlatList , View, Text, StyleSheet } from 'react-native';
import{ Card } from 'react-native-paper';

export default function ListaTareas() {
    return (
        <View>
            <Text style={styles.title}>Lista de tareas</Text>
            <FlatList
                data={task}
                renderItem={({ item }) => (
                    <Card style={styles.card}>
                        <Card.Title title={item.titulo}></Card.Title>
                    </Card>
                )}
            />  
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 15,
        padding: 10,
        backgroundColor: '#f1f1f1',
    },
    title: {
        fontSize: 45,
        fontWeight: 'bold',
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});