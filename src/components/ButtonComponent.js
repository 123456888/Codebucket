import { View } from 'react-native';
import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

const ButtonComponent = ({ title, onPress, loading, style, textStyle, ...props }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading}
      style={{
        backgroundColor: '#ff7eb3',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        ...style,
      }}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            ...textStyle,
          }}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  )
}

export default ButtonComponent