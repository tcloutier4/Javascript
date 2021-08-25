import Point from './Point';

export default function(center, radius) {
  return {
    center,
    radius,
    getCircumference() {
      return 2 * radius * Math.PI;
    },
    getArea() {
      return radius ** 2 * Math.PI;
    },
    includes(Point) {
      // TODO: write your code here

      //checks the distance squared between the given point and the center of the circle
      let distance = ((Point.x - center.x) ** 2  + (Point.y - center.y) ** 2);
      // squares the radius 
      radius *= radius;
      
      // if the distance is smaller than or equal the radius, then the point lies within the circle
      
      if (distance <= radius){
        return true;
      }
      else{
        return false;
      }

      }

    }
  }

