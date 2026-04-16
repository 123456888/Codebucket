import React, { useState } from 'react';
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/authSlice';
import InputField from '../components/InputField';
import ButtonComponent from '../components/ButtonComponent';
import Icon from 'react-native-vector-icons/Ionicons';

const SignUp = ({ navigation }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [signupLoading, setSignupLoading] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);
  const [errName, setErrName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errPass, setErrPass] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      navigation.replace('Login');
      setLoading(false);
    }, 1000);
  };

  const handleRegister = () => {
    let isValid = true;

    if (!name) {
      setErrName(true);
      isValid = false;
    } else {
      setErrName(false);
    }

    if (!email || !email.endsWith('@gmail.com')) {
      setErrEmail(true);
      isValid = false;
    } else {
      setErrEmail(false);
    }

    if (!password || password.length < 5) {
      setErrPass(true);
      isValid = false;
    } else {
      setErrPass(false);
    }

    if (!isValid) {
      return;
    }

    setSignupLoading(true);

    dispatch(
      registerUser({
        name,
        email,
        password,
      }),
    );

    setTimeout(() => {
      setSignupLoading(false);
      setSuccessPopup(true);

      setTimeout(() => {
        setSuccessPopup(false);
        navigation.replace('Login');
      }, 2000);

      setName('');
      setEmail('');
      setPassword('');
    }, 1000);
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#0f172a',
          justifyContent: 'center',
          padding: 20,
        }}
      >
        <StatusBar barStyle="light-content" />

        <View
          style={{
            backgroundColor: '#111827',
            borderRadius: 20,
            padding: 20,
            borderWidth: 1,
            borderColor: '#1f2937',
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: '#fff',
              textAlign: 'center',
              marginBottom: 25,
            }}
          >
            Create Account
          </Text>

          <Text style={{ color: '#9ca3af', marginBottom: 5 }}>Full Name</Text>
          <InputField
            placeholder="Enter your name"
            placeholderTextColor="#6b7280"
            value={name}
            onChangeText={text => {
              setName(text);
              if (text) {
                setErrName(false);
              }
            }}
            style={{
              backgroundColor: '#1f2937',
              color: '#fff',
              borderRadius: 12,
              padding: 14,
              borderWidth: 1,
              borderColor: '#374151',
            }}
          />
          {errName ? (
            <View>
              <Text
                style={{ color: 'red', fontWeight: 'bold', marginBottom: 5 }}
              >
                Invalid name!
              </Text>
            </View>
          ) : (
            ''
          )}

          <Text style={{ color: '#9ca3af', padding: 5 }}>Email</Text>
          <InputField
            placeholder="Enter your email"
            placeholderTextColor="#6b7280"
            value={email}
            onChangeText={text => {
              setEmail(text);
              if (text) {
                setErrEmail(false);
              }
            }}
            style={{
              backgroundColor: '#1f2937',
              color: '#fff',
              borderRadius: 12,
              padding: 14,
              borderWidth: 1,
              borderColor: '#374151',
            }}
          />
          {errEmail ? (
            <View>
              <Text
                style={{ color: 'red', fontWeight: 'bold', marginBottom: 5 }}
              >
                Invalid email!
              </Text>
            </View>
          ) : (
            ''
          )}

          <Text style={{ color: '#9ca3af', padding: 5 }}>Password</Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#908d8d',
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              paddingRight: 10,
            }}
          >
            <InputField
              placeholder="Enter your password"
              placeholderTextColor="#6b7280"
              value={password}
              onChangeText={text => {
                setPassword(text);
                if (text) {
                  setErrPass(false);
                }
              }}
              secureTextEntry={!showPassword}
              style={{
                flex: 1,
                padding: 12,
                color: 'white',
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
          {errPass ? (
            <View>
              <Text
                style={{ color: 'red', fontWeight: 'bold', marginBottom: 5 }}
              >
                Invalid password!
              </Text>
            </View>
          ) : (
            ''
          )}

          <ButtonComponent
            title={'Register'}
            loading={signupLoading}
            onPress={handleRegister}
            style={{
              backgroundColor: '#3b82f6',
              padding: 16,
              borderRadius: 14,
              alignItems: 'center',
              marginBottom: 12,
              marginTop: 20,
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ color: 'white' }}>Already have an account?</Text>

            <TouchableOpacity onPress={handleLogin}>
              <Text
                style={{
                  color: '#f7a831',
                }}
              >
                {' '}
                Log In
              </Text>
            </TouchableOpacity>

            {loading && (
              <ActivityIndicator
                style={{ marginLeft: 5 }}
                size="small"
                color="white"
              />
            )}
          </View>
        </View>
      </View>

      {successPopup && (
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              backgroundColor: '#f9e4c8',
              padding: 25,
              borderRadius: 15,
              width: '80%',
              alignItems: 'center',
              justifyContent:"center"
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold', height: 90 }}>
              Registered Successful
            </Text>
            <Text style={{marginBottom:5}}>Redirecting To LogIn Page</Text>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <ActivityIndicator size={28} color={'black'}></ActivityIndicator>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default SignUp;
