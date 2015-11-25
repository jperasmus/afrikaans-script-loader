'use strict';
var words = require('./words.json');

function transpile(content) {
  var regex;
  for (var word in words) {
    regex = new RegExp('\\b' + words[word] + '\\b', 'g');
    content = content.replace(regex, word);
  }
  return content;
}

module.exports = function(content) {
	if (this.cacheable) this.cacheable();
  return transpile(content);
};
