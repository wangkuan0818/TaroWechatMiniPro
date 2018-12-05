import Taro from '@tarojs/taro'
import PropTypes from 'prop-types'
import {View} from '@tarojs/components'

import AtComponent from '../../common/component'
import './index.scss'

export default class AtMessage extends AtComponent {
  static defaultProps = {
    show: false,
    type: 'success',
    duration: 3000,
    message: '',
  }

  static propTypes = {
    show: PropTypes.bool,
    type: PropTypes.string,
    duration: PropTypes.number,
    message: PropTypes.string,
  }

  constructor(props) {
    super(props)
    this.state = {
      show: props.show,
      type: props.type,
      duration: props.duration,
      message: props.message,
    }
  }

  tip(message = '　', type = 'success') {
    this.timer && (this.timer = clearTimeout(this.timer))
    this.setState({
      show: true,
      type,
      message,
    }, () => {
      this.timer = setTimeout(() => {
        this.setState({
          show: false,
        })
      }, this.state.duration)
    })
  }

  success(message) {
    this.tip(message, 'success')
  }

  warn(message) {
    this.tip(message, 'warn')
  }

  error(message) {
    this.tip(message, 'error')
  }

  componentWillUnmount() {
    this.timer && (this.timer = clearTimeout(this.timer))
  }

  render() {
    const {show, type, message} = this.state
    const className = `at-message ${type}${show ? ' at-message--active' : ''}`
    return (
      <View className={className}>
        <View className='at-message-content'>{message}</View>
      </View>
    )
  }
}
