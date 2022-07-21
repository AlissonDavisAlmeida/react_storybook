import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/Mylabel";

export default {
    title: 'Example/MyLabel',
    component: MyLabel,
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basic = Template.bind({})
Basic.args = {
    title: 'Hello World'
}

export const AllCaps = Template.bind({})
AllCaps.args = {
    title: 'HELLO WORLD'
}

export const Secondary = Template.bind({})
Secondary.args = {
    title: 'Hello World',
    secondary: true
}