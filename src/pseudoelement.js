class PseudoElementSelector {
  temp = '';

  addSelector(value, selector) {
    this.temp = selector;
    if (selector.includes('::'))
      throw new Error(
        'Element, id and pseudo-element should not occur more then one time inside the selector'
      );
    this.temp += `::${value}`;
    return this.temp;
  }
}

module.exports = PseudoElementSelector;
