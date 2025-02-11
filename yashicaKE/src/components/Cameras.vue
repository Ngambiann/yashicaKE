<template>
  <h1>Cameras & films</h1>
  <p>{{ total }}</p>
 
  <div>
   <v-row>
      <v-col cols="12" md="5"  v-for="product in stock" :key=product>
         <v-card
       class="mx-auto my-12" 
      max-width="374"
      >
  <v-img 
  height="250" 
  :src="product.itemImage"
   cover
   ></v-img>

  <v-card-item>
    <v-card-title>{{product.itemName}}</v-card-title>
  </v-card-item>

  <v-card-text>
    <div class="my-4 text-subtitle-1"> {{product.itemPrice}} </div>
    <div> {{ product.description }} </div>
  </v-card-text>

  <v-divider class="mx-4 mb-1"></v-divider>
  
  <v-card-actions>
    <v-btn
      color="deep-yellow-lighten-2"
      text="Add to Cart"
      block
      border
      @click="addtoCart(product)"
    ></v-btn>
  </v-card-actions>
</v-card>
</v-col>
</v-row>
  </div>
  </template>

  <script>
  import { mapActions,mapGetters } from 'vuex'

  export default {
  data(){
      return{
          products:[1,2,3,4,5,6,7,8,9,10,11,12],
          stockDetails : [
            
          {
              itemNumber:1,
              itemName:"Yashica MF2 SUPER",
              itemPrice:"KES.100,000",
              itemQuantity:10,
              itemImage: '/images/niranjan-_-photographs-CFnpncwCbIk-unsplash.jpg',
              description:"Simple point and shoot film camera,38mm lens,1/125 shutter speed,35mm DX coded film required and a battery powered flash. ",
          },
          {
              itemNumber:2,
              itemName:"Yashica LM",
              itemPrice:"KES.250,000",
              itemQuantity:5,
              itemImage:'public/images/pexels-kelly-1179532-2796107.jpg',
              description:'A very rare old authentic camera perfect for a collector and film photography enthuthiast'
          },
          {
              itemNumber:3,
              itemName:"Yashica MD-35F motorwind",
              itemPrice:"KES.110,000",
              itemQuantity:13,
              itemImage:'/images/shyam-raj-vishwakarma-lCOPhrVBzoI-unsplash.jpg',
              description:'a great SLR film camera with an ISO adjuster and flash and a 38mm lens'
          },
          {
              itemNumber:4,
              itemName:"Yashica TL-super",
              itemPrice:"KES.96,000",
              itemQuantity:15,
              itemImage:'/images/yearone-fNiKYgA260U-unsplash.jpg',
              description:'amazing camera with a shutter speed adjuster ,great lense and a manual timer'
          },
          {
              itemNumber:5,
              itemName:"Yashica Electro 35 FC",
              itemPrice:"KES.83,000",
              itemQuantity:8,
              itemImage:'/images/AdobeStock_496166365_Preview_Editorial_Use_Only copy.jpeg',
              description:'A nice 40mm lense with great adjustability and focus ranges'
          },
          {
            itemNumber:6,
              itemName:"Yashica FX 1 Electro",
              itemPrice:"KES.98,000",
              itemQuantity:3,
              itemImage:'public/images/AdobeStock_395357604_Preview_Editorial_Use_Only copy.jpeg',
              description:'Very cool invention here with a 50mm lense adjustable ISO and shutter speed a very reliable SLR'
          },            
          {
            itemNumber:7,
              itemName:"Yashica FX-3 2000",
              itemPrice:"KES.110,000",
              itemQuantity:5,
              itemImage:'/images/nicolas-thomas-NItu-l4E-tc-unsplash.jpg',
              description:'A very cool film camera a very reliable SLR that will allow you to adjust the focus and iso accordingly'
          },
          {
            itemNumber:8,
              itemName:"Yashica FX-D quartz",
              itemPrice:"KES.90,000",
              itemQuantity:8,
              itemImage:'/images/AdobeStock_515886178_Preview_Editorial_Use_Only.jpeg',
              description:'it has a 42-75mm lense allowing you immense room to play around and capture alot of beauty,with an adjustable ISO and shutter speed'
          },
          {
            itemNumber:9,
              itemName:"Yashica electro m5",
              itemPrice:"KES.50,000",
              itemQuantity:6,
              itemImage:'/images/AdobeStock_548352083_Preview_Editorial_Use_Only.jpeg',
              description:'Nicely sized film camera that puts in your pocket a 45mm point and shoot camera with a manual timer '
          },
          {
            itemNumber:10,
              itemName:"Yashica Electro-8 LD-6",
              itemPrice:"KES.75,000",
              itemQuantity:7,
              itemImage:'/images/AdobeStock_632607228_Preview_Editorial_Use_Only.jpeg',
              description:'A film cameras collectors gem that tells a great story of film photography on display'
          },
          {
            itemNumber:11,
            itemName:"Kodak Gold 200",
            itemPrice:"KES.4,600",
            itemQuantity:20,
            itemImage:'/images/adam-birkett-GD7VU0daiaQ-unsplash copy.jpg',
            description:'Among cheapest reliable kodak colour negative  film that works best in daylight or flash'
          },
          
      ],
      total:0,

      cartItems:[],
      }
   },
  methods:{
        calculatetotal(itemPrice){
         this.total+=itemPrice
         },
         addtoCart(product){
          this.cartItems.push(product)
          this.calculatetotal(product.itemPrice)
         },
         RemovefromCart(product){
          this.cartItems.pop(product)
          this.total -= product.itemPrice
         },
         
  },
  computed: {
          ...mapGetters({
             stock: 'stock'
          })
         },
}
  </script>