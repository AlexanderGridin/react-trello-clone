import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { argTypesCommonDescription } from "storybook/static-data";
import { parseEnumForStory } from "storybook/utils";

import { MaterialIcon } from "../Icon";

import { Button } from "./Button";

const { options: materialIconOptions, labels: materialIconLabels } = parseEnumForStory(MaterialIcon);

export default {
  title: "Shared/Button",
  component: Button,
  args: {
    type: "button",
    icon: MaterialIcon.None,
    isIconOnly: false,
    style: {},
    visualStyle: "regular",
    children: "Button",
    "data-testid": "",
    className: "",
    onClick: action("onClick"),
  },
  argTypes: {
    type: {
      description: "HTML5 button type",
    },
    style: {
      description: argTypesCommonDescription.style,
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
      description: `${argTypesCommonDescription.eventPrefix} click on the button`,
    },
    icon: {
      description: "Icon displayed before text",
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
          summary: "None",
        },
      },
    },
    isIconOnly: {
      description: "Defines is button text will be omitted",
    },
    children: {
      description: "Text that will be displayed in the button",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "Button",
        },
      },
    },
    visualStyle: {
      description: "Defines visual style of the button",
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const AllProps = Template.bind({});
AllProps.args = {};

export const RequiredProps = Template.bind({});

RequiredProps.argTypes = {
  type: { table: { disable: true } },
  icon: { table: { disable: true } },
  isIconOnly: { table: { disable: true } },
  style: { table: { disable: true } },
  visualStyle: { table: { disable: true } },
  "data-testid": { table: { disable: true } },
  className: { table: { disable: true } },
  children: { table: { disable: true } },
};

RequiredProps.args = {
  onClick: action("onClick"),
  type: "button",
  icon: MaterialIcon.None,
  isIconOnly: false,
  style: {},
  visualStyle: "regular",
  "data-testid": "",
  className: "",
};

export const WithIconOnly = Template.bind({});
WithIconOnly.args = {
  isIconOnly: true,
  icon: MaterialIcon.Home,
};
