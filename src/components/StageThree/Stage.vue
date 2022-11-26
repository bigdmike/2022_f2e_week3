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
          <div class="relative w-full pb-20">
            <div
              class="absolute top-0 z-10 flex flex-col w-2/5 h-20 border border-dashed right-20 bg-[#AEAEAE] rounded-2xl border-primary_white"
            >
              <div
                v-if="list_1.length <= 0"
                class="absolute top-0 flex items-center justify-center w-10 h-10 transform -translate-y-1/2 bg-white rounded-full left-5"
              >
                <img src="/2022_f2e_week3/img/purple_ghost.svg" class="w-6" />
              </div>
              <p
                class="absolute z-0 text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              >
                請將卡片拖曳至此
              </p>
              <Container
                class="relative z-10 flex-1"
                group-name="1"
                :get-child-payload="getListOnePayload"
                @drop="onDrop('list_1', $event)"
                drag-class="card-ghost"
                drop-class="card-ghost-drop"
                :drop-placeholder="dropPlaceholderOptions"
              >
                <Draggable v-for="item in list_1" :key="item.id">
                  <div
                    class="relative px-8 py-6 text-lg font-black select-none card draggable-item mb-9 bg-primary_white text-primary_black rounded-2xl"
                  >
                    {{ item.title }}
                  </div>
                </Draggable>
              </Container>
            </div>
            <div
              class="absolute bottom-0 w-2/5 h-20 border border-dashed right-[55%] bg-[#AEAEAE] rounded-2xl border-primary_white"
            >
              <div
                v-if="list_2.length <= 0"
                class="absolute top-0 flex items-center justify-center w-10 h-10 transform -translate-y-1/2 bg-white rounded-full left-5"
              >
                <img src="/2022_f2e_week3/img/purple_ghost.svg" class="w-6" />
              </div>
              <p
                class="absolute z-0 text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              >
                請將卡片拖曳至此
              </p>
              <Container
                class="relative z-10 flex-1"
                group-name="1"
                :get-child-payload="getListTwoPayload"
                @drop="onDrop('list_2', $event)"
                drag-class="card-ghost"
                drop-class="card-ghost-drop"
                :drop-placeholder="dropPlaceholderOptions"
              >
                <Draggable v-for="item in list_2" :key="item.id">
                  <div
                    class="relative px-8 py-6 text-lg font-black select-none card draggable-item mb-9 bg-primary_white text-primary_black rounded-2xl"
                  >
                    {{ item.title }}
                  </div>
                </Draggable>
              </Container>
            </div>
            <div
              class="absolute bottom-0 w-2/5 h-20 border border-dashed right-20 bg-[#AEAEAE] rounded-2xl border-primary_white"
            >
              <div
                v-if="list_3.length <= 0"
                class="absolute top-0 flex items-center justify-center w-10 h-10 transform -translate-y-1/2 bg-white rounded-full left-5"
              >
                <img src="/2022_f2e_week3/img/purple_ghost.svg" class="w-6" />
              </div>
              <p
                class="absolute z-0 text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              >
                請將卡片拖曳至此
              </p>
              <Container
                class="relative z-10 flex-1"
                group-name="1"
                :get-child-payload="getListThreePayload"
                @drop="onDrop('list_3', $event)"
                drag-class="card-ghost"
                drop-class="card-ghost-drop"
                :drop-placeholder="dropPlaceholderOptions"
              >
                <Draggable v-for="item in list_3" :key="item.id">
                  <div
                    class="relative px-8 py-6 text-lg font-black select-none card draggable-item mb-9 bg-primary_white text-primary_black rounded-2xl"
                  >
                    {{ item.title }}
                  </div>
                </Draggable>
              </Container>
            </div>
            <img
              src="/2022_f2e_week3/img/sprint_img.png"
              class="relative z-0 w-full"
            />
          </div>
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
              :get-ghost-parent="getGhostParent"
              :get-child-payload="getTodoListPayload"
              drag-class="card-ghost"
              drop-class="card-ghost-drop"
              @drop="onDrop('todo_list', $event)"
            >
              <Draggable v-for="item in todo_list" :key="item.id">
                <div
                  class="relative p-2 text-lg font-black transition-all duration-300 select-none card draggable-item mb-9 bg-primary_white text-primary_black hover:bg-primary hover:text-white"
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
                  <div class="px-8 py-2">
                    <p>{{ item.title }}</p>
                    <p class="font-panchang">{{ item.sub_title }}</p>
                  </div>
                </div>
              </Draggable>
            </Container>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-end w-full mt-10">
        <button
          @click="Validate"
          @mouseenter="done_btn_hover = true"
          @mouseleave="done_btn_hover = false"
          class="relative px-4 py-2 transition-quick bg-trasnparent text-primary_black hover:text-primary_black"
        >
          <i
            :class="done_btn_hover ? 'border-primary' : 'border-primary_black'"
            class="absolute top-0 left-0 z-0 w-2 h-2 border-t border-l transition-quick"
          ></i>
          <i
            :class="done_btn_hover ? 'border-primary' : 'border-primary_black'"
            class="absolute bottom-0 left-0 z-0 w-2 h-2 border-b border-l transition-quick"
          ></i>
          <i
            :class="done_btn_hover ? 'border-primary' : 'border-primary_black'"
            class="absolute bottom-0 right-0 z-0 w-2 h-2 border-b border-r transition-quick"
          ></i>
          <i
            :class="done_btn_hover ? 'border-primary' : 'border-primary_black'"
            class="absolute top-0 right-0 z-0 w-2 h-2 border-t border-r transition-quick"
          ></i>
          <p
            :class="done_btn_hover ? 'bg-primary' : ''"
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
      list_1: [],
      list_2: [],
      list_3: [],
      product_backlog: [],
      done_btn_hover: false,
      //
      drop_list: '',
      take_list: '',
      drop_index: 0,
      take_index: 0,
      drag_item: null,
      move_count: 0,
    };
  },
  methods: {
    onDrop(list, dropResult) {
      console.log(list, dropResult);
      this.drag_item = JSON.parse(JSON.stringify(dropResult.payload));
      // 如果 removeIndex!=null && addedIndex == null 代表是被拿卡片
      // 如果 removeIndex==null && addedIndex != null 代表是被放卡片
      // 如果 removeIndex!=null && addedIndex != null 代表是同一列表移動

      // 紀錄被放的列表資訊
      if (dropResult.removedIndex == null && dropResult.addedIndex != null) {
        console.log('drop', list, dropResult);
        this.move_count += 1;
        this.drop_list = list;
        this.drop_index = dropResult.addedIndex;
      }
      // 被拿卡片
      else if (
        dropResult.removedIndex != null &&
        dropResult.addedIndex == null
      ) {
        console.log('take', list, dropResult);
        this.move_count += 1;
        this.take_list = list;
        this.take_index = dropResult.removedIndex;
      }
      // 同列表內移動
      else {
        console.log('list_move', list, dropResult);
        this[list] = applyDrag(this[list], dropResult);
      }

      if (this.move_count == 2) {
        if (this.drop_list == 'todo_list' || this[this.drop_list].length <= 0) {
          this[this.drop_list] = applyDrag(this[this.drop_list], {
            removedIndex: null,
            addedIndex: this.drop_index,
            payload: this.drag_item,
          });
          this[this.take_list] = applyDrag(this[this.take_list], {
            removedIndex: this.take_index,
            addedIndex: null,
            payload: this.drag_item,
          });
        }
        // reset
        this.take_list = '';
        this.drop_list = '';
        this.drop_index = 0;
        this.take_index = 0;
        this.drag_item = null;
        this.move_count = 0;
      }
    },
    getGhostParent() {
      return document.querySelector('#app');
    },

    getListOnePayload(index) {
      return this.list_1[index];
    },
    getListTwoPayload(index) {
      return this.list_2[index];
    },
    getListThreePayload(index) {
      return this.list_3[index];
    },
    getTodoListPayload(index) {
      return this.todo_list[index];
    },
    Validate() {
      if (
        this.list_1.length <= 0 ||
        this.list_2.length <= 0 ||
        this.list_3.length <= 0
      ) {
        this.$emit('set-error');
      } else if (
        this.list_1[0].id != 2 ||
        this.list_2[0].id != 3 ||
        this.list_3[0].id != 1
      ) {
        this.$emit('set-error');
      } else {
        this.$store.commit('SetMainMenu', true);
        setTimeout(() => {
          this.$store.commit('SetStage', 4);
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
  border-color: white;
}
.card-ghost div {
  background-color: rgb(136 0 204);
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
