import { ComponentMeta, ComponentStory } from "@storybook/react";
import { argTypesCommonDescription } from "storybook/static-data";

import { Chip } from "./Chip";

export default {
  title: "Shared/Chip",
  component: Chip,
  args: {
    children: "All props",
    textColor: "#000",
    backgroundColor: "#ebebeb",
    className: "",
  },
  argTypes: {
    children: {
      type: { name: "string", required: true },
      description: "Content, that will be displayed in the Chip",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    textColor: {
      description: "Text color of the Chip",
    },
    backgroundColor: {
      description: "Background color of the Chip",
    },
    className: {
      description: argTypesCommonDescription.className,
      control: false,
    },
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const AllProps = Template.bind({});
AllProps.args = {};

export const RequiredProps = Template.bind({});
RequiredProps.argTypes = {
  textColor: {
    table: {
      disable: true,
    },
  },
  backgroundColor: {
    table: {
      disable: true,
    },
  },
  className: {
    table: {
      disable: true,
    },
  },
};

RequiredProps.args = {
  children: "Required props",
  textColor: undefined,
  backgroundColor: undefined,
  className: undefined,
};

export const ComplexChildren = Template.bind({});
ComplexChildren.argTypes = {
  children: { control: false },
  textColor: { table: { disable: true } },
  backgroundColor: { table: { disable: true } },
  className: { table: { disable: true } },
};

ComplexChildren.args = {
  textColor: undefined,
  backgroundColor: undefined,
  className: undefined,
  children: (
    <span>
      <b>Bold</b> text and <u>underlined</u> text.
    </span>
  ),
};
