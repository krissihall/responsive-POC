import Ember from 'ember';

/**
 * components/aeo-checkbox.js
 *
 * Component for checkbox inputs.
 * This creates the checkbox and binds the 'for' attribute
 * on the label to the id of the checkbox input automatically.
 *
 * Styled using bootstrap project.
 *
 * Parameters:
 * Required - label
 */

export default Ember.Component.extend({

  classNames: ['checkbox'],
  classNameBindings: ['hasError', 'isDisabled'],

  /**
   * Error object is passed in from component
   *
   * @property: error
   */
  error: null,

  /**
   * Is this field in error?
   * If so, add `has-error` class.  (goes with 'classNameBinding')
   *
   * @property: hasError
   */
  hasError: function(){
    return !!this.get('error');
  }.property('error'),

  /**
   * Is this field disabled?
   * If so, add `is-disabled`' class.  (goes with 'classNameBinding')
   *
   * @property: isDisabled
   */
  isDisabled: function(){
    return !!this.get('disabled');
  }.property('disabled'),

  /**
   * Input checkbox id to be bound to <label> 'for' attribute
   *
   * Set to null on load, is updated with didInsertElement
   */
  checkboxId: null,

  /**
   * Create the label based on component selections
   * If 'showRemainingCharacters' is set to 'true',
   * this generates the label and placeholder
   */
  computedLabel: function(){
    if(this.get('hasCharacterCounter')){
      return this.get('label') + " (" + 
            this.get('getRemainingCharacters') + 
            " Remaining)";
    } else {
      return this.get('label');
    }
    
  }.property('hasCharacterCounter', 'getRemainingCharacters'),

  /**
   * Check to see if input value is empty
   * if not, add 'not-empty' class to element
   */
  notEmpty: function(){
    return !!this.get('value');
  }.property('value'),

  /**
   * When element is added, add watcher for changes to input element
   *
   * @method didInsertElement
   */
  didInsertElement: function(){
    var checkboxIdId = this.get('element').querySelector('input[type="checkbox"]').id;

    // Bind the for attribute on the label to the 'id' of the textarea
    this.set('checkboxId', checkboxIdId);
  },

  //* Ember bug: Set the name of the controller function the action will fire
  keyUpAction: 'clearFieldError',

  /**
   * When an error is present, observe input value for changes
   * to send an action for clearing the current error
   *
   * @method keyUp
   */
  keyUp: function(){
    if(this.get('error')){
      /** Ember bug: work-around for sending an action to the
       * controller from a component, name of the action in
       * the controller is set above.
       */ 
      this.sendAction('keyUpAction', this.get('error.id'));
    }
  }

});
