// Generated by CoffeeScript 2.0.0-dev
void function () {
  var cubes, list, math, number, opposite, race, square;
  number = 42;
  opposite = true;
  if (opposite)
    number = -42;
  square = function (x) {
    return x * x;
  };
  list = [
    1,
    2,
    3,
    4,
    5
  ];
  math = {
    root: Math.sqrt,
    square: square,
    cube: function (x) {
      return x * square(x);
    }
  };
  race = function (winner, runners) {
    runners = 2 <= arguments.length ? [].slice.call(arguments, 1) : [];
    return print(winner, runners);
  };
  if ('undefined' !== typeof elvis && null != elvis)
    alert('I knew it!');
  cubes = function (accum$) {
    var num;
    for (var i$ = 0, length$ = list.length; i$ < length$; ++i$) {
      num = list[i$];
      accum$.push(math.cube(num));
    }
    return accum$;
  }.call(this, []);
}.call(this);
