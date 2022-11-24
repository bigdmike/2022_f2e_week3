<template>
  <main
    class="fixed top-0 left-0 right-0 bottom-0 z-[11] w-full h-screen flex items-center justify-center"
  >
    <Cover @change-status="page_status = $event" :page_status="page_status" />
    <InfoCover
      @change-status="page_status = $event"
      :page_status="page_status"
    />
    <Stage
      @change-status="page_status = $event"
      :page_status="page_status"
      @set-error="error = true"
    />
    <ErrorCover ref="ErrorCover" :error="error" @set-error="error = false" />
  </main>
</template>

<script>
import Cover from '@/components/StageTwo/Cover.vue';
import InfoCover from '@/components/StageTwo/InfoCover.vue';
import Stage from '@/components/StageTwo/Stage.vue';
import ErrorCover from '@/components/StageTwo/ErrorCover.vue';
export default {
  name: 'StageTwo',
  components: {
    Cover,
    InfoCover,
    Stage,
    ErrorCover,
  },
  data() {
    return {
      page_status: 'cover',
      error: false,
    };
  },
};
</script>
