
class LogSender {
    constructor(reportportal) {
      this.reportportal = reportportal;
    }
  
    sendLog(test, level, message) {
      this.reportportal.sendLogToTest(test, {
        level: level, 
        message: message
      });
    }
  }


  module.exports = new LogSender();