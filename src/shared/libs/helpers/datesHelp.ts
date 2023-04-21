const getNowDate = () => {
  return new Date(Date.now() + (1000 * 60 * (-(new Date()).getTimezoneOffset()))).toISOString().replace('T', ' ').replace('Z', '');
}

export const getInputDate = (date: string) => {
  return new Date(date).toLocaleString('sv').replace(' ', 'T').substring(0, 16)
}

export const getTextDate = (date: string) => {
  return new Date(date).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })
}

export default getNowDate