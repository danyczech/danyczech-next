import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { EButtonVariants } from '@/utils/enums';
import Button from '@/components/UI/Button/Button';

const meta = {
  title: 'ui/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: EButtonVariants.PRIMARY,
    children: 'Primary button'
  }
}

export const Secondary: Story = {
  args: {
    variant: EButtonVariants.SECONDARY,
    children: 'Secondary button'
  }
}

export const CTA: Story = {
  args: {
    variant: EButtonVariants.CTA,
    children: 'CTA button'
  }
}

export const Variants: StoryFn = () => (
  <div>
    <div className="flex flex-wrap gap-2 my-5">
      <Button variant={EButtonVariants.PRIMARY}>
        Primary
      </Button>
      <Button variant={EButtonVariants.PRIMARY} disabled>
        Primary Disabled
      </Button>
    </div>
    <div className="flex flex-wrap gap-2 my-5">
      <Button variant={EButtonVariants.SECONDARY}>
        Secondary
      </Button>
      <Button variant={EButtonVariants.SECONDARY} disabled>
        Secondary Disabled
      </Button>
    </div>
    <div className="flex flex-wrap gap-2 my-5">
      <Button variant={EButtonVariants.CTA}>
        CTA
      </Button>
      <Button variant={EButtonVariants.CTA} disabled>
        CTA Disabled
      </Button>
    </div>
  </div>
);
