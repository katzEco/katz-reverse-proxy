function Month(no) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  return months[no]
}

const newDate = new Date()
const DateLine = `${Month(
  newDate.getMonth()
)} ${newDate.getDate()} ${newDate.getFullYear()} | ${
  String(newDate.getHours()).length < 2
    ? `0${newDate.getHours()}`
    : newDate.getHours()
}:${
  String(newDate.getMinutes()).length < 2
    ? `0${newDate.getMinutes()}`
    : newDate.getMinutes()
}`

module.exports = DateLine
