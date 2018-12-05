import PropTypes from 'prop-types'
import Taro from '@tarojs/taro'
import {View} from '@tarojs/components'
import isNaN from 'lodash/isNaN'

import AtComponent from '../../common/component'
import './index.scss'


export default class AtBadge extends AtComponent {
  constructor() {
    super(...arguments)
    this.state = {}
  }

  formatValue(value, maxValue) {
    if (value === '' || value === null) return ''
    const numValue = +value
    if (isNaN(numValue)) {
      return value
    }
    return numValue > maxValue ? `${maxValue}+` : numValue
  }

  render() {
    const {
      dot,
      value,
      maxValue,
      customStyle,
      circle,
    } = this.props
    const rootClassName = ['at-badge']

    const val = this.formatValue(value, maxValue)

    if (circle) {
      rootClassName.push('at-badge-circle')
    }

    return (
      <View
        className={this.getClassName(rootClassName, this.props.className)}
        style={customStyle}
      >
        {this.props.children}
        {dot ? <View className='at-badge__dot'></View> : val !== '' && <View className='at-badge__num'>{val}</View>}
      </View>
    )
  }
}

AtBadge.defaultProps = {
  dot: false,
  value: '',
  maxValue: 99,
  customStyle: {},
  circle: false,
}

AtBadge.propTypes = {
  dot: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  maxValue: PropTypes.number,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  circle: PropTypes.bool,
}
