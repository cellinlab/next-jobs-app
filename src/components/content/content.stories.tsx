import { Meta, Story } from "@storybook/react";

import { Content } from "./content";
import type { ContentProps } from "./content";

const meta: Meta = {
  title: "Components/Content",
  component: Content,
};

export default meta;

const Template: Story<ContentProps> = (args) => <Content {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: `I am a paragraph. Just for testing purposes, I am going to write a little bit more so that I can see what it looks like when I have more than one line of text. I am a paragraph. Just for testing purposes, I am going to write a little bit more so that I can see what it looks like when I have more than one line of text. I am a paragraph. Just for testing purposes, I am going to write a little bit more so that I can see what it looks like when I have more than one line of text. I am a paragraph. Just for testing purposes, I am going to write a little bit more so that I can see what it looks like when I have more than one line of text. I am a paragraph. Just for testing purposes, I am going to write a little bit more so that I can see what it looks like when I have more than one line of text. I am a paragraph. Just for testing purposes, I am going to write a little bit more so that I can see what it looks like when I have more than one line of text. I am a paragraph. Just for testing purposes, I am going to write a little bit more so that I can see what it looks like when I have more than one line of text. I am a paragraph. Just for testing purposes, I am going to write a little bit more so that I can see what it looks like when I have more than one line of text. I am a paragraph. Just for testing purposes, I am going to write a little bit more so that I can see what it looks like when I have more than one line of text. I am a paragraph. Just for testing purposes, I am going to write a little bit more so that I can see what it looks like when I have more than one line of text. I am a paragraph. Just for testing purposes, I am going to write a little bit more so that I can see what it looks like when I have more than one line of text. I am a paragraph. Just for testing purposes, I am going to write a little bit more so that I can see what it looks like when I have more than one line of text. I am a paragraph. Just for testing purposes, I am going to write a little bit more so that I can see what it looks like when I have more than one line of text.`,
};
