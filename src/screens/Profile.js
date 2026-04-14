import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../redux/authSlice';

const Profile = ({ navigation }) => {

  const dispatch = useDispatch();

  const currentUser = useSelector(state => state.auth.currentUser);

  const handleDelete = () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your account?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "OK",
          style: "destructive",
          onPress: () => {

            dispatch(deleteUser(currentUser.email));

            navigation.replace('Login');
          }
        }
      ]
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f6ff',
      }}
    >
      <View
        style={{
          width: '90%',
          backgroundColor: 'white',
          padding: 25,
          borderRadius: 15,
          elevation: 5,
          alignItems: 'center',
        }}
      >

        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
          }}
        >
          Profile 👤
        </Text>

        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: '#4c669f',
            marginBottom: 10,
          }}
        >
          {currentUser?.name}
        </Text>

        <Text
          style={{
            fontSize: 16,
            color: '#555',
            marginBottom: 20,
          }}
        >
          {currentUser?.email}
        </Text>

        <TouchableOpacity
          onPress={handleDelete}
          style={{
            backgroundColor: 'red',
            padding: 12,
            borderRadius: 10,
            width: '100%',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>
            Delete Account
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default Profile;