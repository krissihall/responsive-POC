import Ember from 'ember';

/**
 * components/currency-display.js
 * @module components
 *
 * Display currency in official CX format.
 */

export default Ember.Component.extend({

  tagName: 'span',

  classNames: ['currency-display'],

  /**
   * Value to be displayed, passed as "value" parameter to component.
   *
   * @property value
   * @type String
   */
  value: "$xx.yy",

  hasDecimals: false,

  /**
   * Break down currency value into dollars and cents pieces.
   *
   * @property pieces
   * @type [String]
   */
  pieces: function() {
    // assume currency symbol is a single character at start of string
    var currency_regexp = /(.)(\d+)\.(\d+)$/;
    return (this.get('value') || '').match(currency_regexp) || [];
  }.property('value'),

  currency: function() {
    return this.get('pieces')[1];
  }.property('pieces.[1]'),

  dollars: function() {
    return this.get('pieces')[2];
  }.property('pieces.[2]'),

  cents: function() {
    return this.get('pieces')[3];
  }.property('pieces.[3]'),

  decimals: function(){
    if(this.get('hasDecimals')){
      return true;
    } else {
      return false;
    }
  }.property('decimals')
  
});
