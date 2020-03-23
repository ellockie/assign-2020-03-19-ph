/* global console, document */


/* ======================  Current page management  ======================= */

/**
 * Manages current page getting / setting.
 *
 * @return {{get, set}} - Getter and setter of the current page tracker.
 */
function currentPage() {
  const initialPageNumber = 1;
  this._currentPage = initialPageNumber;
  this.get = () => this._currentPage;
  this.set = (newNumber) => this._currentPage = newNumber;
  return {
    get: this.get,
    set: this.set,
  };
}
const getCurrentPage = currentPage().get;
const setCurrentPage = currentPage().set;

/* ======================  Validators  ======================= */

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
    urlExists = await validateUrlExists(url);
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
async function validateUrlExists(url) {
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
function addBookmark(url) {
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
 * Converts page / relative page string to number
 *
 * @param {string} pageStr - Page / relative page to convert.
 * @return {number} - Absolute page number.
 */
function getPageNumber(pageStr) {
  let page = parseInt(pageStr, 10);
  if (pageStr === 'prev') {
    page = (getCurrentPage() - 1) || 1;
  } else if (pageStr === 'next') {
    // TODO: read from LS
    const maxPages = 3;
    page = Math.min((getCurrentPage() + 1), maxPages);
  }
  return page;
}

/**
 * Renders bookmarks list and paginator
 *
 * @param {string} pageStr - Page / relative page to display.
 */
function displayBookmarks(pageStr) {
  console.log('function displayBookmarks(page)');
  const page = getPageNumber(pageStr);
  setCurrentPage(page);
  console.log('page:', page);
  const bookmarks = loadBookmarks();
  const currentPageBookmarks = getCurrentPageBookmarks(bookmarks, page);
  renderBookmarks(currentPageBookmarks);
  renderPaginator(bookmarks, page);
  addEventListeners('paginator-button', 'click', onPaginatorClick);
}

/**
 * Renders current page bookmarks.
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
 * Renders the paginator.
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

/**
 * Shows / hides results page
 *
 * @param {boolean} shouldShow - If shows is true, shows results page
 * @param {string} url - Submitted URL
 */
function showResultPage(shouldShow, url) {
  console.log('showResultPage, shouldDisplay:', shouldShow);
  // TODO
  const resultPageContainer = document.getElementById('results-page-container');
  console.log('resultPageContainer:', resultPageContainer);
  resultPageContainer.style['visibility'] = shouldShow ? 'visible' : 'hidden';
}

/* =======================  Event listeners  ======================= */

/**
 * Initiate event listeners
 */
function initiateEventListeners() {
  addEventListeners('bookmark-url', 'input', onUrlChange);
  addEventListeners('bookmark-name', 'input', onNameChange);
  addEventListeners('new-bookmark-form', 'submit', onBookmarkSubmit);
  addEventListeners('go-back', 'click', onResultPageClose);
}

/**
 * TODO
 *
 */
function onPaginatorClick() {
  console.log('function myTEMPFunction');
  const attribute = this.getAttribute('data-myattribute');
  console.log(attribute);
  // TODO: remove it from here
  // removeEventListeners('paginator-button', 'click', onPaginatorClick);
  displayBookmarks(attribute);
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
 * React to bookmark's url change
 *
 * @param {Event} event - Change event.
 */
async function onUrlChange(event) {
  console.log('function onUrlChange');
  try {
    const url = getUrlFromForm();
    await validateUrl(url);
  } catch (err) {
    console.error('Error:', err);
  }
}

/**
 * React to bookmark's name change
 *
 * @param {Event} event - Change event.
 */
async function onNameChange(event) {
  console.log('function onUrlChange');
  try {
    const url = getUrlFromForm();
    await validateUrl(url);
  } catch (err) {
    console.error('Error:', err);
  }
}

/**
 * Submit bookmark
 *
 * @param {Event} event - Change event.
 */
async function onBookmarkSubmit(event) {
  event.preventDefault();
  console.log('function onBookmarkSubmit');
  try {
    const url = getUrlFromForm();
    // TODO:
    const name = getUrlFromForm();
    await validateUrl();
    showResultPage(true, url);
    addBookmark({url, name});
  } catch (err) {
    console.error('Error:', err);
  }
}

/**
 * React to bookmark's name change
 *
 * @param {Event} event - Change event.
 */
async function onResultPageClose(event) {
  console.log('function onResultPageClose');
  showResultPage(false, null);
}

/* =======================  Main  ======================= */

/**
 * Main function
 *
 * @return {void}
 */
async function main() {
  initiateEventListeners();
  displayBookmarks('1');
}

main();
