describe('rotatingDancer', function () {

  var rotatingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
    rotatingDancer = new makeRotatingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function () {
    expect(rotatingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node rotate', function () {
    sinon.spy(rotatingDancer.$node, 'css');
    rotatingDancer.step();
    expect(rotatingDancer.$node.css.called).to.be.true;
  });

  describe('dance', function () {
    it('should call step at least once per second', function () {
      sinon.spy(rotatingDancer.$node, 'css');
      expect(rotatingDancer.$node.css.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      expect(rotatingDancer.$node.css.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(rotatingDancer.$node.css.callCount).to.be.equal(2);
    });
  });

  describe('lineUp', function () {
    it('should set left coordinate to 0', function () {
      rotatingDancer.lineUp();
      expect(rotatingDancer.$node.position().left).to.equal(0);
    });
  });

  describe('instanceof', function () {
    it('should be an instance of the makeDancer superclass', function () {
      expect(rotatingDancer).to.be.an.instanceof(makeDancer);
    });

    it('should be an instance of the rotatingDancer class', function () {
      expect(rotatingDancer).to.be.an.instanceof(makeRotatingDancer);
    });
  });
});
