import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Chip } from "./Chip";

export default {
  title: "Shared/Chip",
  component: Chip,
  args: {
    children: "Chip text",
    textColor: "#000",
    backgroundColor: "#ebebeb",
  },
  argTypes: {
    children: {
      description: "Content, that will be displayed in the Chip",
    },
    textColor: {
      description: "Text color of the Chip",
    },
    backgroundColor: {
      description: "Background color of the Chip",
    },
    className: {
      description: "Expands existing styles by providing additional CSS classes",
    },
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithComplexContent = Template.bind({});
WithComplexContent.args = {
  children: (
    <>
      <b>Bold</b> text and <u>underlined</u> text.
    </>
  ),
};
