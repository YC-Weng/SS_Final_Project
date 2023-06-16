import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form';

const ForgotPasswordScreen = () => {
  const {control, handleSubmit} = useForm();
  const navigation = useNavigation();

  const onSendPressed = data => {
    console.warn(data);
    navigation.navigate('IntroductionSetting');
  };

  const onSignInPress = () => {
    navigation.navigate('IntroductionSetting');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>設定大頭貼</Text>

        <Text></Text>
        <CustomButton
          text="暫時略過"
          onPress={onSignInPress}
          type="TERTIARY"
        />
        {/* <CustomButton 
          text="送出" 
          type="SETTING"
          onPress={handleSubmit(onSendPressed)} /> */}


      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    paddingTop: '13%',
    color:'#EB7943',
    fontWeight: 900,
    borderColor: '#FFC700',
    borderBottomWidth: 5.3,
    paddingHorizontal:6,
    marginBottom: '67%',
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default ForgotPasswordScreen;
