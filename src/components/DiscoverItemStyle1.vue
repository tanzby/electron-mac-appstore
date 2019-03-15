<template>
    <div class="w-1/2 flex" @click="product(name)">
          <div class="w-24">
            <img :src="icon_path" alt="icon">
          </div>
          <div class="pl-6 flex-1 pr-6">
            <div class="mb-1">{{name}}</div>
            <div class="text-grey text-xs mb-6">{{description}}</div>
            <div class="mb-8">
              <span class="bg-white text-blue rounded-full px-3 py-1 text-xs font-bold">{{price}}</span>
            </div>
            <div class="border-b border-grey-darker mb-10" v-if="with_border"></div>
          </div>
        </div>
</template>

<script>
export default {
    props: ['name','description','price', 'icon_path', 'with_border','index'],
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

