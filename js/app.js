var app = new Vue({
  el: '#app',
  data: {
    name: 'Cruiser',
    brand: 'Iron Horse',
    description: 'True to its name, the Iron Horse Cruiser is an <i>experience and expression of freedom</i>.',
    // data property features is an array
    features: ['1200CC Air-cooled Evolution Engine', 'Closed loop exhaust system', 'Chrome Details'],
    // setting the data property sepcs to an object which contains properties with string and array as value
    specs: {
      engine: '1200cc',
      torque: '99 NM',
      weight: '255 kg',
      other: ['Two tone colour', 'Fog lamps', 'Alloy Wheels']
    },
    // variatoions is the property of data that is an array of objects
    variations: [
      {
        color: 'red',
        quantity: 10,
        image: './img/motorcycle-red.jpg'
      },
      {
        color: 'blue',
        quantity: 3,
        image: './img/motorcycle-blue.jpg'
      }
    ],
    cart: 0,
    selectedVariation: 0,
    tabs: ['Features', 'Specs'],
    selectedTab: 'Features'
  },
  // methods property of the Vue instance allows us to define functions than can be triggered from the frontend or from the JavaScript
  methods: {
    updateProduct: function (index) {
      // to access a data property of the Vue instance we use this keyword before with the property name separated by a . (dot) operator
      this.selectedVariation = index
      console.log(this.selectedVariation)
    }
  },
  // computed properties are special properties that can be used to perform functions on the properties and then return a value, these properties are cached so unlike methods they are not run everytime an action is performed and only run when the properties contained in the computer property change
  computed: {
    title: function () {
      return this.brand + ' - ' + this.name
    },
    image: function () {
      return this.variations[this.selectedVariation].image
    }
  }
})