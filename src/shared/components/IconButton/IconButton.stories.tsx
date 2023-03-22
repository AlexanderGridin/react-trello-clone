import { ComponentMeta, ComponentStory } from "@storybook/react";

import { parseEnumForStory } from "storybook/utils";

import { IconButton } from "./IconButton";
import { MaterialIcon } from "../Icon";
import { argTypesCommonDescription } from "storybook/static-data";

const { options: materialIconOptions, labels: materialIconLabels } = parseEnumForStory(MaterialIcon);

export default {
  title: "Shared/IconButton",
  component: IconButton,
  args: {
    icon: MaterialIcon.Home,
    type: "button",
    isActive: false,
    color: "#a5a9b1",
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
      description: argTypesCommonDescription.className,
      control: false,
    },
    "data-testid": {
      description: argTypesCommonDescription.dataTestId,
      control: false,
    },
    onClick: {
      description: `${argTypesCommonDescription.eventPrefix} after click on the button`,
    },
    icon: {
      type: { name: "string", required: true },
      description: "Icon that will be displayed",
      options: materialIconOptions,
      mapping: MaterialIcon,
      control: {
        type: "select",
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

export const AllProps = Template.bind({});
AllProps.args = {};
