// // import sinon from "sinon";
// import {HTTP} from "../src/utils/HTTP";
// // import chai from "chai";
//
// chai.should()
//
// describe('MyAPI', function () {
//     beforeEach(function () {
//         this.xhr = sinon.useFakeXMLHttpRequest();
//         this.requests = [];
//         this.xhr.onCreate = function (xhr) {
//             this.requests.push(xhr);
//         }.bind(this);
//     });
//
//     afterEach(function () {
//         this.xhr.restore();
//     });
//
//     it('should parse the fetched response data as JSON', function (done) {
//         const data = {foo: 'bar'};
//         const dataJson = JSON.stringify(data);
//
//         new HTTP('/chats').get('').then((response) => {
//             console.log('response')
//             response.should.deep.equal(data);
//             done();
//         });
//         console.log(this.requests)
//         this.requests[0].respond(200, {'Content-Type': 'text/json'}, dataJson);
//     });
//
//     it('should post the given response data as JSON body', function() {
//         var data = { hello: 'world' };
//         var dataJson = JSON.stringify(data);
//
//         new HTTP('/chats').post(data, function() { });
//
//         this.requests[0].requestBody.should.equal(dataJson);
//     });
// });
