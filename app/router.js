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

  this.route("categories", function() {
    this.route("category");
  });
  this.route("account");
});

export default Router;
