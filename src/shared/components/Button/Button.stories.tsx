import { Button } from "./Button";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MaterialIcon } from "../Icon/enums/MaterialIcon";
import { parseEnumForStory } from "shared/utils/storybook/parseEnumForStory";

const { options: materialIconOptions, labels: materialIconLabels } = parseEnumForStory(MaterialIcon);

export default {
  title: "Shared/Button",
  component: Button,
  args: {
    children: "Button",
    icon: MaterialIcon.None,
    type: "button",
    visualStyle: "regular",
    style: {},
  },
  argTypes: {
    type: {
      description: "HTML5 button type",
    },
    style: {
      description: "Extend component inline styles",
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
    children: {
      description: "Button text",
      table: {
        defaultValue: {
          summary: "Button",
        },
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};
