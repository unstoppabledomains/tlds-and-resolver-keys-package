import fetch from "node-fetch";
import * as fs from "fs";
import * as core from "@actions/core";
import {
  udTlds as currentUdTlds,
  udResolverKeys as currentUdResolverKeys,
} from "../index.js";

function indexFileTemplate(tlds, resolverKeys) {
  return `const udTlds = ${tlds};

const udResolverKeys = ${resolverKeys};

exports.udResolverKeys = udResolverKeys;
exports.udTlds = udTlds;`;
}

/**
 * Base object that will be written to file
 * udTlds - Array that will contain all Unstoppabble DOmains endings
 * udResolver Keys - Object containing 3 items:
 *      singleAddressList - array of token symbols supported by UD that resolve to a single type of address, ERC20 or BEP20, etc.
 *      multiAddressList - array of token symbols supported by UD that resolve to multiple type of address, ERC20 and BEP20, etc.
 *      multiAddressMapping - an bject containing an array of multi address tokens mapped to each of the address they can have an address for
 * responseMetaData - an object containing various pieces about the tokens
 *      latest_changes - an object containing 2 arrays with the latest changes to the singleAddressList and multiAddressList - sorted into an ADDED ategory and a REMOVED category
 *      others are self explanatory
 */
const jsonData = {
  udTlds: [],
  udResolverKeys: {
    singleAddressList: [],
    multiAddressList: [],
    multiAddressMapping: {},
  },
  responseMetaData: {
    latest_changes: {},
    number_of_tlds: 0,
    number_of_single_address_tokens: 0,
    number_of_multi_address_tokens: 0,
  },
};

function writeJsonToFile(jsonObject) {
  const stringifiedUdTlds = JSON.stringify(jsonObject.udTlds, null, "  ");
  const stringifiedUdResolverKeys = JSON.stringify(
    jsonObject.udResolverKeys,
    null,
    "\t"
  );
  fs.writeFile(
    "index.js",
    indexFileTemplate(stringifiedUdTlds, stringifiedUdResolverKeys),
    (err) => {
      if (err) console.log(err);
      else {
        console.log("File written successfully\n");
      }
    }
  );
}

/** Compares the new jsonData object with the one saved from file
 * If there are any changes it will mark the changelog with them
 * @param {Array} oldSingleList - array containing the current single address tokens
 * @param {Array} newSingleList - array containing the single address tokens pulled via API
 * @param {Array} oldMultiList - array containing the current multi address tokens
 * @param {Array} newMultiList - array containing the multi address tokens pulled via API
 * @param {Array} oldTldList - array containing the current tld list
 * @param {Array} newTldList - array containing the tld list pulled via API
 * @returns {Object} changelog - an object containing a needs to update flag as well as any of the changes detected
 */
function checkSavedJson(
  oldSingleList,
  newSingleList,
  oldMultiList,
  newMultiList,
  oldTldList,
  newTldList
) {
  const changelog = { "Need to Update": false };
  const singleDiff = tokenListDifference(oldSingleList, newSingleList);
  const multiDiff = tokenListDifference(oldMultiList, newMultiList);
  const tldDiff = tokenListDifference(oldTldList, newTldList);
  if (
    multiDiff["Removed"].length > 0 ||
    singleDiff["Removed"].length > 0 ||
    tldDiff["Removed"].length > 0 ||
    multiDiff["Added"].length > 0 ||
    singleDiff["Added"].length > 0 ||
    tldDiff["Added"].length > 0
  ) {
    changelog["Need to Update"] = true;
    changelog["Single Differences"] = singleDiff;
    changelog["Multi Differences"] = multiDiff;
    changelog["TLD Differences"] = tldDiff;
  }

  return changelog;
}

/** Uses a symetrical compare to detect changes between two token lists and sorts them into an ADDED and REMOVED section
 * @param {Array} currentTokenList - array containing current tokens
 * @param {Array} newTokenList - array containing tokens pulled via API
 * @param {Object} detectedChanges - an object to contain results of the symetrical compare sorted into ADDED and REMOVED
 */
