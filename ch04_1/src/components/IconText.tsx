import React from 'react'
import type {FC, ComponentProps} from 'react' /**타입스크립트가 코드를 자바스크립트로 컴파일할때만 필요한정보, 컴파일할때만 필요한경우 import type사용 */
import {Text} from 'react-native'
import type {TextStyle, StyleProp} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {TouchableView} from './TouchableView'
import type {TouchableViewProps} from './TouchableView'

export type IconTextProps = TouchableViewProps & 
    ComponentProps<typeof Icon> & {
        text: number|string
        textStyle: StyleProp<TextStyle>
    }

    //prittier-ignore
    export const IconText: FC<IconTextProps> = ({
        name, size, color, textStyle, text, ...touchableViewProps
    }) => {
        return (
            <TouchableView {...touchableViewProps}>
                <Icon name={name} size={size} color={color} />
                <Text style={textStyle}>{text}</Text>
            </TouchableView>
        )
    }