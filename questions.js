var languagesArrayCreation = function () {

  return ['Html', 'CSS', 'Java', 'PHP' ];
}

var numbersArrayCreation = function () {

  return [ 0, 1, 2, 3, 4, 5 ];}

var ElementReplacement = function (languages) {

  languages[2]='Javascript';
  return languages;
}

var AddElementToLanguagesArray = function (languages) {

  languages.push('Ruby', 'Python')
  return languages; /*Push renvoi au bas du tableau*/
}

var AddElementToNumbersArray = function (numbers) {

  numbers.unshift(-2, -1)
  return numbers;
}

var deleteArrayFirstElement = function (languages) {

  languages.shift()
  return languages;
}

var deleteArrayLastElement = function (languages) {

  languages.pop()
  return languages;
}

var stringToArray = function (socialMediaInString) {

  socialMediaInString = socialMediaInString.split(",");
   return socialMediaInString;
}

var arrayToString = function (languages) {

    languages = languages.join(",");
    return languages;
}

var arraySort = function (socialMedia) {

  socialMedia.sort();
  return socialMedia;
}

var arrayInvert = function (languages){

  languages.reverse();
  return languages;
}
