'use strict';

const chai = require('chai');
const assert = require('assert');
const LambdaTester = require('lambda-tester');

const isPickleHere = require('../src/app.js').isPickleHere;

describe('isPickleHere', function () {
    it('says Yes', function () {
        return LambdaTester(isPickleHere)
            .event({})
            .expectResult(function(result) {
                chai.expect(result.body).to.contain("Yes");
            });
    });
});
