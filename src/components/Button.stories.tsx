
import { Button, ButtonProps } from './Button';
import { Meta, StoryObj} from '@storybook/react';

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Loren ipsum'
    },
    argTypes: {
        
    }
} as Meta<ButtonProps>

//variações
export const Default: StoryObj<ButtonProps> = {}

