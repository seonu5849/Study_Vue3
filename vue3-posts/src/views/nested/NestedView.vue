<template>
  <div>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <!-- 
          push에서 replace를 적용함에 따라 뒤로가기 시 해당 페이지의 내용이 history에서 덮어써진다.
          push일 경우엔 그대로 적재만 됨.
          중첩 라우트일 경우 탭마다 히스토리를 저장하기 때문에, 뒤로가기 클릭시 모든 히스토리를 거친다.
          replace를 적용하게되면서 해당 페이지의 히스토리를 덮어쓰기 때문에 child의 히스토리로 덮어쓰게 되면서 뒤로가기가 최적화? 된다.
        -->
        <RouterLink class="nav-link" active-class="active" :to="{name: 'NestedOne', replace: true}"> 
          Nated One
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" active-class="active" :to="{name: 'NestedTwo', replace: true}">
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