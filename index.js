// Your code here
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
      firstName,
      familyName,
      title,
      payPerHour,
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  function createEmployeeRecords(employeeArray) {
    return employeeArray.map(createEmployeeRecord);
  }
  function createTimeInEvent(employeeRecord, dateTime) {
    let [date, hour] = dateTime.split(' ');
    hour = parseInt(hour, 10);
    employeeRecord.timeInEvents.push({ type: "TimeIn", date, hour });
    return employeeRecord;
  }
  function createTimeOutEvent(employeeRecord, dateTime) {
    let [date, hour] = dateTime.split(' ');
    hour = parseInt(hour, 10);
    employeeRecord.timeOutEvents.push({ type: "TimeOut", date, hour });
    return employeeRecord;
  }
  function hoursWorkedOnDate(employeeRecord, date) {
    let timeInEvent = employeeRecord.timeInEvents.find(e => e.date === date);
    let timeOutEvent = employeeRecord.timeOutEvents.find(e => e.date === date);
    return (timeOutEvent.hour - timeInEvent.hour) / 100;
  }
  function wagesEarnedOnDate(employeeRecord, date) {
    let hoursWorked = hoursWorkedOnDate(employeeRecord, date);
    return hoursWorked * employeeRecord.payPerHour;
  }
  
  function allWagesFor(employeeRecord) {
    let dates = employeeRecord.timeInEvents.map(e => e.date);
    return dates.reduce((total, date) => total + wagesEarnedOnDate(employeeRecord, date), 0);
  }
  function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((total, record) => total + allWagesFor(record), 0);
  }
       