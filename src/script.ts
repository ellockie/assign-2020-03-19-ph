/* global console, document, window */

const PAGINATOR_BUTTON_CLASS = 'paginator-button';

interface Bookmark {
  url: string;
  name: string;
}
/* ======================  Current page management  ======================= */

/**
 * Manages current page getting / setting.
 *
 * @return {{get, set}} - Getter and setter of the current page tracker.
 */
class CurrentPage {
  private static _currentPage: number;
  static get = () => CurrentPage._currentPage;
  static set = (newNumber: number) => CurrentPage._currentPage = newNumber;
}
const getCurrentPage = CurrentPage.get;
const setCurrentPage = CurrentPage.set;

const paginator = document.getElementById("paginator") as Element;

/* ======================  Validators  ======================= */

/**
 * Validates given URL (async)
 *
 * @param {string} url - URL to validate
 * @return {boolean} - Validation result
 */
async function validateUrl(url: string) {
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
 * Validates given URL (async)
 *
 * @param {string} name - Bookmark name to validate
 * @return {boolean} - Validation result
 */
async function validateName(name: string) {
  console.log('validateName');
  // TODO
  return false;
}

/**
 * Validates URL's syntax
 *
 * @param {string} url - URL to validate
 * @return {boolean} - Validation result
 */
function validateUrlSyntax(url: string) {
  const urlvalid = false;
  console.log('validateUrlSyntax, url:', url);
  // TODO
  return urlvalid;
}

/**
 * Checks if URL is online
 *
 * @param {string} url - URL to validate
 * @return {boolean} - Verification result
 */
async function validateUrlExists(url: string) {
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
async function setUrlSyntaxInvalidMessage(showMessage: boolean) {
  console.log('setUrlSyntaxInvalidMessage, showMessage:', showMessage);
  // TODO
}

/**
 * Sets URL "not found" message
 *
 * @param {boolean} showMessage - Show or hide flag
 * @return {void}
 */
async function setUrlNotFoundMessage(showMessage: boolean) {
  console.log('setUrlNotFoundMessage');
  // TODO
}

/**
 * Retrievs bookmark URL
 *
 * @return {string} - Bookmark URL retrieved from input.
 */
function getUrlFromForm() {
  // TODO
  const url = 'bookmark name';
  console.log('getUrlFromForm');
  return url;
}

/**
 * Retrievs bookmark name
 *
 * @return {string} - Bookmark name rerieved from input.
 */
function getNameFromForm() {
  // TODO
  const name = 'bookmark name';
  console.log('getUrlFromForm');
  return name;
}

/**
 * Stores the Bookmark and shows results page
 *
 * @param {string} bookmark - The bookmark to add to the list.
 */
function addBookmark(bookmark: Bookmark) {
  console.log('addBookmark:', bookmark);
  appendBookmark(bookmark);
  showResultPage(true, bookmark);
}

/* ======================  Local storage operations  ======================= */

/**
 * Loads Bookmarks from local storage
 *
 * @return {Object[]} - List of loaded bookmarks.
 */
function loadBookmarks() {
  const bookmarksString: string|null = window.localStorage.getItem('bookmarks');
  return bookmarksString
    ? JSON.parse(bookmarksString) as Bookmark[]
    : [];
}

/**
 * Stores the Bookmark to the local storage, by appending it to existing list
 *
 * @param {Object} bookmark - The bookmark to store.
 * @param {string} bookmark.name - Bookmark's name.
 * @param {string} bookmark.url - Bbookmark's url.
 */
function appendBookmark(bookmark: Bookmark) {
  console.log('function storeBookmar, bookmark:', bookmark);
  // TODO
  const bookmarks = loadBookmarks();
  window.localStorage.setItem(
      'bookmarks',
      JSON.stringify([...bookmarks, bookmark]),
  );
  console.log(loadBookmarks());
}

/**
 * Stores the Bookmark to local storage
 *
 * @param {Object[]} bookmarks - The bookmarks to render.
 * @param {string} bookmark.name - Bookmark's name.
 * @param {string} bookmark.url - Bbookmark's url.
 * @param {number} page - Current page.
 */
function getCurrentPageBookmarks(bookmarks: Bookmark[], page: number): Bookmark[] {
  console.log('function getCurrentPageBookmarks(bookmarks, page)');
  // TODO
  return [];
}

/* =======================  Bookmarks list rendering  ======================= */

/**
 * Converts page / relative page string to number
 *
 * @param {string} pageStr - Page / relative page to convert.
 * @return {number} - Absolute page number.
 */
function getPageNumber(pageStr: string): number {
  let page = +pageStr;
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
function displayBookmarks(pageStr: string) {
  console.log('function displayBookmarks(page)');
  const page = getPageNumber(pageStr);
  setCurrentPage(page);
  console.log('page:', page);
  const bookmarks = loadBookmarks();
  const currentPageBookmarks: Bookmark[] = getCurrentPageBookmarks(bookmarks, page);
  renderBookmarks(currentPageBookmarks);
  renderPaginator(bookmarks, page);
}

/**
 * Renders current page bookmarks.
 *
 * @param {Object[]} bookmarks - The bookmarks to render.
 * @param {string} bookmarks[].name - The name of a bookmark.
 * @param {string} bookmarks[].url - Bookmark's url.
 */
function renderBookmarks(bookmarks: Bookmark[]) {
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
function renderPaginator(bookmarks: Bookmark[], page: number) {
  console.log('function renderPaginator(bookmarks, page)', page);
  // remove those listeners when not needed
  removeEventListeners('paginator-button', 'click', onPaginatorClick);
  // TODO

  paginator.innerHTML = '';
  const maxPage = 12;
  setCurrentPage(+page);
  const currentPage: number = getCurrentPage();

  const links: any[] = [{
    display: "<<",
    page: currentPage - 1,
    class: "disabled"
  }];
  console.log("currentPage:", currentPage);
    links.push({
      display: "" + (currentPage - 1),
      page: currentPage - 1,
      class: "disabled"});
  // }
  links.push({
    display: "" + currentPage,
    page: currentPage,
    class: ""
  });
  if (currentPage < maxPage) {
    links.push({
      display: "" + (currentPage + 1),
      page: currentPage + 1,
      class: "disabled"});
  }
  links.push({display: ">>", page: currentPage + 1, class: ""});
  // TODO: add class,
  links.forEach((link) => paginator.appendChild(getPaginatorElement(link)));
  addEventListeners2('paginator-button', 'click', onPaginatorClick);
}

function getPaginatorElement(linksObj: any): Element {
  const li = document.createElement("button");
  li.innerHTML = linksObj.display;
  li.className = `${PAGINATOR_BUTTON_CLASS} ${linksObj.class}`;
  li.dataset.navString = "" + linksObj.page;
  return li;
}

/**
 * Shows / hides results page
 *
 * @param {boolean} shouldShow - If shows is true, shows results page
 * @param {string} url - Submitted URL
 */
function showResultPage(shouldShow: boolean, bookmark: Bookmark|null) {
  console.log('showResultPage, shouldDisplay:', shouldShow, "bookmark:", bookmark);
  // TODO
  const resultPageContainer = document.getElementById('results-page-container');
  console.log('resultPageContainer:', resultPageContainer);
  if (resultPageContainer) {
    resultPageContainer.style['visibility'] = shouldShow ? 'visible' : 'hidden';
  }
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
function onPaginatorClick(paginatorElem: any): void {// tslint:disable-line: no-any
  console.log('function onPaginatorClick:', paginatorElem.target.dataset["navString"]);
  const attribute: string = paginatorElem.target.dataset["navString"] || "";
  console.log(attribute);
  displayBookmarks(attribute);
}


/**
 * Sets event listeners of a given type to elements of a given CSS class.
 *
 * @param {string} className - Target CSS class name.
 * @param {string} eventType - Event type to add.
 * @param {function} eventHandlerFunction - Event handler function to add.
 */
function addEventListeners(
  className: string,
  eventType: string,
  eventHandlerFunction: EventListenerOrEventListenerObject
  ): void {
  console.log('function addEventListeners');
  const elements = document.getElementsByClassName(className);
  Array.from(elements).forEach((element) => {
    element.addEventListener(eventType, eventHandlerFunction, false);
  });
}

/**
 * Removes event listeners of a given type from elements of a given CSS class.
 *
 * @param {string} className - Target CSS class name.
 * @param {string} eventType - Event type to remove.
 * @param {function} eventHandlerFunction - Event handler function to remove.
 */
function removeEventListeners(
  className: string,
  eventType: string,
  eventHandlerFunction: EventListenerOrEventListenerObject
  ): void {
  console.log('function removeEventListeners');
  const elements = document.getElementsByClassName(className);
  Array.from(elements).forEach((element) => {
    element.removeEventListener(eventType, eventHandlerFunction);
  });
}

/**
 * Sets event listeners of a given type to elements of a given CSS class.
 *
 * @param {string} className - Target CSS class name.
 * @param {string} eventType - Event type to add.
 * @param {function} eventHandlerFunction - Event handler function to add.
 */
function addEventListeners2(
  className: string,
  eventType: string,
  eventHandlerFunction: Function
  ): void {
  console.log('function addEventListeners2');
  const elements = document.getElementsByClassName(className);
  Array.from(elements).forEach((element) => {
    element.addEventListener(eventType, element => eventHandlerFunction(element), false);
  });
  // TODO: remove those listeners when not needed
}

/**
 * React to bookmark's url change
 *
 * @param {Event} event - Change event.
 */
async function onUrlChange(event: Event) {
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
async function onNameChange(event: Event) {
  console.log('function onUrlChange');
  try {
    const url = getNameFromForm();
    await validateName(url);
  } catch (err) {
    console.error('Error:', err);
  }
}

/**
 * Submit bookmark
 *
 * @param {Event} event - Change event.
 */
function onBookmarkSubmit(event: Event): void{
  event.preventDefault();
  console.log('function onBookmarkSubmit');
  submitBookmark();
}

async function submitBookmark(): Promise<void> {
  try {
    const url = getUrlFromForm();
    const name = getNameFromForm();
    await validateUrl(url);
    showResultPage(true, {url, name});
    addBookmark({url, name});
  } catch (err) {
    console.error('Error:', err);
  }
}

/**
 * Edit bookmark event handler
 *
 * @param {number} event - ID of the bookmark to edit.
 */
function onBookmarkEdit(event: Event): void{
  event.preventDefault();
  console.log('function onBookmarkEdit');
  // TODO
  const bookmarkId = 3;
  editBookmark(bookmarkId);
}

async function updateBookmark(): Promise<void> {
  // DODO: updateBookmark()
}

/**
 * Edit bookmark
 *
 * @param {number} bookmarkId - ID of the bookmark to edit.
 */
function editBookmark(bookmarkId: number): void{
  console.log('function onBookmarkEdit, bookmarkId:', bookmarkId);
  // TODO, MAYBE?
  showEditConfirmationDialog();
  updateBookmark();
}

function showEditConfirmationDialog() {
  console.log("Are you surre??");
}

/**
 * Edit bookmark
 *
 * @param {number} event - ID of the bookmark to edit.
 */
function onBookmarkDelete(event: Event): void{
  event.preventDefault();
  console.log('function onBookmarkDelete');
  // TODO
  showDeleteConfirmationDialog();
  const bookmarkId = "3";
  deleteBookmark(bookmarkId);
}

function deleteBookmark(bookmarkId: string) {
  // TODO:
  console.log("deleteBookmark:",)
}

function showDeleteConfirmationDialog() {
  console.log("Are you surre??");
}

/**
 * React to bookmark's name change
 *
 * @param {Event} event - Change event.
 */
async function onResultPageClose(event: Event) {
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
