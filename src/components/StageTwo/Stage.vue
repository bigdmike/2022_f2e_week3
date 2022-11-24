<template>
  <div
    :class="
      page_status == 'stage'
        ? '-translate-x-full opacity-100 z-[12]'
        : page_status == 'info'
        ? '-translate-x-full opacity-100 z-[10]'
        : '-translate-x-0 opacity-0 z-[0]'
    "
    class="absolute top-0 left-full bottom-0 w-full h-screen flex transition-quick justify-center items-center bg-primary_white"
  >
    <div
      class="w-full max-w-screen-xl flex-wrap mx-auto flex items-stretch justify-center relative z-10"
    >
      <div class="w-1/2 pr-10 flex flex-col">
        <div
          class="w-full h-full border border-primary_white p-10 flex-1 flex flex-col"
        >
          <h4
            class="font-panchang font-bold text-2xl text-center text-primary_black mb-5"
          >
            Product Backlog
          </h4>
          <p class="font-bold text-primary_black text-center mb-10">
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
                class="card draggable-item px-8 py-6 mb-9 bg-primary_white text-lg font-black text-primary_black select-none rounded-2xl relative"
              >
                <span
                  class="bg-primary_black text-primary_white text-sm font-panchang py-1 absolute top-0 left-14 transform -translate-y-1/2 px-3 rounded-full"
                  >+<b class="font-panchang text-lg">{{ item.point }}</b
                  >point</span
                >
                {{ item.title }}
              </div>
            </Draggable>
          </Container>
        </div>
      </div>
      <div class="w-1/2 pl-10">
        <div
          class="w-full h-full border border-primary_white p-10 flex flex-col"
        >
          <h4
            class="font-panchang font-bold text-2xl text-center text-primary_black mb-5"
          >
            Sprint Backlog
          </h4>
          <p class="font-bold text-primary_black text-center mb-5">
            開發A組端中代辦清單 20點/5人
          </p>
          <div
            class="w-full relative flex-1 flex flex-col border border-dashed border-primary_white rounded-2xl"
          >
            <div class="relative flex-1 flex-col flex h-full">
              <p
                v-if="product_backlog.length <= 0"
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary_white select-none"
              >
                請將卡片拖曳至此
              </p>
              <Container
                class="flex-1 relative z-10 py-10 px-3"
                group-name="1"
                :get-child-payload="getProductBacklogPayload"
                @drop="onDrop('product_backlog', $event)"
              >
                <Draggable v-for="item in product_backlog" :key="item.id">
                  <div
                    class="card draggable-item px-10 py-4 mb-9 bg-primary_white text-lg font-black text-primary_black select-none inline-block relative"
                  >
                    <span
                      class="bg-primary_black text-primary_white text-sm font-panchang py-1 absolute top-0 left-14 transform -translate-y-1/2 px-3 rounded-full"
                      >+<b class="font-panchang text-lg">{{ item.point }}</b
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
                  <b class="font-bold text-xl font-panchang">{{
                    total_point | number
                  }}</b
                  >point
                </p>
              </div>
              <div
                class="w-1/2 py-5 text-center border-t border-l border-primary_white border-dashed"
              >
                <p class="text-primary_black mb-2 font-bold">團隊負擔點數</p>
                <p class="text-primary_black font-bold font-panchang">
                  <b class="font-bold text-xl font-panchang">20</b>point
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full mt-10 flex items-center justify-between">
        <div class="flex items-center">
          <p>使用工具</p>
          <img src="/2022_f2e_week3/img/logo_jira.png" />
        </div>

        <button
          @click="Validate"
          @mouseenter="done_btn_hover = true"
          @mouseleave="done_btn_hover = false"
          class="relative py-2 px-4 transition-quick bg-trasnparent text-primary_black hover:text-primary_black"
        >
          <i
            :class="
              done_btn_hover ? 'border-secondary_green' : 'border-primary_black'
            "
            class="absolute z-0 top-0 left-0 w-2 h-2 border-l border-t transition-quick"
          ></i>
          <i
            :class="
              done_btn_hover ? 'border-secondary_green' : 'border-primary_black'
            "
            class="absolute z-0 bottom-0 left-0 w-2 h-2 border-l border-b transition-quick"
          ></i>
          <i
            :class="
              done_btn_hover ? 'border-secondary_green' : 'border-primary_black'
            "
            class="absolute z-0 bottom-0 right-0 w-2 h-2 border-r border-b transition-quick"
          ></i>
          <i
            :class="
              done_btn_hover ? 'border-secondary_green' : 'border-primary_black'
            "
            class="absolute z-0 top-0 right-0 w-2 h-2 border-r border-t transition-quick"
          ></i>
          <p
            :class="done_btn_hover ? 'bg-secondary_green' : ''"
            class="font-bold font-panchang text-2xl relative z-10 py-2 px-16 block transition-quick"
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
