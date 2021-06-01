import * as sinon from 'sinon';
import {HTTP} from '../src/utils/HTTP';
import * as chai from 'chai';

chai.should();

const BASE_URL = 'https://httpbin.org';
const slug = '/anything';
const HTTPRequest = new HTTP(slug, BASE_URL);


describe('MyAPI', function () {
    beforeEach(function () {
        // @ts-ignore
        global.XMLHttpRequest = sinon.useFakeXMLHttpRequest();

        // @ts-ignore
        this.requests = [];
        // @ts-ignore
        XMLHttpRequest.onCreate = function (xhr) {
            this.requests.push(xhr);
        }.bind(this);
    });

    afterEach(function () {
        // @ts-ignore
        XMLHttpRequest.restore();
    });


    it('should post the given response data as JSON body', function (done) {
        const data = {hello: 'world'};
        const dataJson = JSON.stringify(data);
        console.log(dataJson);

        HTTPRequest.post('', {data})
            .then((response) => {
                console.log(response);
                const data = JSON.parse(response.responseText);
                data.should.deep.equal(data);
                done();
            });
        console.log(this.reqests);
        this.requests[0].respond(200, {'Content-Type': 'text/json'}, dataJson);
    });

    it('should parse the fetched response data as JSON', function (done) {
        const data = {foo: 'bar'};
        const dataJson = JSON.stringify(data);

        HTTPRequest.get('', {data})
            .then((response) => {
                console.log(response);
                const data = JSON.parse(response.responseText);
                data.should.deep.equal(data);
                done();
            });
        console.log(this.reqests);
        this.requests[0].respond(200, {'Content-Type': 'text/json'}, dataJson);
    });


    it('should delete the given data', function (done) {
        const data = {user: 123};
        const dataJson = JSON.stringify(data);

        HTTPRequest.delete('', {data})
            .then((response) => {
                const data = JSON.parse(response.responseText);
                data.should.deep.equal(data);
                done();
            });
        this.requests[0].respond(200, {'Content-Type': 'text/json'}, dataJson);
    });

    it('should put the given data', function (done) {
        const data = {name: 'Bob'};
        const dataJson = JSON.stringify(data);

        HTTPRequest.put('', {data})
            .then((response) => {
                const data = JSON.parse(response.responseText);
                data.should.deep.equal(data);
                done();
            });
        this.requests[0].respond(200, {'Content-Type': 'text/json'}, dataJson);
    });
});
