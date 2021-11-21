const { pipeline } = require('stream');
const { CustomReadStream, CustomWriteStream } = require('../asssets/customStreams');

const chiper = require('./chiper');

const encryption = (argv) => {  
  let readable = null;
  let wridable = null;

  if (argv.input) {
    readable = new CustomReadStream(argv.input);
  } else {
    readable = process.stdin;
  }

  if (argv.output) {
    wridable = new CustomWriteStream(argv.output);
  } else {
    wridable = process.stdout;
  }

  const transformStreams = [];
  argv.config.forEach(operation => {
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
      if (err) {
        process.stderr.write(err);
        process.exit(1);
      }
    }
  );
};

module.exports = encryption;
