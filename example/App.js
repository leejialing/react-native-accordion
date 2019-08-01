/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
  YellowBox,
  TouchableOpacity
} from 'react-native'
import Accordion from '@jialing/react-native-accordion'
import ListItem from './src/component/ListItem'
import Simple from './src/Simple'

class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
  }


  render () {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
              <Simple />
              <ListItem
                title='this is a fade accordion item'
                titleContainerStyle={styles.titleContainer}
                animationType='fade'
              >
                <View style={styles.content}>
                  <Image
                    style={{width: 200, height: 200}}
                    source={require('./src/assets/images/avatar.jpeg')}
                  />
                </View>
              </ListItem>
              <ListItem
                style={styles.listItem}
                title='this is a slide accordion item'
                titleContainerStyle={styles.titleContainer}
                animationType='slide'
              >
                <View style={styles.content}>
                  <Image
                    style={{width: 200, height: 200}}
                    source={require('./src/assets/images/avatar.jpeg')}
                  />
                </View>
              </ListItem>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    )
  }
}

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated'
])

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#F3F3F3'
  },
  body: {
    backgroundColor: '#fff'
  },
  listItem: {
    marginHorizontal: 15,
    marginVertical: 20
  },
  titleContainer: {
    backgroundColor: '#e5e5e5',
    padding: 15,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    shadowColor: '#e5e5e5',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 5
    }
  },
  content: {
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#f5f5f5'
  }
})

export default App
