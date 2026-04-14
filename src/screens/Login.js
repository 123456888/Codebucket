import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import InputField from '../components/InputField';
import ButtonComponent from '../components/ButtonComponent';

const Login = ({ navigation }) => {
  const users = useSelector(state => state.auth.users);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      const foundUser = users.find(
        user => user.email === email && user.password === password,
      );

      if (foundUser) {
        navigation.replace('MainApp');
      } else {
        Alert.alert('Invalid email or password!');
      }
    }, 1000);
  };

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998']}
      style={{
        flex: 1,
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center',
          marginBottom: 30,
        }}
      >
        Login
      </Text>

      <InputField
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
      />

      <InputField
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <ButtonComponent title="Login" onPress={handleLogin} loading={loading} />

      <View style={{ marginTop: 5 }}>
        <ButtonComponent
        style={{backgroundColor:"blue"}}
          title="Create Account"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </LinearGradient>
  );
};

export default Login;
