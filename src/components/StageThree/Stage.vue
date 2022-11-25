<template>
  <div
    :class="
      page_status == 'stage'
        ? '-translate-x-full opacity-100 z-[12]'
        : page_status == 'info'
        ? '-translate-x-full opacity-100 z-[10]'
        : '-translate-x-0 opacity-0 z-[0]'
    "
    class="absolute top-0 bottom-0 flex items-center justify-center w-full h-screen left-full transition-quick bg-primary_white"
  >
    <div
      class="relative z-10 flex flex-wrap items-stretch justify-center w-full max-w-screen-xl mx-auto"
    >
      <div class="relative flex flex-col w-3/5 pr-10">
        <div class="flex flex-col flex-1 w-full h-full">
          <div class="relative w-full">
            <div
              class="absolute top-0 w-2/5 h-20 transform border border-dashed right-20 bg-primary_black bg-opacity-5 rounded-2xl border-primary_white"
            ></div>
            <div
              class="absolute bottom-0 w-2/5 h-20 transform -translate-x-full translate-y-full border border-dashed right-24 bg-primary_black bg-opacity-5 rounded-2xl border-primary_white"
            ></div>
            <div
              class="absolute bottom-0 w-2/5 h-20 transform translate-y-full border border-dashed right-20 bg-primary_black bg-opacity-5 rounded-2xl border-primary_white"
            ></div>
            <img
              src="/2022_f2e_week3/img/sprint_img.png"
              class="relative z-0 w-full"
            />
          </div>

          <!-- <Container
            class="flex-1"
            group-name="1"
            :get-child-payload="getCardPayload"
            @drop="onDrop('todo_list', $event)"
            drag-class="card-ghost"
            drop-class="card-ghost-drop"
            :drop-placeholder="dropPlaceholderOptions"
          >
            <Draggable v-for="item in todo_list" :key="item.id">
              <div
                class="relative px-8 py-6 text-lg font-black select-none card draggable-item mb-9 bg-primary_white text-primary_black rounded-2xl"
              >
                <span
                  class="absolute top-0 px-3 py-1 text-sm transform -translate-y-1/2 rounded-full bg-primary_black text-primary_white font-panchang left-14"
                  >+<b class="text-lg font-panchang">{{ item.point }}</b
                  >point</span
                >
                {{ item.title }}
              </div>
            </Draggable>
          </Container> -->
        </div>
      </div>
      <div class="w-2/5 pl-10">
        <div class="flex flex-col w-full h-full">
          <div class="relative z-10 w-full p-10">
            <i
              class="absolute top-0 left-0 w-5 h-5 border-t border-l border-primary_black"
            ></i>
            <i
              class="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-primary_black"
            ></i>
            <i
              class="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-primary_black"
            ></i>
            <i
              class="absolute top-0 right-0 w-5 h-5 border-t border-r border-primary_black"
            ></i>
            <div
              class="absolute bottom-0 right-0 flex items-center transform translate-y-1/2"
            >
              <h2
                class="mr-5 text-2xl italic font-semibold text-primary_black font-gambetta"
              >
                Development Team
              </h2>
              <img
                src="/2022_f2e_week3/img/purple_ghost.svg"
                class="block mr-10 transform w-11 h-11 -scale-x-100"
              />
            </div>
            <p class="font-medium text-primary_black">
              換你來試試看，在這經典的Scrum流程圖中，這些流程分別代表哪個會議呢？把對應的流程拖曳到正確的位置上！
            </p>
          </div>
          <div class="relative flex flex-col flex-1 h-full">
            <Container
              class="relative z-10 flex-1 px-10 py-10"
              group-name="1"
              :get-child-payload="getCardPayload"
              @drop="onDrop('product_backlog', $event)"
            >
              <Draggable v-for="item in todo_list" :key="item.id">
                <div
                  class="relative px-10 py-4 text-lg font-black select-none card draggable-item mb-9 bg-primary_white text-primary_black"
                >
                  <p>{{ item.title }}</p>
                  <p class="font-panchang">{{ item.sub_title }}</p>
                </div>
              </Draggable>
            </Container>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between w-full mt-10">
        <div class="flex items-center">
          <p>使用工具</p>
          <img src="/2022_f2e_week3/img/logo_jira.png" />
        </div>

        <button
          @click="Validate"
          @mouseenter="done_btn_hover = true"
          @mouseleave="done_btn_hover = false"
          class="relative px-4 py-2 transition-quick bg-trasnparent text-primary_black hover:text-primary_black"
        >
          <i
            :class="
              done_btn_hover ? 'border-secondary_green' : 'border-primary_black'
            "
            class="absolute top-0 left-0 z-0 w-2 h-2 border-t border-l transition-quick"
          ></i>
          <i
            :class="
              done_btn_hover ? 'border-secondary_green' : 'border-primary_black'
            "
            class="absolute bottom-0 left-0 z-0 w-2 h-2 border-b border-l transition-quick"
          ></i>
          <i
            :class="
              done_btn_hover ? 'border-secondary_green' : 'border-primary_black'
            "
            class="absolute bottom-0 right-0 z-0 w-2 h-2 border-b border-r transition-quick"
          ></i>
          <i
            :class="
              done_btn_hover ? 'border-secondary_green' : 'border-primary_black'
            "
            class="absolute top-0 right-0 z-0 w-2 h-2 border-t border-r transition-quick"
          ></i>
          <p
            :class="done_btn_hover ? 'bg-secondary_green' : ''"
            class="relative z-10 block px-16 py-2 text-2xl font-bold font-panchang transition-quick"
          >
            Done
          </p>
        </button>
      </div>
    </div>

    <div
      class="absolute top-0 left-0 right-0 bottom-0 z-[2] bg-dot grayscale"
    ></div>
    <div
      class="absolute top-0 left-0 right-0 bottom-0 z-[1] bg-noise mix-blend-overlay opacity-40"
    ></div>
    <div
      class="absolute top-0 left-0 right-0 bottom-0 z-0 bg-primary_black opacity-[.25]"
    ></div>
  </div>
