import Ember from 'ember';

/**
 * components/aeo-input.js
 *
 * Component for form input fields.
 * An invisible label occupying the same position as the placeholder is
 * animated up to the top of the box in a small font when typing starts.
 *
 * Styled using styles/components/aeo-input.styl.
 *
 * Parameters:
 * Required - label
 * Optional - value             maxlength             form
              readonly          size                  autocomplete
              name              pattern               multiple
              height            width                 autofocus
              step              selectionDirection    autosave
              required          tabindex              spellcheck
              min               max                   inputmode 
              accept            formmethod            formtarget
              formaction        formnovalidate        formentype
              type              disclaimer
              showRemainingCharacters (must have maxlength set)        
 */

export default Ember.Component.extend({

  classNames: ['form-group', 'aeo-input'],
  classNameBindings: ['notEmpty', 'hasError', 'isDisabled'],

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
   * Input field id to be bound to <label> 'for' attribute
   *
   * Set to null on load, is updated with didInsertElement
   */
  inputId: null,

  /**
   * Do you want to show the "remaining characters" counter when you have
   * a 'maxcharacters' property set? (maxcharacters is required for this feature)
   * @property: showremainingchars
   */
  hasCharacterCounter: function(){
    return !!this.get('showRemainingCharacters');
  }.property('showRemainingCharacters'),

  /**
   * Calculated property to determine how many characters 
   * are remaining when maxlength is set and
   * 'showRemainingCharacters' property.
   */
  getRemainingCharacters: function(){
    var maxlength = this.get('maxlength'),
        valueCount = 0;

    if(this.get('value')){
      valueCount = this.get('value').length;
    }

    return maxlength - valueCount;
  }.property('value'),

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

  keyUpAction: 'clearFieldError',

  /**
   * When element is added, add watcher for changes to input element
   *
   * @method didInsertElement
   */
  didInsertElement: function(){
    var inputId = this.get('element').querySelector('input').id;

    // Bind the for attribute on the label to the 'id' of the textarea
    this.set('inputId', inputId);
  },

  keyUp: function(){
    if(this.get('error')){
      this.sendAction('keyUpAction', this.get('error.id'));
    }
  }
  
});
