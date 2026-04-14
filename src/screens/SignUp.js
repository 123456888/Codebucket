import React, { useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';

import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/authSlice';
import ButtonComponent from '../components/ButtonComponent';
import InputField from '../components/InputField';

const SignUp = ({ navigation }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!name || !email || !password) {
      Alert.alert("Some thing went's wrong!");
      return;
    }
    if(!email.includes("@gmail.com")){
       Alert.alert("Invalid Email!");
       return;
    }

    dispatch(
      registerUser({
        name,
        email,
        password,
      }),
    );
    Alert.alert('User Registered Success');
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f2f2f2',
      }}
    >
      <Text style={{ fontSize: 26, fontWeight: 'bold', textAlign: 'center' }}>
        Sign Up
      </Text>

      <InputField
        placeholder="Enter name"
        value={name}
        onChangeText={setName}
      />

      <InputField
        placeholder="Email-id"
        value={email}
        onChangeText={setEmail}
      />

      <InputField
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <ButtonComponent
        title="Register"
        onPress={handleRegister}
        style={{ backgroundColor: 'blue', marginTop: 10 }}
      />

      <ButtonComponent
        title="Login"
        onPress={() => navigation.navigate('Login')}
        style={{ backgroundColor: 'red', marginTop: 5 }}
      />
    </View>
  );
};

export default SignUp;
