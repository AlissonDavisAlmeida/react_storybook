import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/Mylabel";

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes:{
        size: {
            control: "select",
            options: ["normal", "h1", "h2", "h3"]
        },
        color: {control:"select"}
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basic = Template.bind({})
Basic.args = {
    title: 'Hello World Man',
    allCaps: false 
}

export const AllCaps = Template.bind({})
AllCaps.args = {
    title: 'HELLO WORLD',
    allCaps: true
}

export const Secondary = Template.bind({})
Secondary.args = {
    title: 'Hello World',
    color: 'secondary'
}

export const Tertiary = Template.bind({})
Tertiary.args = {
    title: 'Hello World',
    color: 'tertiary'
}

export const CustomLabel = Template.bind({})
CustomLabel.args = {
    title: 'Hello World',
    size: "h1"
}

