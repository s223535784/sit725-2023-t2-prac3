const { expect } = require("chai");
const request = require("request");
let url = 'http://localhost:3000/api/cat';

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
