import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Helper } from "./Helper";

export default {
  title: "Shared/Helper",
  component: Helper,
  args: {
    children: "Test helper text",
    type: "regular",
  },
  argTypes: {
    children: {
      description: "Accepts ReactNode that will be displayed as Helper content",
      type: { name: "string", required: true },
    },
    type: {
      description: "Defines visual style of the Helper",
    },
  },
} as ComponentMeta<typeof Helper>;

const Template: ComponentStory<typeof Helper> = (args) => <Helper {...args} />;

export const AllProps = Template.bind({});
AllProps.args = {};

export const WithComplexChildren = Template.bind({});

WithComplexChildren.argTypes = {
  children: { control: false },
};

WithComplexChildren.args = {
  children: (
    <span>
      <b>Bold</b> text and <u>underlined</u> text.
    </span>
  ),
};
