var ghpages = require('gh-pages');

ghpages.publish(
    'build/_app', // path to public directory
    {
        branch: 'main',
        repo: 'https://github.com/ashishkapoor/pokedex.git', // Update to point to your repository  
        user: {
            name: 'Ashish Kapoor', // update to use your name
            email: 'swiftobjc@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)