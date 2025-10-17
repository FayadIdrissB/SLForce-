import { useState } from "react";

export default function togglePasswrdView() {
 const [isPasswordVisible, setIsPasswordVisible] = useState(true)   

 const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
 }

 return {isPasswordVisible, togglePasswordVisibility}
}