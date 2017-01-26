'use strict';

const chai = require('chai');
var assert = require('assert');
const LambdaTester = require('lambda-tester');

var isPickleHere = require('../app.js').isPickleHere;

describe('isPickleHere', function () {
    it('says Yes', function () {
        return LambdaTester(isPickleHere)
            .event({})
            .expectResult(function(result) {
                chai.expect(result.body).to.contain("Yes");
            });
    });
});
