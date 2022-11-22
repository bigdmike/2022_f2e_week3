<template>
  <div
    ref="MainContent"
    id="MainCover"
    :class="
      status != 'menu'
        ? status == 'cover'
          ? 'scale-50 opacity-20 z-10 pointer-events-none'
          : 'scale-50 opacity-0 z-10 pointer-events-none'
        : 'scale-10 opacity-100 z-[12] '
    "
    class="w-full h-screen fixed top-0 left-0 right-0 bottom-0 z-30 flex items-center justify-center transform transition-qick"
  >
    <div
      class="w-full max-w-screen-xl mx-auto flex items-stretch justify-center relative z-10"
    >
      <CardOne
        class="card_one"
        data-x="-287"
        data-y="-50"
        data-duration="1"
        ref="CardOne"
        :status="now_stage >= 1 ? true : false"
      />
      <div>
        <CardTwo
          class="card_two"
          data-x="0"
          data-y="-63"
          data-duration="1.5"
          ref="CardTwo"
          :status="now_stage >= 2 ? true : false"
        />
        <div class="flex items-stretch">
          <div>
            <img src="/2022_f2e_week3/img/stage_image.svg" class="w-full" />
            <CardFour
              class="card_four"
              data-x="0"
              data-y="33"
              data-duration=".8"
              ref="CardFour"
              :status="now_stage >= 4 ? true : false"
            />
          </div>
          <CardThree
            class="card_three"
            data-x="288"
            data-y="10"
            data-duration=".8"
            ref="CardThree"
            :status="now_stage >= 3 ? true : false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardOne from '@/components/StageMenu/CardOne.vue';
import CardTwo from '@/components/StageMenu/CardTwo.vue';
import CardThree from '@/components/StageMenu/CardThree.vue';
import CardFour from '@/components/StageMenu/CardFour.vue';
import { stage_menu_card_animation } from '@/gsap/stage_menu_card';
export default {
  name: 'StageMenu',
  props: {
    status: {
      require: true,
      type: String,
    },
  },
  components: {
    CardOne,
    CardTwo,
    CardThree,
    CardFour,
  },
  data() {
    return {
      now_stage: 0,
      card_one: null,
      card_two: null,
      card_three: null,
      card_four: null,
    };
  },
  methods: {
    Open() {
      setTimeout(() => {
        this.now_stage >= 1 ? '' : this.card_one.move();
        this.now_stage >= 2 ? '' : this.card_two.move();
        this.now_stage >= 3 ? '' : this.card_three.move();
        this.now_stage >= 4 ? '' : this.card_four.move();

        window.addEventListener('mousemove', this.MouseMove);
      }, 300);
    },
    MouseMove(event) {
      this.now_stage >= 1
        ? ''
        : this.card_one.mouse_move(event.pageX, event.pageY);
      this.now_stage >= 2
        ? ''
        : this.card_two.mouse_move(event.pageX, event.pageY);
      this.now_stage >= 3
        ? ''
        : this.card_three.mouse_move(event.pageX, event.pageY);
      this.now_stage >= 4
        ? ''
        : this.card_four.mouse_move(event.pageX, event.pageY);
    },
    Close() {
      window.removeEventListener('mousemove', this.MouseMove);
      this.card_one.back();
      this.card_two.back();
      this.card_three.back();
      this.card_four.back();
    },
  },
  watch: {
    status(new_val, old_val) {
      if (this.status == 'menu') {
        this.Open();
      } else if (old_val == 'menu') {
        this.Close();
      }
    },
  },
  mounted() {
    this.card_one = new stage_menu_card_animation(
      this.$refs.MainContent.querySelector('.card_one'),
      30
    );
    this.card_two = new stage_menu_card_animation(
      this.$refs.MainContent.querySelector('.card_two'),
      40
    );
    this.card_three = new stage_menu_card_animation(
      this.$refs.MainContent.querySelector('.card_three'),
      -50
    );
    this.card_four = new stage_menu_card_animation(
      this.$refs.MainContent.querySelector('.card_four'),
      -20
    );
  },
};
</script>
