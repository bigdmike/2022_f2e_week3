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
      <div class="flex flex-col w-1/2 pr-10">
        <div
          class="flex flex-col flex-1 w-full h-full p-10 border border-primary_white"
        >
          <h4
            class="mb-5 text-2xl font-bold text-center font-panchang text-primary_black"
          >
            Product Backlog
          </h4>
          <p class="mb-10 font-bold text-center text-primary_black">
            請拖曳產品待辦事項在限制點數內，來完成短衝待辦清單
          </p>
          <Container
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
                class="relative p-2 text-lg font-black transition-all duration-300 select-none card draggable-item mb-9 bg-primary_white text-primary_black rounded-2xl hover:text-white hover:bg-secondary_blue"
              >
                <span
                  class="absolute top-0 px-3 py-1 text-sm transform -translate-y-1/2 rounded-full bg-primary_black text-primary_white font-panchang left-14"
                  >+<b class="text-lg font-panchang">{{ item.point }}</b
                  >point</span
                >
                <i
                  class="absolute top-0 left-0 z-0 w-2 h-2 border-t border-l border-transparent transition-quick"
                ></i>
                <i
                  class="absolute bottom-0 left-0 z-0 w-2 h-2 border-b border-l border-transparent transition-quick"
                ></i>
                <i
                  class="absolute bottom-0 right-0 z-0 w-2 h-2 border-b border-r border-transparent transition-quick"
                ></i>
                <i
                  class="absolute top-0 right-0 z-0 w-2 h-2 border-t border-r border-transparent transition-quick"
                ></i>
                <p class="px-6 py-4">{{ item.title }}</p>
              </div>
            </Draggable>
          </Container>
        </div>
      </div>
      <div class="w-1/2 pl-10">
        <div
          class="flex flex-col w-full h-full p-10 border border-primary_white"
        >
          <h4
            class="mb-5 text-2xl font-bold text-center font-panchang text-primary_black"
          >
            Sprint Backlog
          </h4>
          <p class="mb-5 font-bold text-center text-primary_black">
            開發A組端中代辦清單 20點/5人
          </p>
          <div
            class="relative flex flex-col flex-1 w-full border border-dashed border-primary_white rounded-2xl"
          >
            <div class="relative flex flex-col flex-1 h-full">
              <p
                v-if="product_backlog.length <= 0"
                class="absolute transform -translate-x-1/2 -translate-y-1/2 select-none top-1/2 left-1/2 text-primary_white"
              >
                請將卡片拖曳至此
              </p>
              <Container
                class="relative z-10 flex-1 px-3 py-10"
                group-name="1"
                :get-child-payload="getProductBacklogPayload"
                @drop="onDrop('product_backlog', $event)"
              >
                <Draggable v-for="item in product_backlog" :key="item.id">
                  <div
                    class="relative inline-block px-10 py-4 text-lg font-black select-none card draggable-item mb-9 bg-primary_white text-primary_black"
                  >
                    <span
                      class="absolute top-0 px-3 py-1 text-sm transform -translate-y-1/2 rounded-full bg-primary_black text-primary_white font-panchang left-14"
                      >+<b class="text-lg font-panchang">{{ item.point }}</b
                      >point</span
                    >
                    {{ item.title }}
                  </div>
                </Draggable>
              </Container>
            </div>
            <div class="flex">
              <div class="w-1/2 py-5 text-center">
                <p
                  :class="
                    total_point > 20 ? 'text-red-700' : 'text-secondary_blue'
                  "
                  class="mb-2 font-bold"
                >
                  目前點數
                </p>
                <p
                  :class="
                    total_point > 20 ? 'text-red-700' : 'text-secondary_blue'
                  "
                  class="font-bold font-panchang"
                >
                  <b class="text-xl font-bold font-panchang">{{
                    total_point | number
                  }}</b
                  >point
                </p>
              </div>
              <div
                class="w-1/2 py-5 text-center border-t border-l border-dashed border-primary_white"
              >
                <p class="mb-2 font-bold text-primary_black">團隊負擔點數</p>
                <p class="font-bold text-primary_black font-panchang">
                  <b class="text-xl font-bold font-panchang">20</b>point
                </p>
              </div>
            </div>
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
              done_btn_hover ? 'border-secondary_blue' : 'border-primary_black'
            "
            class="absolute top-0 left-0 z-0 w-2 h-2 border-t border-l transition-quick"
          ></i>
          <i
            :class="
              done_btn_hover ? 'border-secondary_blue' : 'border-primary_black'
            "
            class="absolute bottom-0 left-0 z-0 w-2 h-2 border-b border-l transition-quick"
          ></i>
          <i
            :class="
              done_btn_hover ? 'border-secondary_blue' : 'border-primary_black'
            "
            class="absolute bottom-0 right-0 z-0 w-2 h-2 border-b border-r transition-quick"
          ></i>
          <i
            :class="
              done_btn_hover ? 'border-secondary_blue' : 'border-primary_black'
            "
            class="absolute top-0 right-0 z-0 w-2 h-2 border-t border-r transition-quick"
          ></i>
          <p
            :class="done_btn_hover ? 'bg-secondary_blue' : ''"
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
          title: '後台職缺管理功能（資訊上架、下架、顯示應徵者資料）',
          point: 8,
        },
        {
          id: 2,
          title: '會員系統（登入、註冊、權限管理）',
          point: 8,
        },
        {
          id: 3,
          title: '應徵者的線上履歷編輯器',
          point: 13,
        },
        {
          id: 4,
          title: '前台職缺列表、應徵',
          point: 5,
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

<style scoped>
/* .card-ghost {
  transition: transform 0.18s ease;
  transform: rotate(5deg);
} */

.card-ghost {
  background-color: transparent;
}
.card-ghost i {
  border-color: black;
}
.card-ghost p {
  background-color: rgb(13 13 242);
  color: white;
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
