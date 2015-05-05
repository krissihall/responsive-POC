import Ember from 'ember';

export default Ember.Controller.extend({

  isPromoPushDownOpen: false,
  isDemo: true,

  needs: ['application'],

  isFluidLayout: Ember.computed.alias('controllers.application.isFluidLayout'),

  isFluidLayoutChanged: function(){
    this.set('isFluidLayout', this.get('controllers.application.isFluidLayout'));
  }.property('isFluidLayout')

});
