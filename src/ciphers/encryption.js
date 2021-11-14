const { pipeline } = require('stream');
const fs = require('fs');
const parsingFlags = require('./parsingFlags');
const parsingConfig = require('./parsingConfig');
const errorHandler = require('../errors/errorHandler');

const chiper = require('./chiper');

const encryption = (argv) => {
  const parseFlags = parsingFlags(argv);
  const parseConfig = parsingConfig(parseFlags.config);
  
  let readable = null;
  let wridable = null;

  if (parseFlags.input) {
    readable = fs.createReadStream(parseFlags.input);
  } else {
    readable = process.stdin;
  }

  if (parseFlags.output) {
    wridable = fs.createWriteStream(parseFlags.output);
  } else {
    wridable = process.stdout;
  }

  const transformStreams = [];
  parseConfig.forEach(operation => {
    const settings = {
      shift: null, 
      mode: null, 
      mirrored: false,
    };

    switch (operation.chiper) {
      case 'C':
        settings.shift = 1;
        if (operation.encoding) settings.mode = 'encoding';
        if (operation.decoding) settings.mode = 'decoding';
        break;
      case 'R':
        settings.shift = 8;
        if (operation.encoding) settings.mode = 'encoding';
        if (operation.decoding) settings.mode = 'decoding';
        break;
      case 'A':
        settings.mirrored = true;
        break;
    }

    const transform = chiper(settings.shift, settings.mode, settings.mirrored);
    transformStreams.push(transform);
  });

  pipeline(
    readable,
    ...transformStreams,
    wridable,
    err => {
      if (err) errorHandler(err);
    }
  );
};

module.exports = encryption;
