const { expect } = require("chai");
const request = require("request");
let url = 'http://localhost:3000/api/cat';
let cat = {
    title: 'test-post-cat',
    path: 'images/winter2.jpg',
    subTitle: 'test-post-cat',
    description: 'test-post-cat'
};

describe('testing GET', function(){
    it('returns statusCode of 200', function(done){
        request(url, function(error, response, body)        //error, response, body
        {
            console.log(arguments);
            let responseObj = JSON.parse(body);    //
            expect(responseObj.statusCode).to.equal(200);
            done();
        });
    });
});

describe('test post cat',function(){
    it('insert a cat into database', function(done){
        request.post({url:url, form:cat}, function(error,response,body){
            body = JSON.parse(body)
            expect(body.message).to.contain('success');
            done();
        })
    })
});

describe('delete a cat',function(){
    it('delete a cat from database', function(done){
        request.delete({url:url, form:cat}, function(error,response,body){
            body = JSON.parse(body)
            expect(body.message).to.contain('removed');
            done();
        })
    })
}); 