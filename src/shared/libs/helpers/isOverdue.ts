const isOverdue = (date: string) => {
  return (new Date(Date.now()) > new Date(date))
}

export default isOverdue