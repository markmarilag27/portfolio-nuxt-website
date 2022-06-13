<script setup lang="ts">
import ItemProp from '@/models/item-prop.model'
interface BlockProp {
  title: String,
  items: ItemProp[]
}
const { title, items } = defineProps<BlockProp>()
</script>


<template>
  <div class="relative flex w-full flex-wrap max-w-screen-xl py-24 px-4">
    <div class="flex-grow flex flex-wrap">
      <h3 class="xl:flex-1 text-3xl font-bold text-white" v-text="title" />
      <!-- end title -->
      <div class="xl:flex-1">
        <slot />
        <!-- end paragraph -->
        <div class="flex flex-wrap gap-4">
          <div v-for="(item, itemIndex) in items" :key="itemIndex" class="w-full md:flex-1">
            <h3 class="text-white font-bold uppercase text-sm mb-1" v-text="item.title" />
            <!-- end header -->
            <ul class="list-disc leading-loose text-sm">
              <li v-for="(list, listIndex) in item.list" :key="listIndex" class="text-gray-200 ml-4" v-text="list" />
              <!-- end list -->
            </ul>
            <!-- end unordered list -->
          </div>
          <!-- end flex 1 -->
        </div>
        <!-- end flex -->
      </div>
      <!-- end text -->
    </div>
    <!-- end flex grow -->
  </div>
  <!-- end flex -->
</template>
