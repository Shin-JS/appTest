import React from 'react'
import {StyleSheet, SafeAreaView, Text} from 'react-native'
import {useClock} from './src/hooks'
/**useState 사용법
 * const [현재값, set_함수] = useState(초기값)
 * set_함수 = (새로운값): void
 */

/**useEffect: 의존성 목록에 있는 조건 중 어느하나라도 충족되면 그때마다 콜백함수를 다시 실행
 * 사용법:
 *  useEffect(콜백_함수, 의존성_목록)
 *  콜백_함수 () => {}
 * 한번만 실행하려면 의존성 목록에 빈배열에 지정하면 됨
 */
export default function App(){
  const time = useClock()

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text style={[styles.digitFont, styles.time]}>
        {time.toLocaleTimeString()}
      </Text>
      <Text style={styles.digitFont}>{time.toLocaleDateString()}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  digitFont: {fontFamily: 'MajorMonoDisplay-Regular', fontWeight: '400'},
  time: {fontSize: 50}
})