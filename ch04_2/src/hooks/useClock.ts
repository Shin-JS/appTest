import {useState, useEffect} from 'react'

export const useClock = () => {
    const [time, setTime] = useState(new Date())
    useEffect(() => {
        /**컴포넌트가 생성될때 실행 */
        const id = setInterval(()=>{
            setTime(new Date())
        }, 1000)
        return () => clearInterval(id) // 컴포넌트를 파괴할때 한번 실행
    }, [])
    return time
}