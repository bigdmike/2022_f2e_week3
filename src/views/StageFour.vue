<template>
  <main
    class="fixed top-0 left-0 right-0 bottom-0 z-[11] w-full h-screen flex items-center justify-center"
  >
    <Cover @change-status="page_status = $event" :page_status="page_status" />

    <Stage
      @change-status="page_status = $event"
      :page_status="page_status"
      @set-error="error = true"
    />
    <ErrorCover ref="ErrorCover" :error="error" @set-error="error = false" />
  </main>
</template>

<script>
import Cover from '@/components/StageFour/Cover.vue';
import Stage from '@/components/StageFour/Stage.vue';
import ErrorCover from '@/components/StageFour/ErrorCover.vue';
export default {
  name: 'StageFour',
  components: {
    Cover,
    Stage,
    ErrorCover,
  },
  data() {
    return {
      page_status: 'cover',
      error: false,
    };
  },
  watch: {
    page_status() {
      if (this.page_status == 'cover') {
        this.$store.commit('SetHeaderColor', 'white');
      } else {
        this.$store.commit('SetHeaderColor', 'black');
      }
    },
  },
};
</script>
