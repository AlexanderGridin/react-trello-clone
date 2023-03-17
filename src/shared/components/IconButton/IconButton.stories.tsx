import { ComponentMeta, ComponentStory } from "@storybook/react";

import { parseEnumForStory } from "shared/utils/storybook";
import { MaterialIcon } from "shared/components/Icon/enums";

import { IconButton } from "./IconButton";

const { options: materialIconOptions, labels: materialIconLabels } = parseEnumForStory(MaterialIcon);

export default {
  title: "Shared/IconButton",
  component: IconButton,
  args: {
    icon: MaterialIcon.Home,
    type: "button",
    isActive: false,
    activeColor: "#5E81AC",
  },
  argTypes: {
    type: {
      description: "HTML5 button type",
    },
    isActive: {
      description: "Defines is active color will be visible",
    },
    activeColor: {
      description: "Active color, that will be used on hover, and when button will be marked as active",
    },
    className: {
      description: "String with additional CSS classes",
    },
    "data-testid": {
      description: "Id that will be used in the testing",
    },
    onClick: {
      description: "Callback that will be called when button will be clicked",
    },
    icon: {
      description: "Icon that will be displayed",
      options: materialIconOptions,
      mapping: MaterialIcon,
      control: {
        labels: materialIconLabels,
      },
      table: {
        type: {
          summary: "MaterialIcon",
          detail: Object.keys(MaterialIcon).join("\n"),
        },
        defaultValue: {
          summary: "Home",
        },
      },
    },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
