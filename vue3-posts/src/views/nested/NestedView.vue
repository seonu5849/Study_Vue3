<template>
  <div>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <RouterLink class="nav-link" active-class="active" to="/nested/one">
          Nated One
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" active-class="active" to="/nested/two">
          Nated Two
        </RouterLink>
      </li>
    </ul>
    <hr class="my-4">
    <!-- RouterLink를 클릭했을 때 생기는 화면 -->
    <RouterView></RouterView> 
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>