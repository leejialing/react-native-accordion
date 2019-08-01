/**
 * Created by jialing on 2019-08-01.
 */


import React from 'react'
import {View, TouchableOpacity, Text, StyleSheet, Image, ViewPropTypes} from 'react-native'
import Accordion from '@jialing/react-native-accordion'
import PropTypes from 'prop-types'

export default class ListItem extends React.Component {
  static propTypes = {
    style: ViewPropTypes.style,
    showIcon: PropTypes.bool,
    title: PropTypes.string,
    titleStyle: Text.propTypes.style,
    titleContainerStyle: ViewPropTypes.style,
    animationType: PropTypes.oneOf(['slide', 'fade', 'none']),
    duration: PropTypes.number
  }

  static defaultProps = {
    showIcon: true
  }

  constructor (props) {
    super(props)
    this.state = {
      expand: false
    }
  }

  _onPress = () => {
    this.setState({
      expand: !this.state.expand
    })
  }

  render () {
    const {style, showIcon, title, titleStyle, titleContainerStyle, children, animationType, duration} = this.props
    const {expand} = this.state
    return (
      <View style={[styles.container, style]}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[titleContainerStyle, styles.titleContainerStyle]}
          onPress={this._onPress}
        >
          <Text style={[styles.titleStyle, titleStyle]}>
            {title}
          </Text>
          {
            showIcon &&
            <Image
              style={[styles.icon, {transform: [{rotate: `${expand ? 180 : 0}deg`}]}]}
              source={require('../assets/images/down.png')}
            />
          }
        </TouchableOpacity>
        <Accordion
          style={styles.accordion}
          expand={this.state.expand}
          animationType={animationType}
          duration={duration}
        >
          {children}
        </Accordion>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
  },
  titleStyle: {
    flex: 1,
    fontSize: 20,
    color: '#333'
  },
  titleContainerStyle: {
    flexDirection: 'row'
  },
  icon: {
    alignSelf: 'center',
    tintColor: '#333'
  },
  accordion: {}
})
