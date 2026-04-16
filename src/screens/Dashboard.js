import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const currentUser = useSelector(state => state.auth.currentUser);

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
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#4c669f',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 15,
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 28,
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
          Welcome
        </Text>

        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            color: '#4c669f',
            marginBottom: 10,
          }}
        >
          {currentUser ? currentUser.name : 'No User Found'}
        </Text>

        <Text
          style={{
            fontSize: 14,
            color: '#6b7280',
            textAlign: 'center',
          }}
        >
         Hi, I'm {currentUser.name} — a passionate developer building mobile apps.
        </Text>
      </View>
    </View>
  );
};

export default Dashboard;