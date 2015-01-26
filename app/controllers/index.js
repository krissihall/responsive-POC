import Ember from 'ember';

export default Ember.Controller.extend({

  isPromoPushDownOpen: false,

  needs: ['application'],

  isFluidLayout: Ember.computed.alias('controllers.application.isFluidLayout'),

  isFluidLayoutChanged: function(){
    this.set('isFluidLayout', this.get('controllers.application.isFluidLayout'));
  }.property('isFluidLayout'),

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
    }

  }//actions

});
