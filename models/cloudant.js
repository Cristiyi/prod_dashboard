var Cloudant = require('cloudant');
var cloudant = Cloudant({ account: process.env.DB_USER, password: process.env.DB_PASS });

cloudant.db.list(function(err, allDbs) {
    if (err) {
        console.log('Failed to initialize Cloudant: ' + err.message);
    } else {
        console.log('Success to initialize Cloudant');
    };
});

// cloudant.DBName = 'wordpress_management_prod';
cloudant.DBName = 'wordpress_management_prod';
cloudant.useProd = function() {
    if (cloudant.DBName != 'wordpress_management_prod') {
        cloudant.DBName = 'wordpress_management_prod';
        console.log('DBName:', cloudant.DBName);
    }
}

cloudant.useDev = function() {
    if (cloudant.DBName != 'wordpress_management') {
        cloudant.DBName = 'wordpress_management';
        console.log('DBName:', cloudant.DBName);
    }
}

cloudant.DBNamePrdJob = 'wordpress_management_prod';
cloudant.DBNamePreJob = 'wordpress_management';
// db = cloudant.db.use(cloudant.DBName);
// db.view('blogs', 'allBlogs', function(err, body) {
//   console.log(body);
// });

module.exports = cloudant;
