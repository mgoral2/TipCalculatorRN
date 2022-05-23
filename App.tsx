import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import CurrencyInput from 'react-native-currency-input';


import TopBar from './TopBar';

export default function App() {
  const [amount, setAmount] = useState(0);
  const [tax, setTax] = useState(0);
  const [tip, setTip] = useState(20);
  const [roundUp, setRoundUp] = useState(false);
  const [total, setTotal, getTotal] = useState(0);

  var tip_amount = [
    {label: '15%', value: 15},
    {label: '18%', value: 18},
    {label: '20%', value: 20},
    {label: '25%', value: 25}
  ]

  var round_up = [
    {label: 'No', value: false},
    {label: 'Yes', value: true}
  ]

  const calculateTotal = (amount, tax, tip, roundUp) => {

    let total = (amount + (amount*tax*.01));
    total = total+(total*tip*.01);

    if (roundUp) {
      total = Math.ceil(total);
    }
    setTotal(total);
    /*setTotal((state => {
      console.log(state);
      return state;
    }))
    */
  }

/*
  const calculateTotal = (amount, tax) => {
    console.log("amountCT: " + amount + " taxCT: " + tax);
    setTotal(amount+tax);
    console.log("final total: " + total);
  }
*/
  return (
    <View >
      <TopBar></TopBar>

      <Text>Amount: </Text>

      <CurrencyInput
      value={amount}
      onChangeValue={setAmount}
      prefix="$"
      delimiter=","
      separator="."
      precision={2}
      onChangeText={(formattedValue) => {
        console.log(formattedValue); // $2,310.46
        setAmount;
        console.log("amount: " + amount);
      }}
    />

      <Text>Tax: </Text>

      <CurrencyInput
      value={tax}
      onChangeValue={setTax}
      prefix="%"
      delimiter=","
      separator="."
      precision={0}
      onChangeText={(formattedValue) => {
        console.log(formattedValue); // $2,310.46
        setTax;
        console.log("tax: " + tax);
      }}
    />


      <Text>Tip: </Text>
      <RadioForm
        radio_props={tip_amount}
        initial={2}
        onPress={(value) => setTip(value)}
        formHorizontal={true}
        labelHorizontal={false}
      />

      <Text>Round Up?</Text>
      <RadioForm
        radio_props={round_up}
        initial={0}
        onPress={(value) => setRoundUp(value)}
        formHorizontal={true}
        labelHorizontal={false}
      />

      <TouchableOpacity
        style={styles.calculateButton}
        onPress={() => //console.log("amountCB: " + amount + " taxCB: " + tax)}
          calculateTotal(amount, tax, tip, roundUp)}
      >
        <Text
          style={styles.calculateText}
        >Calculate</Text>
      </TouchableOpacity>




      <Text>Total: ${total}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  inputs: {
    borderWidth: 1,
    width: 80
  },
  calculateButton: {
    width: 80,
    backgroundColor: "blue",
    color: "white"
  },
  calculateText: {
    color: "white"
  }
})

//
