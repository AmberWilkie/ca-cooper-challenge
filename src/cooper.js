function Person(attr) {
    this.gender = attr.gender;
    this.age = attr.age;
}

Number.prototype.between = function(a, b) {
    var min = Math.min.apply(Math, [a, b]),
        max = Math.max.apply(Math, [a, b]);
    return this >= min && this <= max;
};

Person.prototype.getCooperForWomen = function(distance) {
    var age = this.age;
    var ageGroup = getAgeGroup(age);
    var cooperMessage;

    switch (ageGroup) {
        case '13-14':
            if (distance > 2000) {
                cooperMessage = messages(1);
            } else if (distance.between(1900, 1999)) {
                cooperMessage = messages(2);
            } else if (distance.between(1600, 1899)) {
                cooperMessage = messages(3);
            } else if (distance.between(1500, 1599)) {
                cooperMessage = messages(4);
            } else {
                cooperMessage = messages(5);
            }
        break;
    }
    return cooperMessage;

};

getAgeGroup = function(age) {
  if (age.between(13, 14)){
      return '13-14'
  }  else if (age.between(15, 16)){
      return '15-16'
  } else {
      return 'no age'
  }
};

messages = function(num){
    if(num == 1){
        return 'Excellent';
    } else if (num == 2){
        return 'Above average';
    } else if (num == 3){
        return 'Average';
    } else if (num == 4){
        return 'Below average';
    } else {
        return 'Poor';
    }
};