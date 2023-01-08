const tutorials = []

addTutorialRow('Blockly','Khối', [
  require('./a-blockly-01'),
  require('./a-blockly-02'),
  require('./a-blockly-03')
])
/*
addTutorialRow('Rotate','Rẽ', [
  require('./b-rotate-01'),
  require('./b-rotate-02')
])

addTutorialRow('Loops','Vòng lặp', [
  require('./c-loop-01'),
  require('./c-loop-02'),
  require('./c-loop-03'),
  require('./c-loop-04')
])

addTutorialRow('Conditions','Điều kiện', [
  require('./d-conditions-01'),
  require('./d-conditions-02')
])

addTutorialRow('Resources','Tài nguyên', [
  require('./e-resource-01.js'),
  require('./e-resource-02.js')
])

addTutorialRow('Marker','Đánh dấu', [
  require('./f-marker-01.js'),
  require('./f-marker-02.js')
])

addTutorialRow('Scout','Trinh sát', [
  require('./g-scout-01.js')
])
*/
function addTutorialRow (categoryName,categoryNameV, levels) {
  let row = {
    categoryName: categoryName,
    categoryNameV: categoryNameV,
    levels: levels
  }
  tutorials.push(row)
}

module.exports = tutorials
