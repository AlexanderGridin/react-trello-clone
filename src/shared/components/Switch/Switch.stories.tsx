import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Switch } from "./Switch";

export default {
  title: "Shared/Switch",
  component: Switch,
  args: {
    initialValue: false,
    label: "Switch label",
    disabled: false,
    isTextDark: true,
    onChange: action("onChange"),
  },
  argTypes: {
    isTextDark: {
      description: "Defines is text will be displayed in dark or light color",
    },
    initialValue: {
      description: "Defines initial value",
    },
    label: {
      description: "Defines label text",
    },
    disabled: {
      description: "Defines disabled state",
    },
    onChange: {
      description: "Callback, that will be called when value will be changed",
    },
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const AllProps = Template.bind({});
AllProps.args = {};
