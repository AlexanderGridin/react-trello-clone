import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button } from "../Button";
import { Card } from "./Card";
import { argTypesCommonDescription } from "storybook/static-data";

export default {
  title: "Shared/Card",
  component: Card,
  args: {
    slotHeader: <h1 style={{ margin: "0" }}>Slot Header</h1>,
    slotContent: <p>Slot Content</p>,
    slotFooter: (
      <>
        <Button onClick={action("onClick")}>Button in Slot Footer</Button>
      </>
    ),
    backgroundColor: "#eceff4",
    minHeight: 200,
    isLoading: false,
    onDoubleClick: action("onDoubleClick"),
  },
  argTypes: {
    slotHeader: {
      description: `${argTypesCommonDescription.slotPrefix} header slot`,
      control: false,
    },
    slotContent: {
      description: `${argTypesCommonDescription.slotPrefix} content slot`,
      control: false,
    },
    slotFooter: {
      description: `${argTypesCommonDescription.slotPrefix} footer slot`,
      control: false,
    },
    backgroundColor: {
      description: "Sets card background color",
    },
    minHeight: {
      description: "Sets card min height",
    },
    isLoading: {
      description: argTypesCommonDescription.isLoading,
    },
    children: {
      description:
        "Accepts ReactNode that will be displayed no matter what was populated in the slots. If populated, slots content will be omitted.",
    },
    className: {
      description: argTypesCommonDescription.className,
      control: false,
    },
    "data-testid": {
      description: argTypesCommonDescription.dataTestId,
      control: false,
    },
    onDoubleClick: {
      description: `${argTypesCommonDescription.eventPrefix} double click on the card`,
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const AllProps = Template.bind({});
AllProps.args = {};

export const WithChildrenPopulated = Template.bind({});

WithChildrenPopulated.argTypes = {
  slotHeader: { table: { disable: true } },
  slotContent: { table: { disable: true } },
  slotFooter: { table: { disable: true } },
  children: { control: false },
};

WithChildrenPopulated.args = {
  children: (
    <div>
      <b>Some custom</b> card <u>content</u>.
    </div>
  ),
  minHeight: undefined,
};
