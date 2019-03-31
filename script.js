function getCheckboxes() {
  const nl = document.querySelectorAll('input[type=checkbox]')
  return Array.prototype.slice.call(nl);
}

function check(checkboxes, check) {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = check 
  })
}

var checkboxes = getCheckboxes()

var checkedCheckboxes = checkboxes.filter(c => c.checked)

check(checkboxes, checkboxes.length != checkedCheckboxes.length)
