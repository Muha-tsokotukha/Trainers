import { Meta, StoryFn } from '@storybook/react';
import { Header } from './Header';

export default {
  title: 'templates/BaseTemplate',
  component: Header,
  argTypes: {},
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = (args) => <Header {...args} />;

export const Base = Template.bind({});