function tokenListDifference(currentTokenList, newTokenList) {
  const detectedChanges = {};
  detectedChanges["Removed"] = currentTokenList.filter(
    (x) => !newTokenList.includes(x)
  );
  detectedChanges["Added"] = newTokenList.filter(
    (x) => !currentTokenList.includes(x)
  );
  return detectedChanges;
}

/** Retrieves API data for supported LDs, Tokens, and Resolver Keys */
async function getApiResults() {
  const resolverKeyApiResult = await (
    await fetch("https://unstoppabledomains.com/api/uns-resolver-keys")
  ).json();
  const tldApiResult = await (
    await fetch("https://api.unstoppabledomains.com/resolve/supported_tlds")
  ).json();
  return { tldApiResult, resolverKeyApiResult };
}

/** Sorts tokens by single vs multi address and maps multi tokens to their address types
 * @param {Array} resolverKeyApiKeys - Object.keys array of api result
 * @return {Object} sortedTokens - an object containing arrays of single and multi address tokens and a mappings object with each of their address types
 */
function sortResolverKeys(resolverKeyApiKeys) {
  const sortedTokens = {
    single: [],
    multi: [],
    mappings: {},
  };
  resolverKeyApiKeys.forEach((crypto) => {
    if (crypto.includes("crypto")) {
      if (crypto.includes("version")) {
        const tokenSymbol = crypto.split(".")[1];
        const tokenProtocol = crypto.split(".")[3];
        if (!sortedTokens.multi.includes(tokenSymbol)) {
          sortedTokens.multi.push(tokenSymbol);
        }
        if (!sortedTokens.mappings[tokenSymbol]) {
          sortedTokens.mappings[tokenSymbol] = [];
          sortedTokens.mappings[tokenSymbol].push(tokenProtocol);
        } else if (sortedTokens.mappings[tokenSymbol]) {
          if (!sortedTokens.mappings[tokenSymbol].includes(tokenProtocol)) {
            sortedTokens.mappings[tokenSymbol].push(tokenProtocol);
          }
        }
      } else {
        const tokenSymbol = crypto.split(".")[1];
        sortedTokens.single.push(tokenSymbol);
      }
    }
  });
  // Check if token is in both single and multi lists. Keep in multi list
  sortedTokens.single.forEach((tokenSymbol) => {
    if (sortedTokens.multi.includes(tokenSymbol)) {
      sortedTokens.single = sortedTokens.single.filter(
        (token) => token !== tokenSymbol
      );
    }
  });
  return sortedTokens;
}

function setTldData(tldData) {
  jsonData.udTlds = tldData;
  jsonData.responseMetaData.number_of_tlds = tldData.length;
}

function setTokenData(tokenData) {
  jsonData.udResolverKeys.singleAddressList = tokenData.single;
  jsonData.udResolverKeys.multiAddressList = tokenData.multi;
  jsonData.udResolverKeys.multiAddressMapping = tokenData.mappings;
  jsonData.responseMetaData.number_of_single_address_tokens =
    tokenData.single.length;
  jsonData.responseMetaData.number_of_multi_address_tokens =
    tokenData.multi.length;
}

async function mainExecutable() {
  const apiResults = await getApiResults();
  setTldData(apiResults.tldApiResult.tlds);
  const sortedApiTokens = sortResolverKeys(
    Object.keys(apiResults.resolverKeyApiResult.keys)
  );
  setTokenData(sortedApiTokens);
  // compares current vs new for changes - writes to file if there are chanegs detected
  const checkedJson = checkSavedJson(
    currentUdResolverKeys.singleAddressList,
    sortedApiTokens.single,
    currentUdResolverKeys.multiAddressList,
    sortedApiTokens.multi,
    currentUdTlds,
    apiResults.tldApiResult.tlds
  );
  if (checkedJson["Need to Update"] === true) {
    jsonData.responseMetaData.latest_changes = checkedJson;
    writeJsonToFile(jsonData);
    core.setOutput("publish", "true");
  } else {
    console.log("Current data is up-to-date");
    core.setOutput("publish", "false");
  }
}

mainExecutable();
