/**
 * Created by jialing on 2019-08-01.
 */

import React from 'react'
import {LayoutAnimation, StyleSheet, View, ViewPropTypes} from 'react-native'
import PropTypes from 'prop-types'

/**
 * Created by jialing on 2018-11-25.
 */

export default class Accordion extends React.Component {
  static propTypes = {
    style: ViewPropTypes.style,
    children: PropTypes.any,
    expand: PropTypes.bool,
    animationType: PropTypes.oneOf(['slide', 'fade', 'none']),
    duration: PropTypes.number
  }

  static defaultProps = {
    style: {},
    animationType: 'fade',
    duration: 300
  }

  componentWillReceiveProps (nextProps, nextContext) {
    if (nextProps.animationType !== 'none' && nextProps.expand !== this.props.expand) {
      LayoutAnimation.configureNext({
        duration: nextProps.duration, // 动画持续时间
        create: {type: 'linear', property: 'opacity'},
        delete: {type: 'linear', property: 'opacity'},
        update: {type: 'easeInEaseOut'}
      })
    }
  }

  render () {
    const {expand, style, children, animationType} = this.props
    return (
      <View style={{overflow: 'hidden', height: expand ? undefined : 0}}>
        <View style={style}>
          {
            animationType === 'slide'
              ? <View style={[styles.slider, {position: expand ? undefined : 'absolute'}]}>
                {children}
              </View>
              : (expand && children)
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  slider: {
    flex: 1,
    bottom: 0,
    left: 0,
    right: 0
  }
})
