import React from 'react';
import { TextInput } from 'react-native';

const InputField = (props) => {
  return (
    <TextInput
      placeholderTextColor="#aaa"
      style={{
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 15,
        height: 50,
        marginBottom: 15,
      }}
      {...props}
    />
  )
}

export default InputField