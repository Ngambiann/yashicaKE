<script>

 export default {
  data() {
    return {
        image: '../images/vinicius-amnx-amano-dbOV1qSiL-c-unsplash copy.jpg',
        url:'https://www.vuejs.org',
        stockDetails : [
            {
                itemNumber:1,
                itemName:"sweets",
                itemPrice:10,
                itemQuantity:100,
                itemImage: '../images/customerbox-aXq1oCCjlVM-unsplash copy.jpg'
            },
            {
                itemNumber:2,
                itemName:"lolipops",
                itemPrice:25,
                itemQuantity:50,
                itemImage:'../images/jamie-albright-AHF_ZktTL6Q-unsplash copy.jpg'
            },
            {
                itemNumber:3,
                itemName:"cake",
                itemPrice:110,
                itemQuantity:3,
                itemImage:'../images/american-heritage-chocolate-vdx5hPQhXFk-unsplash.jpg'

            },
            {
                itemNumber:4,
                itemName:"soda",
                itemPrice:70,
                itemQuantity:12,
                itemImage:'../images/alexandra-nosova-lpv--JSLa58-unsplash.jpg'
            },
            {
                itemNumber:5,
                itemName:"cookies",
                itemPrice:30,
                itemQuantity:40,
                itemImage:'../images/julissa-capdevilla-tDoHiqXl9b8-unsplash.jpg'
            }
        ],
      }
   },
   methods() {
    //we shall add our functions here
  },

  computed(){
    //we use this when working with forms
  }
}
</script>

<template>
    <v-card
    class="mx-auto"
    width="1400"
    height="530"
  >
    <v-carousel>
  <v-carousel-item
    src="/images/AdobeStock_637074878_Preview_Editorial_Use_Only.jpeg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="/images/joe-green-Olp-XSVq4Nw-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="/images/niranjan-_-photographs-CFnpncwCbIk-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="/images/t-syarifudin-budiana-Rp0nULxTAyI-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="/images/alex-baber-et3asHnfrtc-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="/images/ahmed-sheraz-PGYu3lZ4Xik-unsplash.jpg"
    cover
  ></v-carousel-item>

</v-carousel>
  </v-card>
  <v-card align="center">
        <v-card-item>
          <v-card-title>Welcome to YashicaKE store</v-card-title>
          <v-card-subtitle>The authentic vintage cameras store </v-card-subtitle>
       </v-card-item>
        <v-card-text>
          Capture life's moments with clarity and precision using our intuitive old school cameras. 
          Discover a wide range of vintage film cameras, lenses,films and accessories to elevate your  film photography game.
           Whether you're a professional or a beginner, our app offers expert advice, manuals, and personalized recommendations 
           to help you unleash your creativity.Begin the journey of transforming  your photography experience with film photography.
        </v-card-text>
      </v-card>


      <v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <h3 class="text-center">What our customers say</h3>
      <v-divider></v-divider>

      <v-col>
        <v-col cols="12" md="12">
      <v-card
        subtitle="@Taylor Kendi"
        text="Ken,the attendant,took time to explain to me the perfect 35mm film to use for my yashica MF2 ..
        very grateful to be dealing with experts."
        title="Good customer service"
      ></v-card>
    </v-col>

    <v-col cols="12" md="12">
      <v-card
        subtitle="@Ngambi58"
        text="A lot different types of film cameras available from SLR's to the point and shoot ones would definitely recommend."
        title="Loved them!"
      ></v-card>
    </v-col>
  </v-col>

  <v-col>
        <v-col cols="12" md="12">
      <v-card
        subtitle="@Taylor Kendi"
        text="Ken,the attendant,took time to explain to me the perfect 35mm film to use for my yashica MF2 ..
        very grateful to be dealing with experts."
        title="Good customer service"
      ></v-card>
    </v-col>

    <v-col cols="12" md="12">
      <v-card
        subtitle="@Ngambi58"
        text="A lot different types of film cameras available from SLR's to the point and shoot ones would definitely recommend."
        title="Loved them!"
      ></v-card>
    </v-col>
  </v-col>
   

</template>