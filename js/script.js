/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/


//store the student list item elements
const studentList = document.querySelectorAll('.student-item');

//store the number of items to show on each “page”, which for this project, is 10
const perPage = 10;

//create node to store buttons
const pageListNode = document.createElement('div');
pageListNode.className = 'pagination';

/*** 
   `showPage` function
   - hides all of the items in the list, except for the given range
   - The 'list' parameter represents the actual list of students
   - The 'page' parameter represents the page number
***/
function showPage(list, page) {
   const startIndex = (page * perPage) - perPage;
   const endIndex = (page * perPage) - 1;
   
   for (let i = 0; i < list.length; i += 1) {
      list[i].style.display = 'none';
    }
  
    for (let i = 0; i < list.length; i += 1) {
      if (i >= startIndex && i <= endIndex){
        list[i].style.display = 'block';
      }
    }
  }
  
/**
 * `appendPageLinks` function
 * - creates and appends functioning pagination links
 */
function appendPageLinks(studentList){
   const listLength = studentList.length;
   const pagesNeeded = Math.ceil(listLength / perPage);
   const studentListNode = document.querySelector('ul.student-list');
         
   //create & append child node of list items to store pagination links
   const paginationLinks = document.createElement('ul')
   pageListNode.appendChild(paginationLinks);

   //append page links section to bottom of page
   const referenceNode = document.querySelector('div.page');
   referenceNode.insertBefore( pageListNode, studentListNode.nextSibling);


   //generate the number of links needed
   for (let i = 0; i < pagesNeeded; i += 1){
      let pageLinkLi = document.createElement('li');
      let pageLinkA = document.createElement('a');
      const pageNumber = i + 1;
      pageLinkA.setAttribute('href', '#');
      pageLinkA.innerText = pageNumber;
      pageLinkLi.appendChild(pageLinkA);
      paginationLinks.appendChild(pageLinkLi);
   }
   
   //set the first page as active
   const firstPageLink = paginationLinks.firstElementChild.firstElementChild;
   firstPageLink.className = 'active';

}

/**
 * event handler for page links
 */
pageListNode.addEventListener('click', (e) => {
   if (e.target.tagName === 'A'){
      const listItems = document.querySelectorAll('.pagination ul li');
            
      //remove active class from all list items
      for (let i = 0; i < listItems.length; i += 1){
         listItems[i].firstElementChild.className = '';
      }

      //set active class to the page link clicked
      e.target.className = 'active';

      //capture the desired page number
      const page = e.target.innerText;

      //show the selected page
      showPage(studentList, page);
   }


})

//call functions
showPage(studentList, 1);
appendPageLinks(studentList);