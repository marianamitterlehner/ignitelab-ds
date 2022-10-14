
import { Heading, HeadingProps } from './Heading';
import { Meta, StoryObj} from '@storybook/react';

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Loren ipsum'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type:'inline-radio'
            }
        }
    }
} as Meta<HeadingProps>

//variações
export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
    args: {
        size:'sm'
    }
}

export const Large: StoryObj<HeadingProps> = {
    args: {
        size:'lg'
    }
}

export const CustomComponet: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>testando</h1>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
        asChild: {
            table:{
                disable:true
            }
        }
    },

}