function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var i = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${i} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    var firstPerson = line[0];
    line.shift();
    return `Currently serving ${firstPerson}.`;
  }
}

