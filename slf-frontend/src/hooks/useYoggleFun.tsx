import { useState } from "react"

export default function useYoggleFun() {
    const [isCoach, setIsCoach] = useState(false)

    const toggleCoach = () => {
        setIsCoach(!isCoach)
    }

    return {isCoach, toggleCoach}
}