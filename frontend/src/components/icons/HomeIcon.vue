<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" :fill="color" class="bi bi-house-door-fill"
       viewBox="0 0 16 16" @mouseover="hover" @mouseleave="outHover">
    <path
          d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
  </svg>
</template>
<script setup>
import { ref } from 'vue';
const color = ref('')
const props = defineProps({
  size: {
    type: String,
    default: 16
  },
  color: {
    type: String,
    default: "black",
  },
  hover: {
    type: String,
    default: "",
  },
})
color.value = props.color;
const hover = () => {
  if (props.hover) {
    color.value = props.hover;
  }

}
const outHover = () => {
  if (props.hover) {
    color.value = props.color;
  }
}
</script>
