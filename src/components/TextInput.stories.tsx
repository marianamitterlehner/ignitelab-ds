
import { TextInput, TextInputRootProps } from './TextInput';
import { Meta, StoryObj } from '@storybook/react';
import { Envelope} from 'phosphor-react'

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: (
            <>
                <TextInput.Icon> 
                    <Envelope></Envelope>
                </TextInput.Icon>
                <TextInput.Input placeholder='e-mail'></TextInput.Input>
            </>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
        asChild: {
            table: {
                disable: true
            }
        }
    }
} as Meta<TextInputRootProps>

//variações
export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: <TextInput.Input placeholder='e-mail'></TextInput.Input>
    }
}
