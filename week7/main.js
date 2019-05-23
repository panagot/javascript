console.log("hello");

class Movie {
  constructor(title, director) {
    this.title = title;
    this.name = director;
    this.stars = [];
    this.writers = [];
    this.ratings = [];
  }

  getTitle() {
    // add your code here
    return this.title;
  }

  getDirector() {
     // add your code here
    return this.director;
  }

  addStar(star) {
    // add your code here
    this.stars.push(star);
  }

  getStars() {
    // add your code here
    return this.stars;
  }

  addWriter(writer) {
    // add your code here
     this.writers.push(writer);
  }

  getWriters() {
    // add your code here
    return this.writer;
  }
  

  addRating(rating) {
    // add your code here
    this.ratings.push(rating);
  }

  getAverageRating() {
    // add your code here
    let averageRating =0;
    for (let i = 0; i < this.ratings.length; i++){
      averageRating += this.ratings[i];
   }
   return averageRating / this.ratings.length;

  }

  // ... Add yours :-) Look to IMDB for inspiration
}

class StaffMember{
  constructor(name, role, dateOfBirth) {
    // add your code here
    this.name = name;
    this.role = role;
    this.dateOfBirth = new Date(dateOfBirth);
    this.movies = [];
    
    
  }

  addMovie(movie) {
    // add your code here
    this.movies.push(movie);
  }

  getName() {
    // add your code here
    return this.name;
    
  }

  getRole() {
    // add your code here
    return this.role;
  }

  getAge() {
    // add your code here
    let currentYear = new Date().getFullYear();
    const age = currentYear - this.dateOfBirth.getFullYear();
    console.log("Actor Harrison Ford current age is " + age);
    return age;
  }
}

// Pick your favorite movie from http://www.imdb.com/

const myMovie = new Movie("Indiana Jones", "Steven Spielberg");

const firstActor = new StaffMember("Harrison Ford", "Indiana Jones", "07-13-1942");
myMovie.addStar(firstActor);
// create and add more staff members

// Make sure that the following actions work.
console.log(myMovie.getStars().map(actor => `${actor.getName()} ${actor.getRole()} ${actor.getAge()}`));
const director = myMovie.getDirector();
//console.log(`Director: ${director.getName()}`);
