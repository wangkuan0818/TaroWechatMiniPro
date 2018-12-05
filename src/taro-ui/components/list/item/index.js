import Taro from '@tarojs/taro'
import {View, Image, Switch, Text} from '@tarojs/components'

import PropTypes from 'prop-types'
import classNames from 'classnames'
import _isFunction from 'lodash/isFunction'

import AtIcon from '../../icon/index'
import AtComponent from '../../../common/component'

import './index.scss'

export default class AtListItem extends AtComponent {
  handleClick = (...args) => {
    if (_isFunction(this.props.onClick) && !this.props.disabled) {
      this.props.onClick(...args)
    }
  }

  handleSwitchClick(e) {
    e.stopPropagation()
  }

  handleSwitchChange = (...args) => {
    if (_isFunction(this.props.onSwitchChange) && !this.props.disabled) {
      this.props.onSwitchChange(...args)
    }
  }

  render() {
    const {
      note,
      arrow,
      title,
      thumb,
      disabled,
      isSwitch,
      extraText,
      hasBorder,
      extraThumb,
      switchIsCheck,
      icon,
      titleText,
    } = this.props

    const rootClass = classNames(
      'at-list__item',
      {
        'at-list__item--thumb': thumb,
        'at-list__item--multiple': note,
        'at-list__item--disabled': disabled,
        'at-list__item--no-border': !hasBorder,
      },
      this.props.className,
    )

    return (
      <View className={rootClass} onClick={this.handleClick}>
        <View className='at-list__item-container'>
          {thumb && (
            <View className='at-list__item-thumb item-thumb'>
              <Image
                className='item-thumb__info'
                mode='scaleToFill'
                src={thumb}
              />
            </View>
          )}
          {icon && icon.value && (
            <View className='at-list__item-icon'>
              <AtIcon value={icon.value} color={icon.color} size={icon.size}></AtIcon>
            </View>
          )}

          <View className='at-list__item-content item-content'>
            <View className='item-content__info'>
              <View className='item-content__info-title'>
                <Text>{title}</Text>
                {titleText && <Text className='item-content__info-title-text'>{titleText}</Text>}
              </View>
              {note && <View className='item-content__info-note'>{note}</View>}
            </View>
          </View>
          <View className='at-list__item-extra item-extra'>
            {extraText && <View className='item-extra__info'>{extraText}</View>}

            {extraThumb &&
            !extraText && (
              <View className='item-extra__image'>
                <Image
                  className='item-extra__image-info'
                  mode='aspectFit'
                  src={extraThumb}
                />
              </View>
            )}

            {isSwitch &&
            !extraThumb &&
            !extraText && (
              <View
                className='item-extra__switch'
                onClick={this.handleSwitchClick}
              >
                <Switch
                  color='#6190E8'
                  disabled={disabled}
                  checked={switchIsCheck}
                  onChange={this.handleSwitchChange}
                />
              </View>
            )}

            {arrow && (
              <View className='item-extra__icon'>
                <AtIcon value={`chevron-${arrow}`} color='#c7c7cc' />
              </View>
            )}
          </View>
        </View>
      </View>
    )
  }
}

AtListItem.defaultProps = {
  hasBorder: true,
  isSwitch: false,
  disabled: false,
}

AtListItem.propTypes = {
  note: PropTypes.string,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  thumb: PropTypes.string,
  onClick: PropTypes.func,
  isSwitch: PropTypes.bool,
  hasBorder: PropTypes.bool,
  switchIsCheck: PropTypes.bool,
  extraText: PropTypes.string,
  extraThumb: PropTypes.string,
  onSwitchChange: PropTypes.func,
  arrow: PropTypes.oneOf(['up', 'down', 'right']),
  icon: PropTypes.object,
  titleText: PropTypes.string,
}
