import { Meta, Story } from "@storybook/react";

import { InfoCard } from "./info-card";
import type { InfoCardProps } from "./info-card";

const meta: Meta = {
  title: "Components/InfoCard",
  component: InfoCard,
};

export default meta;

const Template: Story<InfoCardProps> = (args) => <InfoCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "Label",
  value: "Value",
};
