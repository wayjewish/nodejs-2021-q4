const { Readable, Writable } = require('stream');
const fs = require('fs');

class CustomReadStream extends Readable {
  constructor(path) {
    super();
    this._source = fs.createReadStream(path);

    this._source.on('data', data => {
      this.push(data.toString());
    })
  }

  _read() {}
}

class CustomWriteStream extends Writable {
  constructor(path) {
    super();
    this._data = fs.createWriteStream(path, { flags: 'a' });
  }

  _write(chunk, encoding, callback) {
    this._data.write(chunk);
    callback();
  }
}

module.exports = {
  CustomReadStream,
  CustomWriteStream,
}