</template>

<script>
import { Container, Draggable } from 'vue-smooth-dnd';
import { applyDrag } from '@/common/drag_heplers';
export default {
  name: 'StageOne',
  props: {
    page_status: {
      require: true,
      type: String,
    },
  },
  components: { Container, Draggable },
  data() {
    return {
      dropPlaceholderOptions: {
        className: 'drop-preview',
        animationDuration: '150',
        showOnTop: true,
      },
      todo_list: [
        {
          id: 1,
          title: '短衝自省會議',
          sub_title: 'Sprint Retrospective',
        },
        {
          id: 2,
          title: '每日站立會議',
          sub_title: 'Daily Scrum',
        },
        {
          id: 3,
          title: '短衝檢視會議',
          sub_title: 'Sprint Review',
        },
      ],
      product_backlog: [],
      done_btn_hover: false,
    };
  },
  methods: {
    onDrop(list, dropResult) {
      this[list] = applyDrag(this[list], dropResult);
    },
    getCardPayload(index) {
      return this.todo_list[index];
    },
    getProductBacklogPayload(index) {
      return this.product_backlog[index];
    },
    Validate() {
      if (this.total_point > 20) {
        this.$emit('set-error');
      } else {
        this.$store.commit('SetMainMenu', true);
        setTimeout(() => {
          this.$store.commit('SetStage', 3);
        }, 2500);
      }
    },
  },
  computed: {
    total_point() {
      let point = 0;
      this.product_backlog.forEach((item) => {
        point += parseInt(item.point);
      });
      return point;
    },
  },
  filters: {
    number(val) {
      return val < 10 ? '0' + val : val;
    },
  },
};
</script>

<style>
.card-ghost {
  transition: transform 0.18s ease;
  transform: rotate(5deg);
}
.card-ghost-drop {
  transition: transform 0.18s ease-in-out;
  transform: rotate(0deg);
}
.groups {
  display: flex;
  justify-content: stretch;
  margin-top: 50px;
  margin-right: 50px;
}
.group {
  margin-left: 50px;
  flex: 1;
}
.smooth-dnd-container.vertical > .smooth-dnd-draggable-wrapper {
  overflow: visible;
}
</style>
