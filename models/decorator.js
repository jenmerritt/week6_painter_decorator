const Decorator = function(paintCans){
  this.paintCans = [];
};

Decorator.prototype.addPaintToStock = function (paint) {
  this.paintCans.push(paint);
};

Decorator.prototype.totalLitreOfPaint = function () {
  let total = 0;
  for (let can of this.paintCans) {
    volume = can.volume;
    total += volume;
  }
  return total;
};


module.exports = Decorator;
