import React from 'react';

import tw, { css, styled, theme } from 'twin.macro'
import { Story, Meta } from '@storybook/react/types-6-0';

import { Form } from './Form';

export default {
  title: 'Form',
  component: Form,
  
} as Meta;

export const Template: Story = () => <Form />;

