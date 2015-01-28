import Ember from 'ember';

/**
 * components/aeo-select.js
 *
 * Component for form select dropdowns.
 * An invisible label occupying the same position as the placeholder is
 * animated up to the top of the box in a small font when typing starts.
 *
 * Styled using AEO-Bootstrap.
 *
 * Parameters:
 * Required - content
 * Optional - option, selection       
 */

export default Ember.Component.extend({

  classNames: ['form-group', 'select-control'],
  classNameBindings: ['hasError', 'isDisabled'],

  /**
   * Error object is passed in from component
   *
   * @property: error
   */
  error: null,

  /**
   * Is this field in error?
   * If so, add `has-error` class.
   *
   * @property: hasError
   */
  hasError: function(){
    return !!this.get('error');
  }.property('error'),

  //Ember.computed.bool('error'),

  /**
   * Is this field disabled?
   * If so, add 'disabled' class to the wrapper.
   *
   * @property: isDisabled
   */
  isDisabled: function(){
    return !!this.get('disabled');
  }.property('disabled'),

  /**
   * Select dropdown id to be bound to <label> 'for' attribute
   *
   * Set to null on load, is updated with didInsertElement
   */
  selectId: null,

  keyUpAction: 'clearFieldError',

  /**
   * When element is added, add watcher for changes to select element
   *
   * @method didInsertElement
   */
  didInsertElement: function(){
    var selectId = this.get('element').querySelector('select').id;

    // Bind the for attribute on the label to the 'id' of the select dropdown
    this.set('selectId', selectId);
  },

  keyUp: function(){
    if(this.get('error')){
      this.sendAction('keyUpAction', this.get('error.id'));
    }
  }
  
});
