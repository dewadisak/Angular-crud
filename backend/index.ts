export {};
let express= require('express'),
path = require('path'),
mongoose  = require('mongoose'),
cors = require('cors'),
bodyParser = require('body-parser'),
mongoDb = require('./@core/repository/db')

  mongoose.Promise = global.Promise;
  mongoose.connect( mongoDb.db, {
      useNewUrlParser:true,
      useUnifiedTopology:true
  }).then(() => {
      console.log('Database connected')
  })
//   }, error => {
//     console.log('Database error : error' )
//   });


  const productRoute = require('./modules/product/product.routes');
  const app  = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
      extended:false
  }));

  app.use(cors());

  app.use(express.static(path.join(__dirname, 'dist/')));
  

  //API Root

  app.use('/api',productRoute);

  //Port

  const port = process.env.PORT || 8000;

  app.listen(port,() =>[
      console.log('Listening on port ' + port)
  ])

