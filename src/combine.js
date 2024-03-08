class CombineSelector {
  temp = '';

  addSelector(selector1, combinator, selector2, selector) {
    this.temp = selector;
    this.temp += `${selector1.stringify()} ${combinator} ${selector2.stringify()}`;
    return this.temp;
  }
}

module.exports = CombineSelector;
