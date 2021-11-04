(function() {
    // Incluyo los adapters y el handler
    let SassFileAdapter = require('./classes/sass-file.adapter');
    let FileHandler = require('./handler/file-handler');

    const sassFileAdapter = new SassFileAdapter(new FileHandler());

   sassFileAdapter.setPath('src');
   sassFileAdapter.compile();
})();

