import { useState } from 'react'

export const useForm = initialValue => {
    const [form, setForm] = useState(initialValue)

    const onChange = (name, value) => {
        const newForm = {...form, [name]: value}
        setForm(newForm)
    }

    const clear = () => {
        setForm(initialValue)
    }

    return { form, onChange, clear, setForm }
}