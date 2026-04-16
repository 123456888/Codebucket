import React from 'react';
import { TextInput } from 'react-native';

const InputField = (props) => {
  return (
    <TextInput
      placeholderTextColor="#4a4848"
      style={{
        borderRadius: 10,
        paddingHorizontal: 15,
        height: 50,
        color:"black"
      }}
      {...props}
    />
  )
}

export default InputField