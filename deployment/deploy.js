const ghpages = require('gh-pages');

ghpages.publish('./dist', {
	src: ['index.html', '*.js', '*.css'],
});
