import { ComponentMeta, ComponentStory } from "@storybook/react";
import MyModal from "../../components/Modal";

export default {
    title: 'UI/MyModal',
    component: MyModal,
} as ComponentMeta<typeof MyModal>

const Template: ComponentStory<typeof MyModal> = (args) => <MyModal {...args} />

export const Basic = Template.bind({})
Basic.args = {
    
}


