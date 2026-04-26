export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Controls console.log representation
  get [Symbol.toStringTag]() {
    return this._code;
  }

  // Controls explicit string conversion
  toString() {
    return `[object ${this._code}]`;
  }
}
