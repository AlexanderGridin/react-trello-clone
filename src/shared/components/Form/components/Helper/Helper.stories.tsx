import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Helper } from "./Helper";

export default {
  title: "Shared/Helper",
  component: Helper,
  args: {
    children: "Test helper text",
    type: "regular",
  },
} as ComponentMeta<typeof Helper>;

const Template: ComponentStory<typeof Helper> = (args) => <Helper {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithComplexText = Template.bind({});
WithComplexText.args = {
  children: (
    <span>
      <b>Bold</b> text and <u>underlined</u> text.
    </span>
  ),
};
