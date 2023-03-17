import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Alert } from "./Alert";

export default {
  title: "Shared/Alert",
  component: Alert,
  args: {
    title: "Alert title",
    children: "Alert content",
    type: "info",
  },
  argTypes: {
    title: {
      description: "Alert title",
    },
    children: {
      description: "Alert content",
    },
    type: {
      description: "Visual type of the Alert",
    },
    className: {
      description: "Expands existing styles by providing additional CSS classes",
    },
    onClose: {
      description: "Callback that will be called after click on the close button",
    },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithComplexContentAndWithoutCloseButton = Template.bind({});
WithComplexContentAndWithoutCloseButton.args = {
  children: (
    <>
      <b>Bold</b> text and <u>underlined</u> text.
    </>
  ),
  onClose: undefined,
};
