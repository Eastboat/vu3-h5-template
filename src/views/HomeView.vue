<template>
  <div>
    <van-cell-group>
      <div class="flex flex-row justify-between">
        <div bg-amber bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600" text-9>
          模版搭建
        </div>
        <div bg-amber class="text-[36px]">模版搭建</div>
      </div>
      <div bg-amber text-36px w-220px>模版搭建 220px</div>
      <div bg-amber text-36px w-55>模版搭建 220px</div>
      <div bg-amber class="text-[36px] w-220px">模版搭建 220px</div>
      <div bg-amber class="text-9 w-55">模版搭建 220px</div>
      <div bg-amber class="text-9 w-1.25 ml-10">1</div>
      <div bg-amber class="text-9 w-[6px] ml-10 mt-2">1</div>

      <div class="w-full mt1 pt20 pb20">
        <div bg-amber bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600" class="w-[700]">
          模版搭建
        </div>
        <div bg-amber class="w-[350px]" w-220px>模版搭建</div>
      </div>
      <p bg-amber bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
        class="w-[750px] h-[200px] text-center leading-[100px]">
        模版搭建
      </p>
      <p clas="w-[170px]" px-10 m-2 bg-amber>模版搭建</p>

      <p px-10 m-2 bg-amber bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600" class="w-1/2">
        模版搭建
      </p>
    </van-cell-group>
    <van-checkbox v-model="checked">复选框
      <p class="i-ant-design:account-book-twotone"></p>
      <div class="i- i-ant-design:arrow-left-outlined font-icon-16"></div>
      <div class="i- i-ant-design:arrow-left-outlined font-icon-20"></div>
      <div class="i- i-ant-design:arrow-left-outlined font-icon-30"></div>
      <div class="i- i-ant-design:arrow-left-outlined font-icon-40"></div>
      <div class="w-20 bg-amber b-x-fuchsia border">字体</div>
      <div class="btn"></div>
      <div class="btn1"></div>
    </van-checkbox>

    <van-cell title="单元格" value="内容" />
    <van-cell title="单元格" value="内容" label="描述信息" />
    <van-cell title="单元格" value="内容" label="描述信息" />
  </div>
</template>

<script setup lang="ts">
const checked = ref(true)
</script>

<style scoped lang="scss">
p {
  font-size: 20px;
}

.font-icon {
  color: red;
  font-size: 40px;
}
</style>
