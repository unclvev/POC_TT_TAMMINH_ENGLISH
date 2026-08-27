export function required(value, message = 'Trường này bắt buộc') {
  if (value == null || String(value).trim() === '') {
    return message
  }
  return null
}
