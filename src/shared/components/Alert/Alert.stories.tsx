import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Alert } from "./Alert";
import { argTypesCommonDescription } from "storybook/static-data";

export default {
  title: "Shared/Alert",
  component: Alert,
  args: {
    title: "Alert title",
    children: "Alert content",
    type: "info",
    onClose: undefined,
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
      description: argTypesCommonDescription.className,
      control: false,
    },
    onClose: {
      description: "Callback that will be called after click on the close button",
      table: { disable: true },
    },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const AllProps = Template.bind({});
AllProps.args = {};

export const WithComplexContentAndCloseButton = Template.bind({});
WithComplexContentAndCloseButton.argTypes = {
  children: { control: false },
  onClose: { table: { disable: false } },
};

WithComplexContentAndCloseButton.args = {
  children: (
    <>
      <b>Bold</b> text and <u>underlined</u> text.
    </>
  ),
  onClose: action("onClose"),
};
