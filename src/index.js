  var headding = React.createElement('h1', {}, 'Help Queue T');
  var ticketLocation = React.crateElements('h3', {}, '3a');
  var ticketNames = React.createElement('h3', {}, 'Thato and Haley')
  var ticketIssue = React.createElement('h3', {}, "Firebase won't save record");
  var app = React.createElement('div', {}, heading, ticketLocation, ticketTimes, ticketIssues);

  ReactDOM.render(
    app,
    document.getElementById('react-app-root')
  );
}

// function liveTime() {
  // var clock = React.createElement('h2', {}, `It is ${new Date().toLocaleTimeString()}`);
// setInterval(liveTime, 1000);
