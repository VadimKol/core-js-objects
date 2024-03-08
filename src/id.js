class IdSelector {
  temp = '';

  addSelector(value, selector) {
    this.temp = selector;
    if (selector.includes('#'))
      throw new Error(
        'Element, id and pseudo-element should not occur more then one time inside the selector'
      );
    if (
      selector.includes('.') ||
      selector.includes('[') ||
      selector.includes(':')
    )
      throw new Error(
        'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element'
      );
    this.temp += `#${value}`;
    return this.temp;
  }
}

module.exports = IdSelector;
