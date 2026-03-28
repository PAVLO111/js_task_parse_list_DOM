'use strict';

// const getList = [...document.getElementsByTagName('li')];

// const names = getList.map((item) => item.textContent.trim());

// console.log(names);
// console.dir(names);

// const getList = [...document.getElementsByTagName('li')];
// const salary = getList.map((el) => el.dataset.salary);
// console.log(salary);


// console.log(document.body.dataset.salary);



// const arrtibuteSalary = [...element.getAttribute('data-salary')];
// const salary = arrtibuteSalary.map((el) => el.textContent);


// arrtibuteSalary.forEach((item) => console.log(item.textContent));

// console.log(salary);
// console.dir(salary);




function sortList(list) {
  const getList = [...document.getElementsByTagName('li')];

  const listObj = getList.map((item) => ({
    name: item.textContent.trim(),

    salary: Number(item.dataset.salary),
  }));

  listObj.sort((a, b) => b.salary - a.salary);

  return listObj;
}

const res = sortList();
console.table(res);
console.log(res);
console.dir(res);



