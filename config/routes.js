module.exports = function(router) {
    // this route renders the homepage
    router.get('/', (req, res) => {
        res.render('home');
    });
    // this rout renders the saved handlebar page
    router.get('/saved', (req, res) => {
        res.render('saved');
    });
}