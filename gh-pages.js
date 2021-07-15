var ghpages = require('gh-pages');

ghpages.publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/ashishkapoor/pokedex.git',  
        user: {
          name: 'Ashish Kapoor',
          email: 'swiftobjc@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)