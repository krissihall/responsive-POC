import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:categories/category', 'CategoriesController', {
  // Specify the other units that are required for this test.
  needs: ['controller:application']
});

// Replace this with your real tests.
test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});
