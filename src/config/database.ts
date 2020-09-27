import * as mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/crudserverless', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default mongoose;
