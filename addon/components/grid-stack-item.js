/**
 * Copyright 2018, Yahoo Inc.
 * Copyrights licensed under the BSD License. See the accompanying LICENSE file for terms.
 *
 * Usage:
 *   {{#grid-stack-item
 *      options=(hash
 *        minWidth=2
 *        maxWidth=4
 *      )
 *      as |item|
 *   }}
 *     My widget content
 *   {{/grid-stack-item}}
 *
 * Full list of options:
 *   https://github.com/troolee/gridstack.js/tree/master/doc#item-attributes
 */
import { dasherize } from '@ember/string';
import Component from '@ember/component';
import { get, computed } from '@ember/object';
import layout from '../templates/components/grid-stack-item';

// Common prefix shared by gridstack data attributes
const GS_PREFIX = 'data-gs-';

export default Component.extend({
  layout,

  /**
   * @property {Array} classNames
   */
  classNames: [ 'grid-stack-item' ],

  /**
   * @property {Ember.Component} parentContainer - reference to the grid-stack component this component belongs to
   */
  parentContainer: computed(function() {
    return this.nearestWithProperty('gridStackContainer');
  }),

  /**
   * @method didReceiveAttrs
   * @override
   */
  didReceiveAttrs() {
    this._super(...arguments);

    const options = get(this, 'options');

    if (options) {
      // Since attributeBindings cannot be a computed property,
      // it must be manually set when options changes
      this.set('attributeBindings',

        // Convert each given option into a html data attribute
        Object.keys(options).map(key => {
          const dataKey = GS_PREFIX + dasherize(key);

          return `options.${key}:${dataKey}`;
        })
      );
    }
  },

  /**
   * @method didInsertElement
   * @override
   */
  didInsertElement() {
    this._super(...arguments);

    const gridStack = get(this, 'parentContainer');

    if (gridStack) {
      // Register widget with grid
      gridStack.send('addWidget', this.element);
    }
  },

  /**
   * @method willDestroyElement
   * @override
   */
  willDestroyElement() {
    this._super(...arguments);

    const gridStack = this.get('parentContainer');

    if (gridStack) {
      // Make sure grid stack is updated
      gridStack.send('removeWidget', this.element);
    }
  }
});
