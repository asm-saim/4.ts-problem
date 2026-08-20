function getTicketPrice(age: number): number {
  if (age < 5) {
    return 0;
  } else if (age >= 5 && age <= 12) {
    return 100;
  } else if (age >= 13 && age <= 59) {
    return 200;
  }
  return 120;
}
console.log(getTicketPrice(29))

// Age    Ticket Price
// Below5   0
// 5–12     100
// 13–59    200
// 60 or above 120
