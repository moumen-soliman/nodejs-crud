module.exports = {

  displayHome: (req, res) => {
    res.render('pages/home', {
    	pageTitle: 'home page',
    	welcomeMessage: 'Here is home page welcome'
    })
  }

};