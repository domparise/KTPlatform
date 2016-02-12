module.exports = {
    options: {
        compress: true
    },
    app: {
        files: {
            'public/index.min.css': ['public/styles/**/*.styl']
        }
    }
};
