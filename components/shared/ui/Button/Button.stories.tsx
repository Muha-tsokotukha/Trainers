import { Meta, StoryFn } from '@storybook/react';
import { Button, Props } from './Button';
import { mockButtonProps } from './Button.mocks';

export default {
  title: 'templates/Button',
  component: Button,
  argTypes: {},
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockButtonProps.base,
} as Props;
