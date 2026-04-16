import React from 'react';
import { View, Text, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, logoutUser } from '../redux/authSlice';
import ButtonComponent from '../components/ButtonComponent';

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.auth.currentUser);

  const handleDelete = () => {
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'OK',
          style: 'destructive',
          onPress: () => {
            dispatch(deleteUser(currentUser.email));
            navigation.replace('Login');
          },
        },
      ],
    );
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'OK',
          onPress: () => {
            dispatch(logoutUser());
            navigation.replace('Login');
          },
        },
      ],
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#eef2ff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <View
        style={{
          width: '100%',
          backgroundColor: '#ffffff',
          borderRadius: 20,
          paddingVertical: 30,
          paddingHorizontal: 20,
          alignItems: 'center',
          shadowColor: '#000',
          shadowOpacity: 0.15,
          shadowRadius: 10,
          elevation: 8,
        }}
      >
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            backgroundColor: '#4c669f',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 15,
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 30,
              fontWeight: 'bold',
            }}
          >
            {currentUser?.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
          </Text>
        </View>

        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: 5,
          }}
        >
          Profile 👤
        </Text>

        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: '#4c669f',
            marginBottom: 5,
          }}
        >
          {currentUser?.name}
        </Text>

        <Text
          style={{
            fontSize: 15,
            color: '#6b7280',
            marginBottom: 20,
          }}
        >
          {currentUser?.email}
        </Text>

        <ButtonComponent
          title={'Logout'}
          onPress={handleLogout}
          style={{
            backgroundColor: '#22c55e',
            width: '100%',
            marginBottom: 10,
            borderRadius: 12,
          }}
        />

        <ButtonComponent
          title={'Delete Account'}
          onPress={handleDelete}
          style={{
            backgroundColor: '#ef4444',
            width: '100%',
            borderRadius: 12,
          }}
        />
      </View>
    </View>
  );
};

export default Profile;