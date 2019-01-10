var makeRotatingDancer = function (top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  makeDancer.call(this, top, left, timeBetweenSteps, 'rotating');
  this.$node.mouseover(function () {
    this.setPosition(Math.floor(Math.random() * this.top), Math.floor(Math.random() * this.left));
  }.bind(this));
};

makeRotatingDancer.prototype = Object.create(makeDancer.prototype);
makeRotatingDancer.prototype.constructor = makeRotatingDancer;

makeRotatingDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.css(
    "animation", "rotator " + this.timeBetweenSteps / 1000 + "s infinite"
  );
}