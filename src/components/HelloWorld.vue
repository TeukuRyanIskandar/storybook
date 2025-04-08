
<template>
  <div>
    <h2>Primary</h2>
    <Button>
      Primary
    </Button>
  </div>
  <div>
    <h2>Destructive</h2>
    <Button variant="destructive">
      Destructive
    </Button>
  </div>
  <div>
    <h2>Outline</h2>
    <Button variant="outline">
      Outline
    </Button>
  </div>
  <div>
    <h2>Secondary</h2>
    <Button variant="secondary">
      Secondary
    </Button>
  </div>
  <div>
    <h2>Ghost</h2>
    <Button variant="ghost">
      Ghost
    </Button>
  </div>
  <div>
    <h2>Link</h2>
    <Button variant="link">
      Link
    </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'

// const buttonVariants: string[] = [
//   'primary',
//   'destructive',
//   'outline',
//   'secondary',
//   'ghost',
//   'link'
// ]
// const buttonSizes: string[] = [
//   'default',
//   'xs',
//   'sm',
//   'lg',
//   'icon'
// ]
</script>