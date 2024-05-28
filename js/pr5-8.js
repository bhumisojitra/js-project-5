const words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
let pr588 = document.querySelector('.pr588')

const less = words.filter((words) => words.length > 8);

pr588.innerHTML = less;