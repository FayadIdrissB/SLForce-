import { useState } from "react";


export default function useToggleAuth() {
    const [isLogin, setIsLogin] = useState<boolean>(true)
    const toggleAuth = () => setIsLogin(!isLogin)

    return {isLogin, setIsLogin, toggleAuth}
}