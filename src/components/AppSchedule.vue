<template>
  <section class="calendar">
    <h2>{{ currentMonth }}</h2>
    <table>
      <thead>
        <tr>
          <th v-for="day in daysOfWeek" :key="day">{{ day }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="week in calendar" :key="week[0].date">
          <td v-for="day in week" :key="day.date" @click="onDateClick(day)">
            {{ day.date }}
          </td>
        </tr>
      </tbody>
    </table>
    <section>
      <article>
        <label style="background-color: green">di</label>
        <p>休館日</p>
      </article>
      <article>
        <label style="background-color: rgb(152, 152, 68)">di</label>
        <p>特別館</p>
      </article>
      <article>
        <label style="background-color: rgb(151, 90, 40)">di</label>
        <p>イベント</p>
      </article>
    </section>
  </section>
</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const currentDate = ref(new Date());

    const currentMonth = computed(() => {
      return currentDate.value.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      });
    });

    const daysOfWeek = computed(() => [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
    ]);

    const calendar = computed(() => {
      const firstDayOfMonth = new Date(
        currentDate.value.getFullYear(),
        currentDate.value.getMonth(),
        1
      );
      const lastDayOfMonth = new Date(
        currentDate.value.getFullYear(),
        currentDate.value.getMonth() + 1,
        0
      );

      const daysInMonth = lastDayOfMonth.getDate();
      const firstDayOfWeek = firstDayOfMonth.getDay();

      let dayCounter = 1;
      const calendar = [];

      for (let i = 0; i < 5; i++) {
        const week = [];

        for (let j = 0; j < 7; j++) {
          if (i === 0 && j < firstDayOfWeek) {
            week.push({ date: null });
          } else if (dayCounter <= daysInMonth) {
            week.push({ date: dayCounter });
            dayCounter++;
          } else {
            week.push({ date: null });
          }
        }

        calendar.push(week);
      }

      return calendar;
    });

    const onDateClick = (day) => {
      if (day.date !== null) {
        alert(`Clicked on ${day.date}`);
      }
    };

    return {
      currentDate,
      currentMonth,
      daysOfWeek,
      calendar,
      onDateClick,
    };
  },
};
</script>

<style lang="scss">
.calendar {
  text-align: center;

  /* margin: 10px; */
  h2 {
    font-family: "wahu";
    margin: 10px 0;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
    font-family: "wahu";
    th {
      background-color: #f2f2f2;
      font-weight: bold;
    }

    td {
      padding: 0.5rem;
      cursor: pointer;
      border: 1px rgb(152, 135, 135) solid;
    }
    td:hover {
      background-color: #f2f2f2;
    }
  }
  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 7px 0;

    article {
      margin-left: 10px;
      display: flex;
      align-items: center;
      p {
        font-family: "wahu";
      }
      label {
        margin-left: 9px;
        color: rgb(255, 255, 255, 0.1);
        margin: 2px;
      }
    }
  }
}
</style>
