const connectionString:string = 'mongodb://joe:Rbwmt1717@ds161890.mlab.com:61890/restorationbwmt';

import * as mongodb from 'mongodb';

export default class Database {
    public static db:mongodb.Db;

    public static connect() {
        return mongodb.MongoClient.connect(connectionString).then((db) => {
            this.db = db;
            console.log('Connected...');
        }).catch((err) => {
            console.error(err);
        });
    }
}