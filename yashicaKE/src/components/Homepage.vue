<script>

 export default {
  data() {
    return {
        image: '/images/AdobeStock_713076646_Preview_Editorial_Use_Only.jpeg',
        url:'https://www.vuejs.org',
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
          {
            itemNumber:12,
            itemName:"Kodak Ultra Max 400",
            itemPrice:"KES.6,000",
            itemQuantity:15,
            itemImage:'/images/daniel-hay-vdTpsMZEPz4-unsplash.jpg',
            description:'Very reliable Colour negative film pefect for even well exposed night shoots'
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