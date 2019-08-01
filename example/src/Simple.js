/**
 * Created by jialing on 2019-08-01.
 */

import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import Accordion from '@jialing/react-native-accordion'

export default class Simple extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      expand: false
    }
  }

  onExpandStateChange = () => {
    this.setState({
      expand: !this.state.expand
    })
  }

  render () {
    const {expand} = this.state
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.titleContainer} onPress={this.onExpandStateChange}>
          <Text style={styles.title}>press here to {expand ? 'shrink' : 'expand'} it</Text>
        </TouchableOpacity>
        <Accordion style={styles.accordion} expand={expand}>
          <Text style={styles.content}>
            React Native lets you build mobile apps using only JavaScript. It uses the same design as React, letting you
            compose a rich mobile UI using declarative components.
          </Text>
        </Accordion>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  titleContainer: {
    borderWidth: 1,
    borderColor: '#999'
  },
  title: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 22,
    color: '#333'
  },
  accordion: {
    padding: 15,
    borderTopWidth: 0,
    borderWidth: 1,
    borderColor: '#999'
  },
  content: {
    fontSize: 20,
    color: '#666'
  }
})
