import React, {FormEvent, useState} from 'react';
import {TextField} from "@/components/ui/textField";
import {useStores} from "@/providers";
import { CustomUI } from '@/components';

import "./index.scss"

type TAddNewCardProps = {
    userId: number
}

export const AddNewTodo: React.FC<TAddNewCardProps> = ({userId}) => {

    const {todoStore, dialogStore} = useStores()
    const [formState, setFormState] = useState<{
       name: string,
    }>({name:"new todo", })

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {

            await todoStore.addTodo(userId,formState.name )
            //await todoStore.
            dialogStore.closeDialog()

        } catch (e) {
            throw new Error("ошибка логинизации")
        }

    }
    return (
        <div>
            <p><strong>Name:</strong> {userId}</p>
            <form className="formContainer" onSubmit={onSubmit}>
                <TextField
                    className={"textField"}
                    label={'question'}
                    onChange={(e) => {
                        setFormState({
                            ...formState,
                            name: e.target.value
                        })
                    }}
                />
                <div>
                    <CustomUI.Button type={'submit'} className="submitButton">
                        Submit
                    </CustomUI.Button>
                </div>

            </form>

        </div>
    );
}

