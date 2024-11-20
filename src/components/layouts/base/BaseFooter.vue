<script setup lang="ts">
function returnToTop() {
  window.scrollTo(0, 0)
}
</script>

<template>
  <div id="footer" class="footer sticky-footer">
    <div class="container">
      <p>This is an example footer</p>
    </div>
  </div>
  <a href="#" class="scroll toTop" style="display: block">
    <img src="/images/toTop.png" class="toTop" v-on:click="returnToTop()" />
  </a>
</template>

<style scoped>
.footer {
  background-color: var(--bs-gray-700);
  color: white;
  text-align: center;
}

.toTop {
  position: fixed;
  bottom: 25px;
  right: 2%;
  z-index: 999;
  color: #ffffff;
  width: 70px;
  height: 70px;
  display: none;
  cursor: pointer;
}

#toTop {
  width: 70px;
  height: 70px;
}

.sticky-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  min-height: 80px;
}
</style>
