import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import axios from 'axios';

const Home = () => {
  const [users, setUsers] = useState([]);

  // Fetching user data from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/users');
        setUsers(response.data.data); // Set user data from the response
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>User List</Text>
      {/* Mapping through users to display names and photos */}
      {users.map((user) => (
        <View key={user.id} style={styles.userContainer}>
          <Text style={styles.userText}>{user.first_name}</Text>
          <Image
            source={{ uri: user.avatar }}
            style={styles.userImage}
            resizeMode="cover"
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  userContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  userText: {
    fontSize: 18,
    marginBottom: 8,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default Home;