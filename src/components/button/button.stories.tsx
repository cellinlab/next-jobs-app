import { PlusSquareIcon } from "@chakra-ui/icons";
import { Meta, Story } from "@storybook/react";

import { Button, ButtonProps } from "./button";

const meta: Meta = {
  title: "Components/Button",
  component: Button,
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "Button",
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  children: "Button",
  icon: <PlusSquareIcon />,
};
