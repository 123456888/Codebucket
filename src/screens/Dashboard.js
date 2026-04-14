import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const Dashboard = () => {

const currentUser = useSelector(state => state.auth.currentUser);

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
          backgroundColor: 'white',
          padding: 25,
          borderRadius: 15,
          elevation: 5,
          alignItems: 'center',
          width: '85%',
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            marginBottom: 10,
            color: '#333',
          }}
        >
          Welcome
        </Text>

        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            color: '#4c669f',
          }}
        >
          {currentUser ? currentUser.name : 'No User Found'}
        </Text>

      </View>
    </View>
  );
};

export default Dashboard;