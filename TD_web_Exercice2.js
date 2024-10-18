// Objet initial
const student = {
    name: "Marie",
    age: 20,
    courses: []
  };
  
  // Modifier la propriété 'age'
  student.age = 21;
  
  // Ajouter une nouvelle propriété 'grade'
  student.grade = "A";
  
  // Ajouter les éléments au tableau 'courses' avec push
  student.courses.push("Math", "Physics", "Chemistry");
  
  // Trouver l'index de 'Physics' avec indexOf
  const physicsIndex = student.courses.indexOf("Physics");
  
  // Créer un nouveau tableau avec les deux premiers éléments du tableau 'courses' avec slice
  const firstTwoCourses = student.courses.slice(0, 2);
  
  // Afficher les résultats dans la console
  console.log("Updated student object:", student);
  console.log("Index of 'Physics':", physicsIndex);
  console.log("First two courses:", firstTwoCourses);
  