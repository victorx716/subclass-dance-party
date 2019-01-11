var makeRotatingDancer = function (top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.rotate = true;
  makeDancer.call(this, top, left, timeBetweenSteps, 'rotating');

  this.$node.mouseover(function () {
    var maxTop = $('body').height() - this.$node.height();
    var maxLeft = $('body').width() - this.$node.width();
    var newLeft = Math.floor(Math.random() * maxLeft);
    var newTop = Math.floor(Math.random() * maxTop);
    this.setPosition(newTop, newLeft);
  }.bind(this));
};

makeRotatingDancer.prototype = Object.create(makeDancer.prototype);
makeRotatingDancer.prototype.constructor = makeRotatingDancer;

makeRotatingDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  if (this.rotate) {
    this.$node.css(
      "animation", "rotator " + this.timeBetweenSteps / 1000 + "s 1"
    );
  } else {
    this.$node.css(
      "animation", ""
    );
  }
  this.rotate = !this.rotate;
}