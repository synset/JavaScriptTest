function filterByAge(input) {

    let minAge = Number(input[0]);

    let person1 = {
        name : input[1],
        age : Number(input[2])
    };

    let person2 = {
        name : input[3],
        age : Number(input[4])
    };

    let persons = [person1, person2];

    const newPersons = persons.filter(function (person){
        if (person.age >= 12)
        console.log("Name: " + person.name + " Age: " + person.age );
    });
}

filterByAge(['12', 'Ivan', '15', 'Asen', '9']);