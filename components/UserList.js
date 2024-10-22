import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  // Fetch users from JSONPlaceholder
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data); // Set the user data to state
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>User List</Text>
      {/* Mapping through users to display each one inside a rounded box */}
      {users.map((user) => (
        <View key={user.id} style={styles.userBox}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userInfo}>Username: {user.username}</Text>
          <Text style={styles.userInfo}>Email: {user.email}</Text>
          <Text style={styles.userInfo}>
            Address: {user.address.street}, {user.address.city}
          </Text>
          <Text style={styles.userInfo}>Phone: {user.phone}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  userBox: {
    backgroundColor: '#fff', // White background for the card
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000', // Black border
    marginBottom: 16,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  userInfo: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
});

export default UserList;