import { useState, useEffect } from "react";

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (key: string) => [
  value: LocalStorageReturnValue,
  {
    setItem: (value: LocalStorageSetValue) => void
    removeItem: () => void
  },
]

export const useLocalStorage : UseLocalStorage = (key) => {
    const [value, setValue] = useState<LocalStorageReturnValue>(() => {
        const storedValue: LocalStorageReturnValue = localStorage.getItem(key)
        return storedValue ? JSON.parse(storedValue) : null
    })

    const setItem = (newValue: LocalStorageSetValue) => {
        localStorage.setItem(key, JSON.stringify(newValue))
        setValue(newValue)
    }

    const removeItem = () => {
        localStorage.removeItem(key)
        setValue(null)
    }

    useEffect(() => {
        const newValue = JSON.stringify(value)
        localStorage.setItem(key, newValue)
    }, [key, value])
            
    return [value, { setItem, removeItem }];
}