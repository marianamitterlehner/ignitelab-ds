
import { InputHTMLAttributes, ReactNode } from 'react';


export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
    return (
        <div className='flax items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-1 ring-cyan-500'>
            {props.children}
        </div>
    )
}

//function TextInputIcon() {}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }
function TextInputInput(props: TextInputInputProps) {

    return (
        <input className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none '
            {...props}
        />

    )
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput
}