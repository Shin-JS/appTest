import React from 'react'
import type {FC, ReactNode, ComponentProps} from 'react'
import {TouchableOpacity, View} from 'react-native'
import type {StyleProp, ViewStyle} from 'react-native'

type TouchableOpacityProps = ComponentProps<typeof TouchableOpacity> /**TouchableOpacity의 속성타입을 알아낸 후 이를 TouchableOpacityProps 타입으로 만듬 */

export type TouchableViewProps = TouchableOpacityProps /*& {
    children?: ReactNode
}*/
& {
    viewStyle?: StyleProp<ViewStyle>
}
/**FC타입은 ReactNode타입인 children속성을 포함 하였기 때문에 children? 제거해도 되나봄 */

//prettier-ignore
export const TouchableView: FC<TouchableViewProps> = ({
    children, viewStyle, ...touchableProps}) =>{
        return (
            <TouchableOpacity {...touchableProps}>
                <View style={[viewStyle]}>{children}</View>
            </TouchableOpacity>
        )
    }