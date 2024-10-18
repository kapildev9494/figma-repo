import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from './Button';
import { expect, userEvent, within } from '@storybook/test';
import { CalendarMonthRegular } from '@fluentui/react-icons';
import { brandTheme, convertHexToRgba } from '../ThemeProvider/theme';

const meta = {
  title: 'Delish/Components/Button',
  component: Button,
  parmaeters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    appearance: {
      options: ['primary', 'secondary', 'subtle', 'transparent'],
      control: { type: 'select' },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', gap: '5%' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
  args: {
    children: 'Button',
    appearance: 'primary',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const primaryButton = canvas.getByRole('button');

    await userEvent.click(primaryButton);
    expect(primaryButton).toHaveFocus();

    // test mock function call on click
    expect(meta.args?.onClick).toHaveBeenCalled();

    await userEvent.tab();
    expect(primaryButton).not.toHaveFocus();
  },
};

export const Rest: Story = {
  args: {
    appearance: 'primary',
    size: 'small',
  },

  render: () => (
    <>
      <Button id='primary' appearance='primary'>
        Primary
      </Button>
      <Button id='secondary' appearance='secondary'>
        Secondary
      </Button>
      <Button id='subtle' appearance='subtle'>
        Subtle
      </Button>
      <Button id='transparent' appearance='transparent'>
        Transparent
      </Button>
    </>
  ),

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttonPrimary = canvas.getByText('Primary');
    const buttonSecondary = canvas.getByText('Secondary');
    const buttonSubtle = canvas.getByText('Subtle');
    const buttonTransparent = canvas.getByText('Transparent');

    expect(buttonPrimary).toHaveStyle(
      'background-color: ' + convertHexToRgba(brandTheme.colorBrandBackground),
    );
    expect(buttonSecondary).toHaveStyle(
      'background-color: ' + convertHexToRgba(brandTheme.colorBrandBackground2),
    );
    expect(buttonSubtle).toHaveStyle(
      'background-color: ' + convertHexToRgba(brandTheme.colorSubtleBackground),
    );
    expect(buttonTransparent).toHaveStyle(
      'background-color: ' +
        convertHexToRgba(brandTheme.colorTransparentBackground),
    );
  },
};

export const Hover: Story = {
  parameters: {
    pseudo: {
      hover: ['#primary', '#secondary', '#subtle', '#transparent'],
    },
  },
  render: () => (
    <>
      <Button id='primary' appearance='primary'>
        Primary
      </Button>
      <Button id='secondary' appearance='secondary'>
        Secondary
      </Button>
      <Button id='subtle' appearance='subtle'>
        Subtle
      </Button>
      <Button id='transparent' appearance='transparent'>
        Transparent
      </Button>
    </>
  ),
};

export const Focus: Story = {
  parameters: {
    pseudo: {
      focus: ['#primary', '#secondary', '#subtle', '#transparent'],
    },
  },
  render: () => (
    <>
      <Button id='primary' appearance='primary'>
        Primary
      </Button>
      <Button id='secondary' appearance='secondary'>
        Secondary
      </Button>
      <Button id='subtle' appearance='subtle'>
        Subtle
      </Button>
      <Button id='transparent' appearance='transparent'>
        Transparent
      </Button>
    </>
  ),
};

export const Disabled: Story = {
  render: () => (
    <>
      <Button id='primary' appearance='primary' disabled>
        Primary
      </Button>
      <Button id='secondary' appearance='secondary' disabled>
        Secondary
      </Button>
      <Button id='subtle' appearance='subtle' disabled>
        Subtle
      </Button>
      <Button id='transparent' appearance='transparent' disabled>
        Transparent
      </Button>
    </>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button');

    for (const button of buttons) {
      expect(button).toHaveStyle(
        'background-color: ' +
          convertHexToRgba(brandTheme.colorNeutralBackgroundDisabled),
      );
    }
  },
};

export const WithIcon: Story = {
  render: () => (
    <>
      <Button id='primary' appearance='primary' icon={<CalendarMonthRegular />}>
        Primary
      </Button>
      <Button
        id='secondary'
        appearance='secondary'
        icon={<CalendarMonthRegular />}
      >
        Secondary
      </Button>
      <Button id='subtle' appearance='subtle' icon={<CalendarMonthRegular />}>
        Subtle
      </Button>
      <Button
        id='transparent'
        appearance='transparent'
        icon={<CalendarMonthRegular />}
      >
        Transparent
      </Button>
    </>
  ),
};

export const OnlyIcon: Story = {
  render: () => (
    <>
      <Button
        id='primary'
        appearance='primary'
        icon={<CalendarMonthRegular />}
      ></Button>
      <Button
        id='secondary'
        appearance='secondary'
        icon={<CalendarMonthRegular />}
      ></Button>
      <Button
        id='subtle'
        appearance='subtle'
        icon={<CalendarMonthRegular />}
      ></Button>
      <Button
        id='transparent'
        appearance='transparent'
        icon={<CalendarMonthRegular />}
      ></Button>
    </>
  ),
};
