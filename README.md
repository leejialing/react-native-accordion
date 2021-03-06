# react-native-accordion
a simple react native accordion component.

React Native 手风琴组件，纯Javascript实现，两端通用。

## Install (安装)

`npm install @jialing/react-native-accordion --save`  
or  
`yarn add @jialing/react-native-accordion`

## Usage

```jsx harmony
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

```

## Example
clone the example directory and run the example
* ```git clone https://github.com/z372183629/react-native-accordion.git```
* ```cd example && yarn install```
* ```react-native run-ios```

## Props
 Name | Description | Default | Type
------|-------------|----------|-----------
style | container style (容器样式) | {} | style
expand | controls show or hide the content (控制展开/收起) | undefined | bool
animationType | the animationType prop controls the show or hide action's animates (展开/收起时的动画效果)| default | string, one of 'default','slide','none' 
duration | animation duration in milliseconds (动画持续时间，毫秒) | 300 | number


## License
*MIT*

## 效果图
![Alt Text](https://github.com/z372183629/react-native-accordion/raw/master/images/preview1.gif)

