for (let p = 20; p >= 0; p--) {
    for (let d = 0; d <= p; d++) {
        document.write(`*`)
    }
    document.write('<br>')
}





//Описание задачи 
//Найти количество людей одного типа из массива и сохранить их в массив категории 
//В массиве категорий специально допущены ошибки (исходный массив менять нельзя)




let arr = [
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
{
    id: Math.random(),
    name: 'Maxmud',
    info: {
        school: '777',
        faculity: '3dsmax'
    },
},
{
    id: Math.random(),
    name: 'Muxammad',
    info: {
        school: '5555',
        faculity: 'Backend'
    },
},
]

let categories = [
{
    course: ' SMM',
    count: 0
},
{
    course: 'PROGRAMMING',
    count: 0
},
{
    course: '     3DSMAX',
    count: 0
},
{
    course: ' DIZAYN',
    count: 0
},
{       
    course: '   BACKEND',
    count: 0
},
]

for (let student of arr) {
    for (let item of categories) {
        item.course = item.course.trim()
        student.info.faculity = student.info.faculity.toUpperCase()
        if (student.info.faculity === item.course) {
            item.count++
        }
    }
}
console.log (categories)