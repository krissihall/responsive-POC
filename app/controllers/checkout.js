import Ember from 'ember';

export default Ember.Controller.extend({

  needs: ['application'],

  isShippingSpeedOpen: false,

  isDiscountFormVisible: Ember.computed.alias('controllers.application.isDiscountFormVisible'),
  isFluidLayout: Ember.computed.alias('controllers.application.isFluidLayout'),

  isFluidLayoutChanged: function(){
    this.set('isFluidLayout', this.get('controllers.application.isFluidLayout'));
  }.property('isFluidLayout'),

  usStatesList: function(){
    return ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
        'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 
        'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 
        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 
        'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 
        'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 
        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 
        'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
  }.property(),

  actions: {

    showDiscountCodeForm: function(){
      window.console.log('click');
      if(!this.get('isDiscountFormVisible')){
        this.set('isDiscountFormVisible', true);
      }
    },

    /**
     * Method to invoke slide up animation.
     * Based on component slideup,
     * @method slideUp
     */
    isShippingSpeedSlideUp: function() {
      this.set('isShippingSpeedOpen', true);
    },

    /**
     * Method to invoke slide up animation.
     * Based on component slideDown,
     * @method slideDown
     */
    isShippingSpeedSlideDown: function() {
      this.set('isShippingSpeedOpen', false);
    }

  }// actions

});
