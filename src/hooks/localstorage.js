import { useState, useEffect } from "react";

const PREFIX = 'code-pen'


export default function UseLocalStorage(Key, initialValue) {
    const prefixedKey = PREFIX + Key
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey)
        if (jsonValue != null) return JSON.parse(jsonValue)

        if (typeof initialValue === 'function') {
            return initialValue()
        } else {
            return initialValue
        }
    })
    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])

    return [value, setValue]

}