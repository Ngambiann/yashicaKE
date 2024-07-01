const state ={
    stockDetails : [
            
        {
            itemNumber:1,
            itemName:"Yashica MF2 SUPER",
            itemPrice:100000,
            itemQuantity:10,
            itemImage: '/images/niranjan-_-photographs-CFnpncwCbIk-unsplash.jpg',
            description:"Simple point and shoot film camera,38mm lens,1/125 shutter speed,35mm DX coded film required and a battery powered flash. ",
        },
        {
            itemNumber:2,
            itemName:"Yashica LM",
            itemPrice:250000,
            itemQuantity:5,
            itemImage:'public/images/pexels-kelly-1179532-2796107.jpg',
            description:'A very rare old authentic camera perfect for a collector and film photography enthuthiast'
        },
        {
            itemNumber:3,
            itemName:"Yashica MD-35F motorwind",
            itemPrice:110000,
            itemQuantity:13,
            itemImage:'/images/shyam-raj-vishwakarma-lCOPhrVBzoI-unsplash.jpg',
            description:'a great SLR film camera with an ISO adjuster and flash and a 38mm lens'
        },
        {
            itemNumber:4,
            itemName:"Yashica TL-super",
            itemPrice:96000,
            itemQuantity:15,
            itemImage:'/images/yearone-fNiKYgA260U-unsplash.jpg',
            description:'amazing camera with a shutter speed adjuster ,great lense and a manual timer'
        },
        {
            itemNumber:5,
            itemName:"Yashica Electro 35 FC",
            itemPrice:83000,
            itemQuantity:8,
            itemImage:'/images/AdobeStock_496166365_Preview_Editorial_Use_Only copy.jpeg',
            description:'A nice 40mm lense with great adjustability and focus ranges'
        },
        {
          itemNumber:6,
            itemName:"Yashica FX 1 Electro",
            itemPrice:98000,
            itemQuantity:3,
            itemImage:'public/images/AdobeStock_395357604_Preview_Editorial_Use_Only copy.jpeg',
            description:'Very cool invention here with a 50mm lense adjustable ISO and shutter speed a very reliable SLR'
        },            
        {
          itemNumber:7,
            itemName:"Yashica FX-3 2000",
            itemPrice:110000,
            itemQuantity:5,
            itemImage:'/images/nicolas-thomas-NItu-l4E-tc-unsplash.jpg',
            description:'A very cool film camera a very reliable SLR that will allow you to adjust the focus and iso accordingly'
        },
        {
          itemNumber:8,
            itemName:"Yashica FX-D quartz",
            itemPrice:90000,
            itemQuantity:8,
            itemImage:'/images/AdobeStock_515886178_Preview_Editorial_Use_Only.jpeg',
            description:'it has a 42-75mm lense allowing you immense room to play around and capture alot of beauty,with an adjustable ISO and shutter speed'
        },
        {
          itemNumber:9,
            itemName:"Yashica electro m5",
            itemPrice:50000,
            itemQuantity:6,
            itemImage:'/images/AdobeStock_548352083_Preview_Editorial_Use_Only.jpeg',
            description:'Nicely sized film camera that puts in your pocket a 45mm point and shoot camera with a manual timer '
        },
        {
          itemNumber:10,
            itemName:"Yashica Electro-8 LD-6",
            itemPrice:75000,
            itemQuantity:7,
            itemImage:'/images/AdobeStock_632607228_Preview_Editorial_Use_Only.jpeg',
            description:'A film cameras collectors gem that tells a great story of film photography on display'
        } 
    ],
}
const getters = {
      stock: (state) => state.stockDetails,
}
const actions = {

}
const mutations = {

}

export default {
    state,
    getters,
    actions,
    mutations,
}