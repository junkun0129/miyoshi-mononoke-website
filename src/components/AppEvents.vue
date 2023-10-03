<template>
  <section class="events-window">
    <h1 class="events-title">新着情報</h1>
    <article class="content">
      <ul class="content-ul">
        <li class="content-li" v-for="event in events" :key="event.id">
          <div class="event-detail">
            <h6 class="event-detail-date">{{ formattedDate(event.date) }}</h6>
            <p
              :style="DynamicLabelStyle(event.label)"
              class="event-detail-label"
            >
              {{ event.label }}
            </p>
          </div>
          <a :href="event.url">{{ event.title }}</a>
        </li>
      </ul>
    </article>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { eventData } from "../templetes/eventData";
// import {labelType} from '../types/index'
export default defineComponent({
  name: "AppEvents",
  setup() {
    //fetch eventsdata

    const events = ref(eventData);
    return { events };
  },
  methods: {
    formattedDate(date: Date) {
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();
      return `${year}年${month}月${day}日`;
    },
    DynamicLabelStyle(label: string | null) {
      switch (label) {
        case "new":
          return {
            backgroundColor: "red",
          };
        case "museum":
          return {
            backgroundColor: "blue",
          };
        case null:
          return {};
        default:
          break;
      }
    },
  },
});
</script>

<style lang="scss">
.events-window {
  width: 100%;
  height: 100%;
  .events-title {
    padding: 15px;
    font-size: 2rem;
  }
  .content {
    padding-left: 20px;
    .content-ul {
      list-style-type: none;
      .content-li {
        margin: 20px;
        .event-detail {
          display: flex;
          .event-detail-date {
            display: flex;
            align-items: center;
          }
          .event-detail-label {
            display: flex;
            align-items: center;
            color: white;
            padding: 3px;
            border-radius: 5px;
            margin-left: 10px;
            margin-bottom: 4px;
          }
        }
      }
    }
  }
  .link-allevents {
  }
}
</style>
