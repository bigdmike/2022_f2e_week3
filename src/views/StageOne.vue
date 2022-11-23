<template>
  <main
    class="fixed top-0 left-0 right-0 bottom-0 z-[11] w-full h-screen flex items-center justify-center"
  >
    <Cover @change-status="page_status = $event" :page_status="page_status" />
    <InfoCover
      @change-status="page_status = $event"
      :page_status="page_status"
    />
    <Stage @change-status="page_status = $event" :page_status="page_status" />
  </main>
</template>

<script>
import Cover from '@/components/StageOne/Cover.vue';
import InfoCover from '@/components/StageOne/InfoCover.vue';
import Stage from '@/components/StageOne/Stage.vue';
export default {
  name: 'StageOne',
  components: {
    Cover,
    InfoCover,
    Stage,
  },
  data() {
    return {
      page_status: 'cover',
    };
  },
};
</script>
