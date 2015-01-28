import Ember from 'ember';

/**
 * components/m-product-image.js
 *
 * Component to create adorned image tag for Adobe Scene7 (image preprocessor).
 * @module components
 */

export default Ember.Component.extend({

  /**
   * This component generates an <img> tag.
   *
   * @property tagName
   */
  tagName: 'img',
  classNames: ['img-responsive'],

  /**
   * The image tag has the computed src attribute.
   *
   * @property attributeBindings
   */
  attributeBindings: ['src'],

  /**
   * The image src query-string has the computed width attribute.
   * This value is a percent value (against the container size).
   *
   * @property width
   */
  productDefaultWidth: 100,

  /**
   * The image height will be calculated based on the 'width' property
   * using the ratio specified.
   *
   * Ratio calculator can be used to get this value:
   * http://andrew.hedges.name/experiments/aspect_ratio/
   *
   * The preset ratio is used for the product images.
   *
   * @property ratio
   */
  productDefaultRatio: "13:15",

  /**
   * Augment src with necessary query parameters.
   *
   * @property src
   * @type String
   */
  src: function() {

    /* convert an object into array, in form [[k,v], [k,v]] */
    function spread(o) {
      return Ember.keys(o).map(function(k) {
        return [k, o[k]];
      });
    }

    function make_param(param_array) {
      return param_array.join('=');
    }

    var image = this.get('image'),
        productWidth = this.get('width'),
        productRatio = this.get('ratio'),
        productQuality = this.get('quality');

    /*
     * Check if parameters are set on component
     * if not, use default variable define above
     * @property width
     */
    if(!this.get('width')){
      productWidth = this.get('productDefaultWidth');
    }

    /*
     * Check if parameters are set on component
     * if not, use default variable define above
     * @property ratio
     */
    if(!this.get('ratio')){
      productRatio = this.get('productDefaultRatio');
    }

    /*
     * Check if parameters are set on component
     * if not, use default variable define above
     * @property quality
     */
    if(!this.get('quality')){
      productQuality = this.get('productDefaultQuality');
    }

    var productRatioNum1 = this.getRatioValues(productRatio, "f"),
        productRatioNum2 = this.getRatioValues(productRatio, "s"),
        productHeight = Math.round(productWidth * (productRatioNum2 / productRatioNum1));
    
    var queryParams = {
      maskuse: 'off',
      wid: productWidth,
      hei: productHeight,
      // Deprecated because new PDP photos use different sizes
      // size: sizeWidth + ',' + sizeHeight,
      fit: 'crop',
      qlt: productQuality
    };

    return image + '?' + spread(queryParams).map(make_param).join('&');

  }.property('image'),

  /*
   * Function splits the product ratio parameter in 2 numbers
   */
  getRatioValues: function(productRatio, value){
    var productRatioSplit = productRatio.split(":");

    if(value === "f"){
      return productRatioSplit[0];
    } else if(value === "s"){
      return productRatioSplit[1];
    } else {
      // Error
    }
  }

});
