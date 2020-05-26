module.exports = {
  getComponents(file) {
    return file.match(
      /(?<=<!--\sstart\scolumn\s-->).*?(?=<!--\send\scolumn\s-->)/gs
    );
  },
  getName(component) {
    return component.match(/(?<=<b>).*?(?=<\/b>)/g);
  },
  getDesc(component) {
    return component.match(/(?<=<\/b>).*?(?=<\/p>)/gs);
  },
  getInputs(component) {
    return component.match(/<input/g);
  },
  trim(str) {
    return str
      .replace(/(\r)|(\n)/g, " ")
      .replace(/\s{2,}/g, " ")
      .replace(/^\s*|\s*$/g, "");

    //("use the string .replace() method and regex to first replace carriage returns and new lines with a space, then replace 2 or more spaces with 1 space, then remove spaces from beginning and end");
  },
};
