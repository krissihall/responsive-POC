import Ember from 'ember';
import jQuery from 'jquery';

export default Ember.View.extend({

  templateName: 'checkout/cart-details',
  classNames: ['checkout-cart-details', 
      'col-xs-12', 'col-md-5', 'col-lg-5'],

  didInsertElement: function(){
    window.console.log('test');
    this.$().affix({
      offset: {
        top: 0,
        bottom: function () {
          return (this.bottom = jQuery('footer').outerHeight(true));
        }
      }
    });

  }

});
