import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("index", {
    path: "/"
  });
  this.route("cart");

  this.route("checkout");
});

export default Router;
