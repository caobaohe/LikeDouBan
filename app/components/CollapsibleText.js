/**
 * 可以折叠展开的Text
 */
import React, {
    Component,
    PropTypes,
} from 'react';

import {View, Image, StyleSheet, Animated, Text} from 'react-native';

export default class CollapsibleText extends Component {

    static propTypes = {
        style: Text.propTypes.style,
        expandTextStyle: Text.propTypes.style,
        numberOfLines: PropTypes.number
    }

    constructor(props) {
        super(props);
        this.state = {
            expanded: true,
            numberOfLines: null,
            showExpandText: false,
            expandText: '展开',
            measureFlag: true
        }
        this.numberOfLines = props.numberOfLines;
        this.needExpand = true;
        this.measureFlag = true;
    }

    _onTextLayout(event) {
        if (this.measureFlag) {
            if (this.state.expanded) {
                this.maxHeight = event.nativeEvent.layout.height;
                this.setState({expanded: false, numberOfLines: this.numberOfLines});
            } else {
                this.mixHeight = event.nativeEvent.layout.height;
                if (this.mixHeight == this.maxHeight) {
                    this.needExpand = false;
                } else {
                    this.needExpand = true;
                    this.setState({showExpandText: true})
                }
                this.measureFlag = false;
            }
        }

    }

    _onPressExpand() {
        if (!this.state.expanded) {
            this.setState({numberOfLines: null, expandText: '收起', expanded: true})
        } else {
            this.setState({numberOfLines: this.numberOfLines, expandText: '展开', expanded: false})
        }
    }

    render() {
        const {numberOfLines, onLayout, expandTextStyle, ...rest} = this.props;
        let expandText = this.state.showExpandText ? (
            <Text
                style={[this.props.style, styles.expandText, expandTextStyle]}
                onPress={this._onPressExpand.bind(this)}>
                {this.state.expandText}</Text>
        ) : null;
        return (
            <View>
                <Text
                    numberOfLines={this.state.numberOfLines}
                    onLayout={this._onTextLayout.bind(this)}
                    {...rest}
                >
                    {this.props.children}
                </Text>
                {expandText}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    expandText: {
        color: 'blue',
        marginTop: 0
    }
});
