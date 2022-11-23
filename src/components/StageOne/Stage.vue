<template>
  <div
    class="relative w-full h-screen z-10 flex justify-center items-center bg-primary_white"
  >
    <div
      class="w-full max-w-screen-xl flex-wrap mx-auto flex items-stretch justify-center relative z-10"
    >
      <div class="w-1/2 pr-10 flex flex-col">
        <div class="w-full relative z-10 p-10 mb-14">
          <i
            class="absolute top-0 left-0 w-5 h-5 border-l border-t border-primary_black"
          ></i>
          <i
            class="absolute bottom-0 left-0 w-5 h-5 border-l border-b border-primary_black"
          ></i>
          <i
            class="absolute bottom-0 right-0 w-5 h-5 border-r border-b border-primary_black"
          ></i>
          <i
            class="absolute top-0 right-0 w-5 h-5 border-r border-t border-primary_black"
          ></i>
          <div
            class="flex items-end absolute bottom-0 right-14 transform translate-y-1/2"
          >
            <h2
              class="text-primary_black font-semibold font-gambetta italic text-2xl mr-5"
            >
              Product Owner
            </h2>
            <img
              src="/2022_f2e_week3/img/green_ghost.svg"
              class="w-11 h-11 block transform -scale-x-100"
            />
          </div>
          <p class="font-medium text-primary_black">
            請把需求放到產品待辦清單，並調整待辦的優先度順序。
            我們公司也推薦使用 Jira 來做任務的管理呢！
          </p>
        </div>
        <div class="w-full flex-1 flex flex-col">
          <Container
            class="flex-1"
            group-name="1"
            :get-child-payload="getCardPayload"
            @drop="onDrop('todo_list', $event)"
          >
            <Draggable v-for="item in todo_list" :key="item.id">
              <div
                class="card draggable-item px-10 py-4 mb-9 bg-primary_white text-lg font-black text-primary_black select-none inline-block"
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
            Product Backlog
          </h4>
          <p class="font-bold text-primary_black text-center mb-5">優先度高</p>
          <div class="w-full relative flex-1">
            <div
              class="absolute top-0 left-0 z-10 right-0 bottom-0 flex flex-col"
            >
              <Container
                class="flex-1"
                group-name="1"
                :get-child-payload="getProductBacklogPayload"
                @drop="onDrop('product_backlog', $event)"
              >
                <Draggable v-for="item in product_backlog" :key="item.id">
                  <div
                    class="card draggable-item w-full py-7 rounded-2xl text-primary_black text-lg font-black text-center bg-primary_white border-dashed mb-5"
                  >
                    {{ item.title }}
                  </div>
                </Draggable>
              </Container>
            </div>
            <ol class="w-full relative z-0">
              <li
                class="w-full py-7 rounded-2xl text-primary_white text-center font-medium border-primary_white border-2 border-dashed mb-5"
              >
                將卡片拖曳至此
              </li>
              <li
                class="w-full py-7 rounded-2xl text-primary_white text-center font-medium border-primary_white border-2 border-dashed mb-5"
              >
                將卡片拖曳至此
              </li>
              <li
                class="w-full py-7 rounded-2xl text-primary_white text-center font-medium border-primary_white border-2 border-dashed mb-5"
              >
                將卡片拖曳至此
              </li>
              <li
                class="w-full py-7 rounded-2xl text-primary_white text-center font-medium border-primary_white border-2 border-dashed mb-5"
              >
                將卡片拖曳至此
              </li>
            </ol>
          </div>
          <p class="font-bold text-primary_black text-center">優先度低</p>
        </div>
      </div>
      <div class="w-full mt-10 flex items-center justify-between">
        <div class="flex items-center">
          <p>使用工具</p>
          <img src="/2022_f2e_week3/img/logo_jira.png" />
        </div>

        <button
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
      upperDropPlaceholderOptions: {
        className: 'cards-drop-preview',
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
.opacity-ghost {
  transition: all 0.18s ease;
  opacity: 0.8;
  background-color: #6495ed;
  box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.3);
}
.opacity-ghost-drop {
  opacity: 1;
  background-color: #fff;
  box-shadow: 3px 3px 10px 3px transparent;
}

.drop-preview {
  margin: 5px;
  display: inline-block;
}
.cards-drop-preview,
.drop-preview {
  background-color: rgba(150, 150, 200, 0.1);
  border: 1px dashed #000;
}
.cards-drop-preview {
  margin: 5px 45px 5px 5px;
}
</style>
