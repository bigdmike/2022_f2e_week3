<template>
  <div
    ref="MainContent"
    id="StageMenu"
    class="fixed top-0 bottom-0 z-30 flex items-center justify-center w-full h-screen transform left-full transition-qick bg-primary_black"
  >
    <div
      class="relative z-10 flex items-stretch justify-center w-full max-w-screen-xl mx-auto"
    >
      <CardOne
        class="card_1"
        data-x="-287"
        data-y="-50"
        data-duration="1"
        ref="CardOne"
        :stage="stage"
        @click="TriggerCard(1)"
      />
      <div>
        <CardTwo
          class="card_2"
          data-x="0"
          data-y="-63"
          data-duration="1.5"
          ref="CardTwo"
          :stage="stage"
          @click="TriggerCard(2)"
        />
        <div class="flex items-stretch">
          <div>
            <img src="/2022_f2e_week3/img/stage_image.svg" class="w-full" />
            <CardFour
              class="card_4"
              data-x="0"
              data-y="33"
              data-duration=".8"
              ref="CardFour"
              :stage="stage"
              @click="TriggerCard(4)"
            />
          </div>
          <CardThree
            class="card_3"
            data-x="288"
            data-y="10"
            data-duration=".8"
            ref="CardThree"
            :stage="stage"
            @click="TriggerCard(3)"
          />
        </div>
      </div>
    </div>
    <div class="absolute top-0 left-0 right-0 bottom-0 z-[1] bg-dot"></div>
    <div
      class="absolute top-0 bottom-0 left-0 right-0 z-0 bg-noise mix-blend-overlay"
    ></div>
  </div>
</template>

<script>
import CardOne from '@/components/StageMenu/CardOne.vue';
import CardTwo from '@/components/StageMenu/CardTwo.vue';
import CardThree from '@/components/StageMenu/CardThree.vue';
import CardFour from '@/components/StageMenu/CardFour.vue';
import { stage_menu_card_animation } from '@/gsap/stage_menu_card';
import { main_menu_animation } from '@/gsap/main_menu';
export default {
  name: 'StageMenu',
  components: {
    CardOne,
    CardTwo,
    CardThree,
    CardFour,
  },
  data() {
    return {
      card_1: null,
      card_2: null,
      card_3: null,
      card_4: null,
      main_menu_animation: null,
    };
  },
  methods: {
    MouseMove(event) {
      this.stage > 1 ? '' : this.card_1.mouse_move(event.pageX, event.pageY);
      this.stage > 2 ? '' : this.card_2.mouse_move(event.pageX, event.pageY);
      this.stage > 3 ? '' : this.card_3.mouse_move(event.pageX, event.pageY);
      this.stage > 4 ? '' : this.card_4.mouse_move(event.pageX, event.pageY);
    },
    TriggerCard(val) {
      if (val == this.stage) {
        this.$route.name != `stage_${val}`
          ? this.$router.push('/stage/' + val)
          : '';
        this.$store.commit('SetMainMenu', false);
      } else {
        this[`card_${val}`].shake_lock();
      }
    },
  },
  computed: {
    status() {
      return this.$store.state.main_menu;
    },
    stage() {
      return this.$store.state.stage;
    },
  },
  watch: {
    status() {
      if (this.status) {
        this.main_menu_animation.open();
        this.$store.commit('SetHeaderColor', 'white');
        setTimeout(() => {
          this.stage > 1 ? '' : this.card_1.move();
          this.stage > 2 ? '' : this.card_2.move();
          this.stage > 3 ? '' : this.card_3.move();
          this.stage > 4 ? '' : this.card_4.move();

          window.addEventListener('mousemove', this.MouseMove);
        }, 1500);
      } else {
        window.removeEventListener('mousemove', this.MouseMove);
        this.card_1.back();
        this.card_2.back();
        this.card_3.back();
        this.card_4.back();
        this.main_menu_animation.close();
      }
    },
    stage() {
      if (this.stage == 1) {
        this.card_1.unlock();
        this.card_1.move();
      } else if (this.stage == 2) {
        this.card_1.back();
        this.card_2.unlock();
        this.card_2.move();
      } else if (this.stage == 3) {
        this.card_2.back();
        this.card_3.unlock();
        this.card_3.move();
      } else if (this.stage == 4) {
        this.card_3.back();
        this.card_4.unlock();
        this.card_4.move();
      } else if (this.stage == 5) {
        this.card_4.back();
        setTimeout(() => {
          this.$router.push('/stage/finish');
          this.$store.commit('SetMainMenu', false);
        }, 2000);
      }
    },
  },
  mounted() {
    this.main_menu_animation = new main_menu_animation(this.$refs.MainContent);
    this.card_1 = new stage_menu_card_animation(
      this.$refs.MainContent.querySelector('.card_1'),
      30
    );
    this.card_2 = new stage_menu_card_animation(
      this.$refs.MainContent.querySelector('.card_2'),
      40
    );
    this.card_3 = new stage_menu_card_animation(
      this.$refs.MainContent.querySelector('.card_3'),
      -50
    );
    this.card_4 = new stage_menu_card_animation(
      this.$refs.MainContent.querySelector('.card_4'),
      -20
    );
  },
};
</script>
