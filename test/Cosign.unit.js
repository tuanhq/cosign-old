var assert = require('assert');
var should = require('should');
var sinon = require('sinon');
var Cosign = require('../bin/Cosign').class();

describe('Cosign', function(){
  describe('#Cosign', function(){
    it('should create a new cosign with no error', function() {
      var cosign = new Cosign(["","","dump"]);
      cosign.program.args[0].should.equal("dump");
    });
  });

  describe('main', function() {
    it('should init the database file', function() {
      var fs = {};
      fs.writeFile = sinon.spy();
      var Cosign2 = require('../bin/Cosign').createClass({fs: fs});
      var cosign = new Cosign2(["","","init"]);
      cosign.main();
      cosign.program.args[0].should.equal("init");
      fs.writeFile.calledOnce.should.equal(true);
    });
  });
});
