/* global console */

console.log('Hello!');


/**
 * Validates given URL (async)
 *
 * @param {string} url URL to validate
 * @return {boolean} Validation result
 */
async function validateUrl(url) {
  console.log('validateUrl');
  if (!validateUrlSyntax(url)) {
    setUrlSyntaxInvalidMessage(false);
    return false;
  }
  setUrlSyntaxInvalidMessage(true);
  let urlExists = false;
  try {
    urlExists = await validateUrlExists();
    setUrlNotFoundMessage(false);
  } catch (err) {
    setUrlNotFoundMessage(true);
    urlExists = false;
  }
  return urlExists;
}

/**
 * Validates URL's syntax
 *
 * @param {string} url URL to validate
 * @return {boolean} Validation result
 */
function validateUrlSyntax() {
  const urlvalid = false;
  console.log('validateUrlSyntax');
  // TODO
  return urlvalid;
}

/**
 * Checks if URL is online
 *
 * @param {string} url URL to validate
 * @return {boolean} Verification result
 */
async function validateUrlExists() {
  const urlExists = false;
  console.log('validateUrlExists');
  // TODO
  return urlExists;
}

/**
 * Sets URL syntax invalid message
 *
 * @param {boolean} showMessage Show or hide flag
 * @return {void}
 */
async function setUrlSyntaxInvalidMessage(showMessage) {
  console.log('setUrlSyntaxInvalidMessage');
  // TODO
}

/**
 * Sets URL "not found" message
 *
 * @param {boolean} showMessage Show or hide flag
 * @return {void}
 */
async function setUrlNotFoundMessage(showMessage) {
  console.log('setUrlNotFoundMessage');
  // TODO
}


/**
 * Shows / hides results page
 *
 * @param {boolean} showPage If shows is true, shows results page
 * @param {string} url Submitted URL
 */
function showResultPage(showPage, url) {
  console.log('showResultPage');
  // TODO
}

/**
 * Stores the URL and shows results pag
 *
 * @return {string} URL from input
 */
function getUrlFromForm() {
  // TODO
  const url = 'todo';
  console.log('getUrlFromForm');
  return url;
}

/**
 * Stores the URL and shows results pag
 *
 * @param {string} url
 */
function addUrl(url) {
  console.log('addUrl');
  storeUrl(url);
  showResultPage(true, url);
}

/**
 * Stores the URL to local storage
 *
 * @param {string} url
 */
function storeUrl(url) {
  console.log('function storeUrl(url)');
  // TODO
}

/**
 * Main function
 *
 * @return {void}
 */
async function main() {
  try {
    const url = getUrlFromForm();
    await validateUrl();
    showResultPage(true, url);
    addUrl(url);
  } catch (err) {
    console.error('Error:', err);
  }
}

main();
