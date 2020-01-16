import React, {Component} from 'react';
import {View, Alert} from 'react-native';
import {Item, Label, Input, Text, Button, Badge} from 'native-base';

export default class Contents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operator: '+',
      jumlah: 0,
      angka1: 0,
      angka2: 0,
    };
  }

  handleAngka1 = event => {
    this.setState({angka1: event});
  };

  handleAngka2 = event => {
    this.setState({angka2: event});
  };

  handleTambah = () => {
    this.setState({operator: '+'});
  };

  handleKurang = () => {
    this.setState({operator: '-'});
  };

  handleBagi = () => {
    this.setState({operator: '/'});
  };

  handleKali = () => {
    this.setState({operator: '*'});
  };

  hasil = () => {
    if (isNaN(this.state.angka1) || isNaN(this.state.angka2)) {
      Alert.alert('Error', 'Yang Anda Input Bukan Angka');
    } else if (this.state.operator == '+') {
      this.setState({
        jumlah: Number(this.state.angka1) + Number(this.state.angka2),
      });
    } else if (this.state.operator == '-') {
      this.setState({jumlah: this.state.angka1 - this.state.angka2});
    } else if (this.state.operator == '*') {
      this.setState({jumlah: this.state.angka1 * this.state.angka2});
    } else {
      this.setState({jumlah: this.state.angka1 / this.state.angka2});
    }
  };

  render() {
    return (
      <View style={{marginTop: 20}}>
        <Item floatingLabel>
          <Label>Masukan Angka</Label>
          <Input keyboardType="numeric" onChangeText={this.handleAngka1} />
        </Item>
        <Text
          style={{
            fontSize: 50,
            color: 'blue',
            textAlign: 'center',
            margin: 15,
          }}>
          {this.state.operator}
        </Text>
        <Item floatingLabel>
          <Label>Masukan Angka</Label>
          <Input keyboardType="numeric" onChangeText={this.handleAngka2} />
        </Item>

        <View style={{margin: 20}}>
          <Text
            style={{
              fontSize: 50,
              textAlign: 'center',
              padding: 10,
              borderBottomColor: 'grey',
              borderTopColor: 'grey',
              borderBottomWidth: 1,
              borderTopWidth: 1,
            }}>
            {this.state.jumlah}
          </Text>
          <Text style={{marginTop: 30}}>OPERATOR</Text>
        </View>

        <View style={{flexDirection: 'row', marginLeft: 35}}>
          <Button rounded onPress={this.handleTambah} style={{margin: 5}}>
            <Text>+</Text>
          </Button>
          <Button rounded onPress={this.handleKurang} style={{margin: 5}}>
            <Text>-</Text>
          </Button>
          <Button rounded onPress={this.handleKali} style={{margin: 5}}>
            <Text>*</Text>
          </Button>
          <Button rounded onPress={this.handleBagi} style={{margin: 5}}>
            <Text>/</Text>
          </Button>
          <Button success rounded onPress={this.hasil} style={{margin: 5}}>
            <Text>Hitung</Text>
          </Button>
        </View>
      </View>
    );
  }
}
