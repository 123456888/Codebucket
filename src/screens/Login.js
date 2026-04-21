import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import ButtonComponent from '../components/ButtonComponent';
import { COLORS } from '../constants/colors';
import { STRINGS } from '../constants/strings';
import InputField from '../components/InputField';

const Login = () => {
  const navigation = useNavigation();
  const [role, setRole] = useState(STRINGS.nonTrainee);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errEmail, setErrEmail] = useState(false);
  const [errPass, setErrPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errLogin, setErrLogin] = useState(false);

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      setErrEmail(false);
      setErrPass(false);

      let hasError = false;

      if (role !== STRINGS.trainee) {
        setErrLogin(true);
        hasError = true;
      }

      if (!username || username !== 'subham@gmail.com') {
        setErrEmail(true);
        hasError = true;
      }

      if (!password || password !== 'Bipard@123') {
        setErrPass(true);
        hasError = true;
      }

      if (hasError) return;

      navigation.replace('Profile');
      setUsername('');
      setPassword('');
    }, 1000);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../asset/image/imageOne.png')}
          style={styles.image}
        />
        <View style={styles.absoluteTextContainer}>
          <Text style={styles.overlayText}>{STRINGS.designAndDeveloped}</Text>
        </View>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.welcome}>{STRINGS.welcome}</Text>
        <Text style={styles.signIn}>{STRINGS.signIn}</Text>

        {errLogin ? (
          <View style={styles.chooseTrainee}>
            <Text style={styles.traineeLogin}>Choose Trainee To Login</Text>
          </View>
        ) : (
          ''
        )}

        <Text style={styles.label}>{STRINGS.selectRole}</Text>
        <View style={styles.pickerContainer}>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={role}
              onValueChange={itemValue => {
                setRole(itemValue);
                setErrEmail(false);
                setErrPass(false);
                setErrLogin(false);
              }}
              style={styles.pickerText}
            >
              <Picker.Item
                label={STRINGS.nonTrainee}
                value={STRINGS.nonTrainee}
              />
              <Picker.Item label={STRINGS.trainee} value={STRINGS.trainee} />
            </Picker>
          </View>
        </View>

        <Text style={styles.label}>{STRINGS.userName}</Text>
        <InputField
          placeholder={STRINGS.username}
          value={username}
          onChangeText={text => {
            setUsername(text);
            if (text) setErrEmail(false);
            setErrLogin(false);
          }}
          style={styles.input}
        />
        {errEmail && (
          <Text style={styles.errorText}>{STRINGS.incorrectEmail}</Text>
        )}

        <Text style={styles.label}>{STRINGS.enterPassword}</Text>
        <View style={styles.passwordContainer}>
          <InputField
            placeholder={STRINGS.password}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={text => {
              setPassword(text);
              if (text) setErrPass(false);
              setErrLogin(false);
            }}
            style={styles.passwordInput}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.showHideBtn}
          >
            <Text>{showPassword ? 'Hide' : 'Show'}</Text>
          </TouchableOpacity>
        </View>
        {errPass && (
          <Text style={styles.errorText}>{STRINGS.incorrectPass}</Text>
        )}

        <ButtonComponent
          title={STRINGS.signIn}
          onPress={handleLogin}
          loading={loading}
          style={styles.button}
        />

        <Text style={styles.footer}>@ 2026 BIPARD.</Text>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  imageContainer: {
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  absoluteTextContainer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  overlayText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  formContainer: {
    padding: 20,
  },
  welcome: {
    color: COLORS.border,
  },
  signIn: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    marginBottom: 5,
    marginTop: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 5,
    padding: 13,
    marginTop: 5,
  },
  passwordContainer: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 5,
    marginTop: 5,
  },
  passwordInput: {
    padding: 13,
    color:COLORS.black,
  },
  showHideBtn: {
    position: 'absolute',
    right: 10,
    top: 13,
  },
  errorText: {
    color: COLORS.danger,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  footer: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 12,
  },
  traineeLogin: {
    color: COLORS.red,
    fontWeight: 'bold',
  },
  chooseTrainee: {
    alignItems: 'center',
  },
  pickerText:{
    color:COLORS.black,
  }
});
