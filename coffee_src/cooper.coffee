Person = (attr) ->
  @gender = attr.gender
  @age = attr.age
  return

Person::getCooper = (distance) ->
  if @gender == 'female'
    @getCooperForWomen distance
  else
    @getCooperForMen distance

Person::getCooperForMen = (distance) ->
  age = @age
  ageGroup = getAgeGroup(age)
  cooperMessage = undefined
  switch ageGroup
    when '13-14'
      if distance >= 2700
        cooperMessage = messages(1)
      else if distance.between(2400, 2699)
        cooperMessage = messages(2)
      else if distance.between(2200, 2399)
        cooperMessage = messages(3)
      else if distance.between(2100, 2199)
        cooperMessage = messages(4)
      else
        cooperMessage = messages(5)
    when '15-16'
      if distance >= 2800
        cooperMessage = messages(1)
      else if distance.between(2500, 2799)
        cooperMessage = messages(2)
      else if distance.between(2300, 2499)
        cooperMessage = messages(3)
      else if distance.between(2200, 2299)
        cooperMessage = messages(4)
      else
        cooperMessage = messages(5)
    when '17-19'
      if distance >= 3000
        cooperMessage = messages(1)
      else if distance.between(2700, 2999)
        cooperMessage = messages(2)
      else if distance.between(2500, 2699)
        cooperMessage = messages(3)
      else if distance.between(2300, 2499)
        cooperMessage = messages(4)
      else
        cooperMessage = messages(5)
    when '20-29'
      if distance >= 2800
        cooperMessage = messages(1)
      else if distance.between(2400, 2799)
        cooperMessage = messages(2)
      else if distance.between(2200, 2399)
        cooperMessage = messages(3)
      else if distance.between(1600, 2199)
        cooperMessage = messages(4)
      else
        cooperMessage = messages(5)
    when '30-39'
      if distance >= 2700
        cooperMessage = messages(1)
      else if distance.between(2300, 2699)
        cooperMessage = messages(2)
      else if distance.between(2000, 2299)
        cooperMessage = messages(3)
      else if distance.between(1400, 1999)
        cooperMessage = messages(4)
      else
        cooperMessage = messages(5)
    when '40-49'
      if distance >= 2500
        cooperMessage = messages(1)
      else if distance.between(2100, 2499)
        cooperMessage = messages(2)
      else if distance.between(1700, 2099)
        cooperMessage = messages(3)
      else if distance.between(1400, 1699)
        cooperMessage = messages(4)
      else
        cooperMessage = messages(5)
    when '50+'
      if distance >= 2400
        cooperMessage = messages(1)
      else if distance.between(2000, 2399)
        cooperMessage = messages(2)
      else if distance.between(1600, 1999)
        cooperMessage = messages(3)
      else if distance.between(1300, 1599)
        cooperMessage = messages(4)
      else
        cooperMessage = messages(5)
  cooperMessage

Person::getCooperForWomen = (distance) ->
  age = @age
  ageGroup = getAgeGroup(age)
  cooperMessage = undefined
  switch ageGroup
    when '13-14'
      if distance >= 2000
        cooperMessage = messages(1)
      else if distance.between(1900, 1999)
        cooperMessage = messages(2)
      else if distance.between(1600, 1899)
        cooperMessage = messages(3)
      else if distance.between(1500, 1599)
        cooperMessage = messages(4)
      else
        cooperMessage = messages(5)
    when '15-16'
      if distance >= 2100
        cooperMessage = messages(1)
      else if distance.between(2000, 2099)
        cooperMessage = messages(2)
      else if distance.between(1700, 1999)
        cooperMessage = messages(3)
      else if distance.between(1600, 1699)
        cooperMessage = messages(4)
      else
        cooperMessage = messages(5)
    when '17-19'
      if distance >= 2300
        cooperMessage = messages(1)
      else if distance.between(2100, 2299)
        cooperMessage = messages(2)
      else if distance.between(1800, 2099)
        cooperMessage = messages(3)
      else if distance.between(1700, 1799)
        cooperMessage = messages(4)
      else
        cooperMessage = messages(5)
    when '20-29'
      if distance >= 2700
        cooperMessage = messages(1)
      else if distance.between(2200, 2699)
        cooperMessage = messages(2)
      else if distance.between(1800, 2199)
        cooperMessage = messages(3)
      else if distance.between(1500, 1799)
        cooperMessage = messages(4)
      else
        cooperMessage = messages(5)
    when '30-39'
      if distance >= 2500
        cooperMessage = messages(1)
      else if distance.between(2000, 2499)
        cooperMessage = messages(2)
      else if distance.between(1700, 1999)
        cooperMessage = messages(3)
      else if distance.between(1400, 1699)
        cooperMessage = messages(4)
      else
        cooperMessage = messages(5)
    when '40-49'
      if distance >= 2300
        cooperMessage = messages(1)
      else if distance.between(1900, 2299)
        cooperMessage = messages(2)
      else if distance.between(1500, 1899)
        cooperMessage = messages(3)
      else if distance.between(1200, 1499)
        cooperMessage = messages(4)
      else
        cooperMessage = messages(5)
    when '50+'
      if distance >= 2200
        cooperMessage = messages(1)
      else if distance.between(1700, 2199)
        cooperMessage = messages(2)
      else if distance.between(1400, 1699)
        cooperMessage = messages(3)
      else if distance.between(1100, 1399)
        cooperMessage = messages(4)
      else
        cooperMessage = messages(5)
  cooperMessage

getAgeGroup = (age) ->
  if age.between(13, 14)
    '13-14'
  else if age.between(15, 16)
    '15-16'
  else if age.between(17, 19)
    '17-19'
  else if age.between(20, 29)
    '20-29'
  else if age.between(30, 39)
    '30-39'
  else if age.between(40, 49)
    '40-49'
  else if age >= 50
    '50+'
  else
    'no age'

messages = (num) ->
  if num == 1
    'Excellent'
  else if num == 2
    'Above average'
  else if num == 3
    'Average'
  else if num == 4
    'Below average'
  else
    'Poor'

Number::between = (a, b) ->
  min = Math.min.apply(Math, [
    a
    b
  ])
  max = Math.max.apply(Math, [
    a
    b
  ])
  this >= min and this <= max

# ---
# generated by js2coffee 2.2.0