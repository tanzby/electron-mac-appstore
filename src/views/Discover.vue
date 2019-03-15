<template>
  <div class="bg-black text-white flex-1 ml-56">

    <transition name="animation" enter-active-class="animated fadeIn faster" 
    leave-active-class="animated fadeOut faster">
      <div v-if="titleBarVisible" class="text-white bg-grey-darkest border-b border-grey-darker p-3 text-center w-full fixed z-10 pr-56">
        Discover
      </div>
    </transition>
    

    <div class="mr-10 ml-10">
      <flickity ref="flickity" :options="flickityOptions">
      <div  v-for="item in discover_list" :key="item.name" :style="{background: 'url('+ item.img +')'}"
         class="discover-banner w-full text-white px-8 rounded-b-lg pt-12 mb-10"
         @click="story(item.name)">
          <div class="uppercase mb-4">{{item.header}}</div>
          <h1 class="font-normal mb-4">{{item.name}}</h1>
          <p class="w-64 leading-normal text-grey-lighter">
            {{item.description}}
          </p>
      </div>
    </flickity>

  
    <div class="flex mb-10">
      <div class="w-1/2 mr-4 bg-grey-darkest rounded-lg flex px-8 py-6" @click="story('Get Focused, Fast')">
        <div class="flex-1">
          <div class="uppercase text-grey-light text-xs mb-1">Featured App</div>
          <h1 class="font-normal text-2xl mb-4">Get Focused, Fast</h1>
          <p class="text-grey-light text-xs leading-normal">OmniFocus transforms your to-do list. Click to read how.</p>
        </div>
        <div class="text-right">
          <img src="../assets/discover2.jpg" alt="image" class="rounded-full w-40">
        </div>
      </div>

      <div class="w-1/2 ml-4 bg-grey-darkest rounded-lg px-8 py-6" @click="story('Apps That Look Great in Dark Mode')">
        <div class="uppercase text-grey-light text-xs mb-1">Collection</div>
        <h1 class="font-normal text-2xl mb-4">Apps That Look Great in Dark Mode</h1>
        <p class="text-grey-light text-xs leading-normal mb-4">Dark is the new black.</p>
        <img src="../assets/icons_darkmode.png" alt="icons">
      </div>
    </div>

    <div class="border-b border-grey-darker mb-10"></div>

    <div class="apps-games-we-love">
      <div class="flex justify-between">
        <h2 class="font-normal mb-8">
          Apps and Games We Love
        </h2>
        <a href="#" class="text-blue no-underline">See All</a>
      </div>

      <div class="flex flex-wrap mb-4">
        
        <DiscoverItemStyle1 v-for="(item, index) in love_list" :key="item.price"
          :name="item.name" :description="item.description" :price="item.price"
          :icon_path="item.icon_path" :with_border="index<love_list.length-2" :index="index"/>
        
      </div>
    </div>

    <div class="border-b border-grey-darker mb-10"></div>

    <div class="top-paid">
      <div class="flex justify-between">
        <h2 class="font-normal mb-8">
          Top Paid
        </h2>
        <a href="#" class="text-blue no-underline">See All</a>
      </div>

      <div class="flex flex-wrap flex-col h-64 content-between">
          <DiscoverItemStyle2 v-for="(item, index) in top_paid_list" :key="item.price"
              :name="item.name" :description="item.description" :price="item.price"
              :icon_path="item.icon_path" :with_border="index%3<2" :index="index"/>
            
      </div>  

    </div>

    <div class="border-b border-grey-darker mb-10"></div>

    <div class="text-grey mb-10">
      Terms & Conditions
    </div>
    </div>

  </div>

  

</template>

<script>

import DiscoverItemStyle1 from '../components/DiscoverItemStyle1'
import DiscoverItemStyle2 from '../components/DiscoverItemStyle2'

import Story from '../views/Story'
import Product from '../views/Product'
import Flickity from 'vue-flickity'
import { request } from 'http';

export default {
  name: 'discover',
  components: {
    Flickity,
    DiscoverItemStyle1,
    DiscoverItemStyle2,
    Story,
  },
  data:()=>{
    return {
      titleBarVisible: false,
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: true,
        pageDots: false,
        wrapAround: false
        
        // any options from Flickity can be used
      },
      discover_list:[
        {
          header: 'the besics',
          name:'Create Personal Project',
          description: 'With these apps, creativity has no boundaties.',
          img: require('../assets/discover1.jpg')
        },
        {
          header: 'the besics',
          name:'Create Personal Project 2',
          description: 'With these apps, creativity has no boundaties.',
          img: require('../assets/discover1-2.jpg')
        },
      ],
      love_list:[
        {
          name:'QuarkXPress 2018 Pro', 
          description: 'Love Print, Live Digital',
          icon_path:require('../assets/icon_quark.png'), 
          price:'$399.9'
        },
        {
          name:'Fantastical 2', 
          description: 'Calender and Reminders',
          icon_path:require('../assets/icon_fantastical2.png'), 
          price:'$69.9'
        },
        {
          name:'OmniFocus 3', 
          description: 'Accomplish More Every Day',
          icon_path:require('../assets/icon_omnifocus.png'), 
          price:'$399.9'
        },
        {
          name:'Pixelmator Pro', 
          description: 'Pro image editing for everyone',
          icon_path:require('../assets/icon_pixelmator.png'), 
          price:'$39.9'
        },
      ],
      top_paid_list: [
        {
          name:'Final Cut Pro', 
          description: 'Pro image editing for everyone',
          icon_path:require('../assets/icon_fcp.png'), 
          price:'$439.9'
        },
        {
          name:'Magnet', 
          description: 'Organize Your Workspace',
          icon_path:require('../assets/icon_magnet.png'), 
          price:'$1.39'
        },
        {
          name:'Word Document Writer Pro', 
          description: 'Business',
          icon_path:require('../assets/icon_word.png'), 
          price:'$39.99'
        },
        {
          name:'DaisyDisk', 
          description: 'Recover disk space',
          icon_path:require('../assets/icon_daisydisk.png'), 
          price:'Open'
        },
        {
          name:'Antivirus Zap - Virus & Adware', 
          description: 'Scan & Remove Malware & Adware',
          icon_path:require('../assets/icon_antivirusapp.png'), 
          price:'$6.99'
        },
        {
          name:'The Sims 2: Super Collection', 
          description: 'Your faves in one place',
          icon_path:require('../assets/icon_sims.png'), 
          price:'$439.9'
        },

      ]
    }
  },
  created() {
    window.addEventListener('scroll', this.toggleTitleBar, {passive: true})
  },
  methods: {
    story(title) {
      this.$router.push(
        {
          name: 'story',
          params: {
            title
          }
        }
      );
    },

    toggleTitleBar(){
      this.titleBarVisible = window.scrollY > 0
    }
    
  }
}
</script>

