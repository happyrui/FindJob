/**
 * Created by dell-pc on 2017/10/3.
 */
//function red(){
//    console.log('red');
//}
//function green(){
//    console.log('green');
//}
//function yellow(){
//    console.log('yellow');
//}
//
//var tic = function(timmer, cb){
//    return new Promise(function(resolve, reject) {
//        setTimeout(function() {
//            cb();
//            resolve();
//        }, timmer);
//    });
//};
//
//var d = new Promise(function(resolve, reject){resolve();});
//var step = function(def) {
//    def.then(function(){
//        return tic(3000, red);
//    }).then(function(){
//        return tic(2000, green);
//    }).then(function(){
//        return tic(1000, yellow);
//    }).then(function(){
//        step(def); //ʹ�õݹ���
//    });
//};
//
//step(d);

var tic = function(timmer, str){
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log(str);
            resolve(1);
        }, timmer);
    });
};


function* gen(){
    yield tic(3000, 'red');
    yield tic(1000, 'green');
    yield tic(2000, 'yellow');
}

var iterator = gen();
var step = function(gen, iterator){
    var s = iterator.next();
    if (s.done) {
        step(gen, gen());
    } else {
        s.value.then(function() {
            step(gen, iterator);
        });
    }
}

step(gen, iterator);