import Ember from 'ember';

export default Ember.Controller.extend({

  isPromoPushDownOpen: false,
  isDemo: true,

  needs: ['application'],

  isDiscountFormVisible: Ember.computed.alias('controllers.application.isDiscountFormVisible'),
  isFluidLayout: Ember.computed.alias('controllers.application.isFluidLayout'),
  isDesktopStyles: Ember.computed.alias('controllers.application.isDesktopStyles'),
  isMobileStyles: Ember.computed.alias('controllers.application.isMobileStyles'),
  isLarge: Ember.computed.alias('controllers.application.isLarge'),
  isMedium: Ember.computed.alias('controllers.application.isMedium'),
  isSmall: Ember.computed.alias('controllers.application.isSmall'),
  isXtrSmall: Ember.computed.alias('controllers.application.isXtrSmall'),

  isFluidLayoutChanged: function(){
    this.set('isFluidLayout', this.get('controllers.application.isFluidLayout'));
  }.property('isFluidLayout'),

  prodOneSizes: function(){
    return ["24 X 28", "26 X 28", "28 X 28", "28 X 30", "28 X 32", "28 X 34", 
        "29 X 30", "29 X 30", "29 X 32", "29 X 34", "30 X 28", "30 X 30"];
  }.property(),

  prodTwoSizes: function(){
    return ["Extra Small", "Small", "Medium", "Large", "Extra Large"];
  }.property(),

  prodFourSizes: function(){
    return ["00", "0", "2", "4", "6", "8", "10", "12", "14", "16", "18"];
  }.property(),

  quantityList: function(){
    return ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  }.property(),

  shortsColors: function(){
    return ["Light Destroy Wash", "Authentic Light"];
  }.property(),

  tankColors: function(){
    return ["Gyspy Rose", "Teal", "Neon Runner Pink", "Pink Lily", 
        "Dusty Olive", "Sun", "Sunbleached Mint", "Midnight Rebel"];
  }.property(),

  actions: {

    /**
     * Method to invoke slide up animation.
     * Based on component slideup,
     * @method slideUp
     */
    isPromoPushDownOpenSlideUp: function() {
      this.set('isPromoPushDownOpen', false);
    },

    /**
     * Method to invoke slide up animation.
     * Based on component slideDown,
     * @method slideDown
     */
    isPromoPushDownOpenSlideDown: function() {
      this.set('isPromoPushDownOpen', true);
    },

    showDiscountCodeForm: function(){
      window.console.log('click');
      if(!this.get('isDiscountFormVisible')){
        this.set('isDiscountFormVisible', true);
      }
    }

  }//actions
  
});
