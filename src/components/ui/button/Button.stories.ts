import type { Meta, StoryFn } from '@storybook/vue3'
import { Button } from '@/components/ui/button/index.ts'

export default {
  title: 'shadcn/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
  },
} as Meta<typeof Button>

interface TemplateArgs {
  variant: string;
}

const Template: StoryFn<typeof Button> = (args: TemplateArgs) => ({
  components: { Button },
  setup() {
    return { args }
  },
  template: `<Button v-bind="args">Click Me</Button>`,
})

export const Default = Template.bind({})
Default.args = {
  variant: 'default',
}

export const Destructive = Template.bind({})
Destructive.args = {
  variant: 'destructive',
}
