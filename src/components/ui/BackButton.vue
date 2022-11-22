<template>
  <button
    @click="$emit('click')"
    class="text-primary_white font-medium font-gambetta text-5xl px-10 py-5 hover:underline"
  >
    Back to Index
  </button>
</template>

<script>
export default {
  name: 'BackButton',
};
</script>
