import Ember from 'ember';

export default Ember.Controller.extend({

  needs: ['application'],

  isDiscountFormVisible: Ember.computed.alias('controllers.application.isDiscountFormVisible'),
  isFluidLayout: Ember.computed.alias('controllers.application.isFluidLayout'),

  isFluidLayoutChanged: function(){
    this.set('isFluidLayout', this.get('controllers.application.isFluidLayout'));
  }.property('isFluidLayout'),

  actions: {

    showDiscountCodeForm: function(){
      window.console.log('click');
      if(!this.get('isDiscountFormVisible')){
        this.set('isDiscountFormVisible', true);
      }
    }

  }// actions

});
