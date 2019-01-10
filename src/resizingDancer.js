var makeResizingDancer = function (top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  makeDancer.call(this, top, left, timeBetweenSteps, 'resizing');
  // this.$node = $('<span class="resizer"></span>');
  // this.setPosition(top, left);
};

makeResizingDancer.prototype = Object.create(makeDancer.prototype);
makeResizingDancer.prototype.constructor = makeResizingDancer;

makeResizingDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  // this.$node.toggle();
}