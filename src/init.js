$(document).ready(function () {
  window.dancers = [];

  $('.addDancerButton').on('click', function (event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      ($("body").height() - 200) * Math.random(),
      ($("body").width() - 200) * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineUpButton').on('click', function () {
    window.dancers.forEach(function (dancer) {
      dancer.lineUp();
    });
  });

  $('.comeHitherButton').on('click', function () {
    window.dancers.forEach((dancer) => {
      var top = dancer.$node.position().top;
      var left = dancer.$node.position().left;
      var position = [top, left];
      var closestDancer = window.dancers.reduce((acc, dancer) => {

        var curr = [dancer.$node.position().top, dancer.$node.position().left];
        var dis1 = Math.sqrt((acc[1] - position[1]) ** 2 + (acc[0] - position[0]) ** 2)
        var dis2 = Math.sqrt((curr[1] - position[1]) ** 2 + (curr[0] - position[0]) ** 2)
        if (dis2 === 0) {
          return acc;
        } else if (dis1 > dis2) {
          return curr;
        } else {
          return acc;
        }
      }, [Infinity, Infinity]);
      var midpoint = [(closestDancer[0] + position[0]) / 2, (closestDancer[1] + position[1]) / 2];

      dancer.setPosition(midpoint[0], midpoint[1]);

    });
  });
});

