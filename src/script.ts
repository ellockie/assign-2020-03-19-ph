/* global console, document, window */

const PAGINATOR_BUTTON_CLASS = 'paginator-button';
const PAGE_SIZE = 2;

interface Bookmark {
  url: string;
  name: string;
}

interface PaginatorItem {
    display: string;
    page: number;
    class: string;
}

/* ======================  Current page management  ======================= */

/**
 * Manages current page getting / setting.
 *
 * @return {{getCurrentPage, setCurrentPage, setLastPage, getLastPage}} - Getter and setter of the current page tracker.
 */
class Counters {
  private static _updateLastPage = () => {
    return Counters._lastPage = Math.ceil(Counters._bookmarksCount / PAGE_SIZE);
  }
  private static _currentPage: number;
  private static _bookmarksCount: number = loadBookmarks().length;
  private static _lastPage: number = Counters._updateLastPage();
  static getCurrentPage = () => Counters._currentPage;
  static setCurrentPage = (newNumber: number) => Counters._currentPage = newNumber;
  static getLastPage = () => Counters._lastPage;
  static incrementBookmarksCounter = () => Counters._bookmarksCount += 1;
  static decrementBookmarksCounter = () => Counters._bookmarksCount -= 1;
}

const {
  getCurrentPage,
  setCurrentPage,
  getLastPage,
  incrementBookmarksCounter,
  decrementBookmarksCounter
} = Counters;

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
  incrementBookmarksCounter();
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
 * Renders bookmarks list and paginator
 *
 * @param {string} pageStr - Page / relative page to display.
 */
function displayBookmarks(_page: number|null) {
  console.log('function displayBookmarks, page:', _page);
  const page: number = _page || getCurrentPage();
  setCurrentPage(page);
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
  // clear the current contents
  paginator.innerHTML = '';
  setCurrentPage(page);
  const currentPage: number = getCurrentPage();
  const buttonDefinitions: PaginatorItem[] = getButtonDefinitions(currentPage);
  buttonDefinitions
    .forEach((link) => paginator.appendChild(getPaginatorElement(link)));
  addPaginatorEventListeners('paginator-button', 'click', onPaginatorClick);
}

function getButtonDefinitions(currentPage: number) {
  const lastPage = getLastPage();
  return [{ // <<
    display: "<i class='material-icons'>fast_rewind</i>",
    page: 1,
    class: currentPage === 1 ? "disabled" : ""
    // }, { // prev
    //   display: "<i class='material-icons reversed'>play_arrow</i>",
    //   page: currentPage - 1,
    //   class: currentPage === 1 ? "disabled" : ""
  }, { // -1
    display: "" + (currentPage - 1),
    page: currentPage - 1,
    class: (currentPage - 1) < 1 ? "invisible" : ""
  }, { // current
    display: "" + currentPage,
    page: currentPage,
    class: "current"
  }, { // + 1
    display: "" + (currentPage + 1),
    page: currentPage + 1,
    class: currentPage === lastPage ? "invisible" : ""
    // }, { // >
    //   display: "<i class='material-icons'>play_arrow</i>",
    //   page: currentPage + 1,
    //   class: currentPage === lastPage ? "disabled" : ""
    }, { // >>
    display: "<i class='material-icons'>fast_forward</i>",
    page: lastPage,
    class: currentPage === lastPage ? "disabled" : ""
  }]
}

function getPaginatorElement(linksObj: PaginatorItem): Element {
  const btn = document.createElement("li");
  btn.innerHTML = linksObj.display;
  btn.className = `${PAGINATOR_BUTTON_CLASS} ${linksObj.class}`;
  btn.dataset.navString = "" + linksObj.page;
  return btn;
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
  const paginatorButton = paginatorElem.path
    .find((pathElement: Element) => {
      return pathElement.className.includes('paginator-button');
    });
  const targetPage: number|null = +paginatorButton.dataset["navString"] || null;
  displayBookmarks(targetPage);
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
  Array.from(elements)
    .forEach((element) => {
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
function addPaginatorEventListeners(
  className: string,
  eventType: string,
  eventHandlerFunction: Function
  ): void {
  console.log('function addPaginatorEventListeners');
  const elements = document.getElementsByClassName(className);
  Array.from(elements)
    .filter(element => !element.classList.contains("disabled"))
    .filter(element => !element.classList.contains("invisible"))
    .filter(element => !element.classList.contains("current"))
    .forEach((element) => {
      element.addEventListener(eventType, element => eventHandlerFunction(element), false);
    });
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
  console.log("deleteBookmark:");
  decrementBookmarksCounter();
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
  displayBookmarks(1);
}

main();
