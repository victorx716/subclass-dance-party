var makeResizingDancer = function (top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  makeDancer.call(this, top, left, timeBetweenSteps, 'resizing');
  this.grow = true;
};

makeResizingDancer.prototype = Object.create(makeDancer.prototype);
makeResizingDancer.prototype.constructor = makeResizingDancer;

makeResizingDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  var scale;
  if (this.grow) {
    scale = 1.5;
  } else {
    scale = 0.6666;
  }

  var styleSettings = {
    '-webkit-transform': 'scale(' + scale + ')',
    '-ms-transform': 'scale(' + scale + ')',
    'transform': 'scale(' + scale + ')'
  };

  this.$node.css(styleSettings);

  this.grow = !this.grow;
}