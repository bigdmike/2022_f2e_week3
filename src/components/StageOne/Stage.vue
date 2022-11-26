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
        <div class="relative z-10 w-full p-10 mb-14">
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
            class="absolute bottom-0 flex items-end transform translate-y-1/2 right-14"
          >
            <h2
              class="mr-5 text-2xl italic font-semibold text-primary_black font-gambetta"
            >
              Product Owner
            </h2>
            <img
              src="/2022_f2e_week3/img/green_ghost.svg"
              class="block transform w-11 h-11 -scale-x-100"
            />
          </div>
          <p class="font-medium text-primary_black">
            請把需求放到產品待辦清單，並調整待辦的優先度順序。
            我們公司也推薦使用 Jira 來做任務的管理呢！
          </p>
        </div>
        <div class="flex flex-col flex-1 w-full">
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
                class="relative inline-block p-2 text-lg transition-all select-none card draggable-item mb-9 bg-primary_white hover:bg-secondary_green text-primary_black"
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
                <p class="px-8 py-2 font-black">{{ item.title }}</p>
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
            Product Backlog
          </h4>
          <p class="mb-5 font-bold text-center text-primary_black">優先度高</p>
          <div class="relative flex-1 w-full">
            <div
              class="absolute top-0 bottom-0 left-0 right-0 z-10 flex flex-col"
            >
              <Container
                class="flex-1"
                group-name="1"
                :get-child-payload="getProductBacklogPayload"
                @drop="onDrop('product_backlog', $event)"
              >
                <Draggable v-for="item in product_backlog" :key="item.id">
                  <div
                    class="w-full mb-5 text-lg font-black text-center transition-all duration-300 border-dashed select-none card draggable-item py-7 rounded-2xl text-primary_black bg-primary_white hover:bg-secondary_green"
                  >
                    {{ item.title }}
                  </div>
                </Draggable>
              </Container>
            </div>
            <ol class="relative z-0 w-full">
              <li
                class="w-full mb-5 font-medium text-center border-2 border-dashed py-7 rounded-2xl text-primary_white border-primary_white"
              >
                將卡片拖曳至此
              </li>
              <li
                class="w-full mb-5 font-medium text-center border-2 border-dashed py-7 rounded-2xl text-primary_white border-primary_white"
              >
                將卡片拖曳至此
              </li>
              <li
                class="w-full mb-5 font-medium text-center border-2 border-dashed py-7 rounded-2xl text-primary_white border-primary_white"
              >
                將卡片拖曳至此
              </li>
              <li
                class="w-full mb-5 font-medium text-center border-2 border-dashed py-7 rounded-2xl text-primary_white border-primary_white"
              >
                將卡片拖曳至此
              </li>
            </ol>
          </div>
          <p class="font-bold text-center text-primary_black">優先度低</p>
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
          title: '前台職缺列表、應徵',
        },
        {
          id: 2,
          title: '後台職缺管理功能（資訊上架、下架、顯示應徵者資料）',
        },
        {
          id: 3,
          title: '應徵者的線上履歷編輯器',
        },
        {
          id: 4,
          title: '會員系統（登入、註冊、權限管理）',
        },
      ],
      product_backlog: [],
      done_btn_hover: false,
    };
  },
  methods: {
    onDrop(list, dropResult) {
      console.log(list, dropResult);
      this[list] = applyDrag(this[list], dropResult);
    },
    getCardPayload(index) {
      return this.todo_list[index];
    },
    getProductBacklogPayload(index) {
      return this.product_backlog[index];
    },
    Validate() {
      if (this.todo_list.length != 0) {
        this.$emit('set-error');
      } else {
        this.$store.commit('SetMainMenu', true);
        setTimeout(() => {
          this.$store.commit('SetStage', 2);
        }, 2500);
      }
    },
  },
};
</script>

<style scoped>
.card-ghost {
  background-color: transparent;
}
.card-ghost i {
  border-color: black;
}
.card-ghost p {
  background-color: rgb(11 218 149);
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
</style>
