/**
 * @author chenzhenhua
 * @createTime 2018/10/12
 * @description 扩展AtModal
 *                1.增加isSimple(样式调整),this.props.children为内容
 *                2.增加点击遮罩层触发onCancel回调
 */

import Taro from '@tarojs/taro'
import {View, Button, Text} from '@tarojs/components'

import PropTypes from 'prop-types'
import classNames from 'classnames'

import AtModalHeader from './header/index'
import AtModalFooter from './footer/index'
import AtModalAction from './action/index'
import AtModalContent from './content/index'
import AtComponent from '../../common/component'
import AtButton from '../button/index'

import './index.scss'

export default class AtModal extends AtComponent {
  constructor(props) {
    super(props)
  }
  handleTouchMove = e => {
    e.stopPropagation()
  }

  render() {
    const {title, content, cancelText, confirmText, isSimple, openType, isOpened} = this.props

    const rootClass = classNames(
      'at-modal',
      {
        'at-modal--active': isOpened,
      },
      this.props.className,
    )

    if (isSimple || title || content) {
      const isRenderAction = cancelText || confirmText
      return (
        <View className={rootClass} onTouchMove={this.handleTouchMove}>
          <View className='at-modal__overlay' />
          <View className='at-modal__container'>
            {title && (
              <AtModalHeader>
                <Text>{title}</Text>
              </AtModalHeader>
            )}
            {content && (
              <AtModalContent>
                <View className='content-simple'>
                  <Text>{content}</Text>
                </View>
              </AtModalContent>
            )}
            {this.props.children}
            {isSimple && (cancelText || confirmText) && (
              <AtModalFooter>
                {cancelText && (
                  <AtButton className='at-button--cancel' onClick={this.props.onCancel}>{cancelText}</AtButton>
                )}
                {confirmText && (
                  openType ? (
                    <AtButton type='primary' openType={openType} onOpenSetting={this.props.onConfirm} onGetPhoneNumber={this.props.onConfirm}>{confirmText}</AtButton>
                  ) : (
                    <AtButton type='primary' onClick={this.props.onConfirm}>{confirmText}</AtButton>
                  )
                )}
              </AtModalFooter>
            )}
            {!isSimple && isRenderAction && (
              <AtModalAction isSimple>
                {cancelText && (
                  <Button onClick={this.props.onCancel}>{cancelText}</Button>
                )}
                {confirmText && (
                  <Button onClick={this.props.onConfirm}>{confirmText}</Button>
                )}
              </AtModalAction>
            )}
          </View>
        </View>
      )
    }

    return (
      <View
        onTouchMove={this.handleTouchMove}
        className={this.getClassName(rootClass, this.props.className)}
      >
        <View onClick={this.props.onCancel} className='at-modal__overlay' />
        <View className='at-modal__container'>{this.props.children}</View>
      </View>
    )
  }
}

AtModal.propTypes = {
  title: PropTypes.string,
  isOpened: PropTypes.bool,
  isSimple: PropTypes.bool,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  content: PropTypes.string,
  cancelText: PropTypes.string,
  confirmText: PropTypes.string,
  openType: PropTypes.oneOf(['openSetting', 'getPhoneNumber']),
}
