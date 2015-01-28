import Ember from 'ember';

/**
 * components/price-slasher.js
 *
 * Component to put slash through prices, or anything else.
 *
 * @module components
 */

var PriceSlasherComponent = Ember.Component.extend({

  tagName: 'span',
  classNames: ['price-slasher'] 

});

// This allows us to not bother with a template with contains only {{yield}}
Ember.Handlebars.helper('price-slasher', PriceSlasherComponent);

export default  PriceSlasherComponent;
