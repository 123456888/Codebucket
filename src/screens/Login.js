import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/authSlice';
import InputField from '../components/InputField';
import ButtonComponent from '../components/ButtonComponent';
import Icon from 'react-native-vector-icons/Ionicons';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.auth.users);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errPass, setErrPass] = useState(false);
  const [errUser, setErrUser] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      setErrEmail(false);
      setErrPass(false);

      let hasError = false;
      if (!email || !email.includes('@gmail.com')) {
        setErrEmail(true);
        hasError = true;
      }
      if (!password || password.length < 5) {
        setErrPass(true);
        hasError = true;
      }
      if (hasError) return;

      const foundUser = users.find(user => user.email === email);

      if (!foundUser) {
        setErrUser(true);
        return;
      }

      if (foundUser.password !== password) {
        setErrPass(true);
        return;
      }

      dispatch(loginUser(foundUser));
      navigation.replace('MainApp');
    }, 1000);
  };

  const handleAccount = () => {
    setErrEmail(false);
    setErrPass(false);
    setErrUser(false);
    navigation.replace('SignUp');
  };

  return (
    <LinearGradient
      colors={['#0b1427', '#384e74']}
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
      }}
    >
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={require('../asset/image/icon.png')}
          style={{ width: '100%', height: 70, marginBottom: 20 }}
          resizeMode="contain"
        ></Image>
      </View>
      <Text
        style={{
          fontSize: 21,
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: 26,
          color: 'white',
        }}
      >
        Welcome To <Text style={{ color: '#f7a831' }}>Codebucket</Text>
      </Text>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 20,
          padding: 20,
          paddingVertical: 30,
          shadowColor: '#000',
          shadowOpacity: 1,
          shadowRadius: 10,
          elevation: 10,
        }}
      >
        {errUser == true ? (
          <View style={{ alignItems: 'center', marginBottom: 10 }}>
            <Text style={{ color: 'red', fontWeight: 'bold' }}>
              Incorrect Email Or Password!
            </Text>
          </View>
        ) : (
          ''
        )}
        <InputField
          placeholder="Enter email"
          value={email}
          onChangeText={text => {
            setEmail(text);
            if (text) {
              setErrEmail(false);
              setErrUser(false);
            }
          }}
          style={{
            borderWidth: 1,
            borderColor: '#908d8d',
            borderRadius: 10,
            padding: 12,
          }}
        />
        {errEmail == true ? (
          <View>
            <Text style={{ color: 'red', marginBottom: 5 }}>
              Incorrect email-id!
            </Text>
          </View>
        ) : (
          ''
        )}
        <View
          style={{
            borderWidth: 1,
            borderColor: '#908d8d',
            borderRadius: 10,
            marginTop: 5,
            flexDirection: 'row',
            alignItems: 'center',
            paddingRight: 10,
          }}
        >
          <InputField
            placeholder="Enter password"
            value={password}
            onChangeText={text => {
              setPassword(text);
              if (text) {
                setErrPass(false);
                setErrUser(false);
              }
            }}
            secureTextEntry={!showPassword}
            style={{
              flex: 1,
              padding: 12,
            }}
          />

          <TouchableOpacity
            style={{
              padding: 15,
              marginLeft: 20,
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Icon
              name={showPassword ? 'eye' : 'eye-off'}
              size={22}
              color="#2a5298"
            />
          </TouchableOpacity>
        </View>
        {errPass == true ? (
          <View>
            <Text style={{ color: 'red', marginBottom: 8 }}>
              Incorrect password!
            </Text>
          </View>
        ) : (
          ''
        )}
        <ButtonComponent
          title={'Login'}
          loading={loading}
          onPress={handleLogin}
          style={{
            backgroundColor: '#2a5298',
            padding: 15,
            borderRadius: 10,
            alignItems: 'center',
            marginTop: 20,
          }}
        ></ButtonComponent>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 8,
          }}
        >
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={handleAccount}>
            <Text style={{ fontWeight: 'bold', color: '#2a5298' }}>
              {' '}
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Login;
