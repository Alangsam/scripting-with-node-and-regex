const fs = require("fs");
const { getComponents, getName, getDesc, getInputs, trim } = require("./regex");

const basicFile = String(fs.readFileSync("html-pages/basic-functions.html"));
const intermediateFile = String(
  fs.readFileSync("html-pages/intermediate-functions.html")
);
const functionalFile = String(
  fs.readFileSync("html-pages/functional-functions.html")
);
const algorithmFile = String(
  fs.readFileSync("html-pages/algorithm-functions.html")
);
const regexFile = String(fs.readFileSync("html-pages/regex-functions.html"));

const gettingComponents = getComponents(basicFile);
const getIntermediateComponents = getComponents(intermediateFile);
const getFunctionalComponents = getComponents(functionalFile);
const getAlgorithmComponents = getComponents(algorithmFile);
const getRegexComponents = getComponents(regexFile);

const componentObjectsBasic = gettingComponents.map((component, index) => {
  return {
    name: trim(String(getName(component))),
    desc: trim(String(getDesc(component))),
    inputs: getInputs(component).length,
    type: "basic", // String
    typeNum: 100, // Number
    isFavorite: false, // Boolean
    order: 100 + index,
  };
});

const componentObjectsIntermediate = getIntermediateComponents.map(
  (component, index) => {
    return {
      name: trim(String(getName(component))),
      desc: trim(String(getDesc(component))),
      inputs: getInputs(component).length,
      type: "intermediate", // String
      typeNum: 100, // Number
      isFavorite: false, // Boolean
      order: 200 + index,
    };
  }
);

const componentObjectsFunctional = getFunctionalComponents.map(
  (component, index) => {
    return {
      name: trim(String(getName(component))),
      desc: trim(String(getDesc(component))),
      inputs: getInputs(component).length,
      type: "functional", // String
      typeNum: 100, // Number
      isFavorite: false, // Boolean
      order: 300 + index,
    };
  }
);

const componentObjectsAlgorithm = getAlgorithmComponents.map(
  (component, index) => {
    return {
      name: trim(String(getName(component))),
      desc: trim(String(getDesc(component))),
      inputs: getInputs(component).length,
      type: "algorithm", // String
      typeNum: 100, // Number
      isFavorite: false, // Boolean
      order: 400 + index,
    };
  }
);
const componentObjectsRegex = getRegexComponents.map((component, index) => {
  return {
    name: trim(String(getName(component))),
    desc: trim(String(getDesc(component))),
    inputs: getInputs(component).length,
    type: "regex", // String
    typeNum: 100, // Number
    isFavorite: false, // Boolean
    order: 500 + index,
  };
});

const targetFile = "./dist/dist.json";
const newBasic = componentObjectsBasic.concat(componentObjectsIntermediate);
const newAlgorithm = componentObjectsFunctional.concat(
  componentObjectsAlgorithm
);
const newBaseAndAlgo = newBasic.concat(newAlgorithm);
const allFiveCombined = newBaseAndAlgo.concat(componentObjectsRegex);

fs.writeFileSync(targetFile, JSON.stringify(allFiveCombined));
//fs.appendFileSync(targetFile, JSON.stringify(componentObjectsIntermediate));
//fs.appendFileSync(targetFile, JSON.stringify(componentObjectsFunctional));
//fs.appendFileSync(targetFile, JSON.stringify(componentObjectsAlgorithm));
//fs.appendFileSync(targetFile, JSON.stringify(componentObjectsRegex));
