import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  View,
} from 'react-native';

import styles from './styles';

const Touchable = Platform.OS == 'ios' ? TouchableOpacity : TouchableNativeFeedback;

export default class DropdownItem extends PureComponent {
  static defaultProps = {
    color: 'transparent',
    disabledColor: 'transparent',
    rippleContainerBorderRadius: 0,
    shadeBorderRadius: 0,
  };

  static propTypes = {
    index: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);

    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    let { onPress, index } = this.props;

    if ('function' === typeof onPress) {
      onPress(index);
    }
  }

  render() {
    let { children, style, index, ...props } = this.props;

    return (
      <Touchable
        {...props}

        onPress={this.onPress}
      >
        <View
          style={[styles.container, style]}
        >
          {children}
        </View>
      </Touchable>
    );
  }
}
