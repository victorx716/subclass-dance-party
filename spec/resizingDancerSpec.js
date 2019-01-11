describe('resizingDancer', function () {

  var resizingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
    resizingDancer = new makeResizingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function () {
    expect(resizingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node resize', function () {
    sinon.spy(resizingDancer.$node, 'css');
    resizingDancer.step();
    expect(resizingDancer.$node.css.called).to.be.true;
  });

  describe('dance', function () {
    it('should call step at least once per second', function () {
      sinon.spy(resizingDancer.$node, 'css');
      expect(resizingDancer.$node.css.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      expect(resizingDancer.$node.css.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(resizingDancer.$node.css.callCount).to.be.equal(2);
    });
  });

  describe('lineUp', function () {
    it('should set top coordinate to 0', function () {
      resizingDancer.lineUp();
      expect(resizingDancer.$node.position().top).to.equal(0);
    });
  });

  describe('instanceof', function () {
    it('should be an instance of the makeDancer superclass', function () {
      expect(resizingDancer).to.be.an.instanceof(makeDancer);
    });

    it('should be an instance of the resizingDancer class', function () {
      expect(resizingDancer).to.be.an.instanceof(makeResizingDancer);
    });
  })
});
