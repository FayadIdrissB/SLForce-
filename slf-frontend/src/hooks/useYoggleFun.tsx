import { useRef, useState } from "react"
import { Animated } from "react-native"

export default function useYoggleFun() {
    const fadeAnime = useRef(new Animated.Value(0)).current

    const fadeIn = () => {
        Animated.timing(fadeAnime, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        }).start()
    }
    const fadeOut = () => {
        Animated.timing(fadeAnime, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }).start()
    }
    const [isCoach, setIsCoach] = useState(false)

    const toggleCoach = () => {

        setIsCoach(!isCoach)
        if (isCoach) {
            fadeOut()
        } else {
            fadeIn()
        }
    }

    return {isCoach, toggleCoach, fadeAnime}
}