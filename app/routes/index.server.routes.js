/**
 * Created by SONY on 22-04-2017.
 */
module.exports=function (app) {
    var index=require('../controllers/index.server.controller');
    app.get('/',index.render);

}