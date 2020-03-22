/* global console, document */

console.log('Hello!');


/**
 * Validates given URL (async)
 *
 * @param {string} url - URL to validate
 * @return {boolean} - Validation result
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
 * @param {string} url - URL to validate
 * @return {boolean} - Validation result
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
 * @param {string} url - URL to validate
 * @return {boolean} - Verification result
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
 * @param {boolean} showMessage - Show or hide flag
 * @return {void}
 */
async function setUrlSyntaxInvalidMessage(showMessage) {
  console.log('setUrlSyntaxInvalidMessage');
  // TODO
}

/**
 * Sets URL "not found" message
 *
 * @param {boolean} showMessage - Show or hide flag
 * @return {void}
 */
async function setUrlNotFoundMessage(showMessage) {
  console.log('setUrlNotFoundMessage');
  // TODO
}


/**
 * Shows / hides results page
 *
 * @param {boolean} showPage - If shows is true, shows results page
 * @param {string} url - Submitted URL
 */
function showResultPage(showPage, url) {
  console.log('showResultPage');
  // TODO
}

/**
 * Stores the URL and shows results pag
 *
 * @return {string} - URL from input
 */
function getUrlFromForm() {
  // TODO
  const url = 'todo';
  console.log('getUrlFromForm');
  return url;
}

/**
 * Stores the Bookmark and shows results page
 *
 * @param {string} url
 */
function addUrl(url) {
  console.log('addUrl');
  storeBookmark(url);
  showResultPage(true, url);
}

/* ======================  Local storage operations  ======================= */

/**
 * Loads Bookmarks from local storage
 *
 * @return {Object[]} - List of loaded bookmarks.
 */
function loadBookmarks() {
  console.log('function storeUrl(bookmark)');
  // TODO
  return [];
}

/**
 * Stores the Bookmark to local storage
 *
 * @param {Object} bookmark - The bookmark to store.
 * @param {string} bookmark.name - Bookmark's name.
 * @param {string} bookmark.url - Bbookmark's url.
 */
function storeBookmark(bookmark) {
  console.log('function storeUrl(bookmark)');
  // TODO
}

/**
 * Stores the Bookmark to local storage
 *
 * @param {Object[]} bookmarks - The bookmarks to render.
 * @param {string} bookmark.name - Bookmark's name.
 * @param {string} bookmark.url - Bbookmark's url.
 * @param {number} page - Current page.
 */
function getCurrentPageBookmarks(bookmarks, page) {
  console.log('function getCurrentPageBookmarks(bookmarks, page)');
  // TODO
}

/* =======================  Bookmarks list rendering  ======================= */

/**
 * Renders bookmarks list and paginator
 *
 * @param {string} page - Page / relative page to display.
 */
function displayBookmarks(page) {
  console.log('function displayBookmarks(page)');
  const pageNumber = parseInt(page, 10);
  if (pageNumber) {
    displayBookmarks(pageNumber);
  } else if (page === 'prev') {
    // TODO:
    displayBookmarks('prev');
  } else if (page === 'next') {
    // TODO:
    displayBookmarks('next');
  }
  const bookmarks = loadBookmarks(page);
  const currentPageBookmarks = getCurrentPageBookmarks(bookmarks, page);
  renderBookmarks(currentPageBookmarks);
  renderPaginator(bookmarks, page);
  addEventListeners('paginator-button', 'click', myTEMPFunction);
}

/**
 * Renders Bookmarks
 *
 * @param {Object[]} bookmarks - The bookmarks to render.
 * @param {string} bookmarks[].name - The name of a bookmark.
 * @param {string} bookmarks[].url - Bookmark's url.
 */
function renderBookmarks(bookmarks) {
  console.log('function renderBookmarks(bookmarks)');
  // TODO
}

/**
 * Renders the paginator
 *
 * @param {Object[]} bookmarks - All stored bookmarks.
 * @param {string} bookmark.name - Bookmark's name.
 * @param {string} bookmark.url - Bbookmark's url.
 * @param {number} page - Current page.
 */
function renderPaginator(bookmarks, page) {
  console.log('function renderPaginator(bookmarks, page)');
  // TODO
}

/* =======================  Event listeners  ======================= */

/**
 * TODO
 *
 */
function myTEMPFunction() {
  console.log('function myTEMPFunction');
  const attribute = this.getAttribute('data-myattribute');
  console.log(attribute);
  removeEventListeners('paginator-button', 'click', myTEMPFunction);
  // displayBookmarks(attribute);
}


/**
 * Sets event listeners of a given type to elements of a given CSS class.
 *
 * @param {string} className - Target CSS class name.
 * @param {string} eventType - Event type to add.
 * @param {function} eventHandlerFunction - Event handler function to add.
 */
function addEventListeners(className, eventType, eventHandlerFunction) {
  console.log('function addEventListeners');
  const elements = document.getElementsByClassName(className);
  Array.from(elements).forEach((element) => {
    element.addEventListener(eventType, eventHandlerFunction, false);
  });
  // TODO: remove those listeners when not needed
}


/**
 * Removes event listeners of a given type from elements of a given CSS class.
 *
 * @param {string} className - Target CSS class name.
 * @param {string} eventType - Event type to remove.
 * @param {function} eventHandlerFunction - Event handler function to remove.
 */
function removeEventListeners(className, eventType, eventHandlerFunction) {
  console.log('function removeEventListeners');
  const elements = document.getElementsByClassName(className);
  Array.from(elements).forEach((element) => {
    element.removeEventListener(eventType, eventHandlerFunction);
  });
  // TODO: remove those listeners when not needed
}

/**
 * react to user's URL update
 *
 * @param {*} event
 * @return {void}
 */
async function onUrlChange(event) {
  try {
    const url = getUrlFromForm();
    await validateUrl();
    showResultPage(true, url);
    addUrl(url);
  } catch (err) {
    console.error('Error:', err);
  }
}

/**
 * Main function
 *
 * @return {void}
 */
async function main() {
  displayBookmarks('0');
}

main();
