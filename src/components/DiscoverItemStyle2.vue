<template>
  <div class="w-49/100 flex" @click="product(name)">
    <div><img :src="icon_path" alt="icon" class="w-12"></div>
    <div class="ml-3">{{(index+1)}}</div>
    <div :class="['ml-3 flex flex-1 justify-between mb-6',with_border?'border-b border-grey-darker':'']">
      <div>
        <div class="mb-1">{{name}}</div>
        <div class="text-grey text-xs mb-6">{{description}}</div>
      </div>
      <div>
        <span class="bg-white text-blue rounded-full px-3 py-1 text-xs font-bold">
          {{price}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['name','description','price','icon_path','with_border','index'],
    methods: {
      product(title) {
        this.$router.push(
          {
            name: 'product',
            params: {
              title
            }
          }
        );
      }
    }
}
</script>

