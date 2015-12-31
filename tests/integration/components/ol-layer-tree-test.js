import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

import map from '../../helpers/map'

moduleForComponent('ol-layer-tree', 'Integration | Component | ol layer tree', {
  integration: true
})

test('it renders', function (assert) {
  this.set('map', map)
  this.render(hbs`{{ol-layer-tree map=map}}`)
  assert.equal(this.$().text().trim(), 'OpenStreetMap')
})
