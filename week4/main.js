let arrayX = ["The Wealth of Nations ","Das Kapital ","The General Theory of Employment, Interest, and Money ","The Road to Serfdom ","The Shock Doctrine: The Rise of Disaster Capitalism ","Debt: The First 5,000 Years ","Economics in One Lesson: The Shortest & Surest Way to Understand Basic Economics ","Capital in the Twenty-First Century ","Naked Economics: Undressing the Dismal Science","Basic Economics: A Citizen's Guide to the Economy "]

/*
function printArray(arrayX) {
     for (i = 0; i < arrayX.length; i++) {
     document.write("<ul><li> " + arrayX[i] + "</li></ul>")
     }
    }
printArray(arrayX);
*/

let objectBooks = {};

objectBooks[arrayX[0]] = {
    title:"The Wealth of Nations",
    language:"English",
    author:" Adam Smith",
    img:  "https://images.gr-assets.com/books/1348433328l/25698.jpg"
    }

objectBooks[arrayX[1]] = {   
    title:"Das Kapital",
    language:"English",
    author:" Karl Marx  ",
    img:  "https://images.gr-assets.com/books/1388289025l/238953.jpg"
    }

objectBooks[arrayX[2]] = {  
    title:"The General Theory of Employment, Interest, and Money ",
    language:"English",
    author:" John Maynard Keynes  ",
    img:  "https://images.gr-assets.com/books/1415594896l/303615.jpg"
    }

objectBooks[arrayX[3]] = {  
    title:"	The Road to Serfdom  ",
    language:"English",
    author:"  Friedrich A. Hayek    ",
    img:  "https://images.gr-assets.com/books/1327787673l/299215.jpg"
    }

objectBooks[arrayX[4]] = {  
    title:"	The Shock Doctrine: The Rise of Disaster Capitalism ",
    language:"English",
    author:"  Naomi Klein    ",
    img:  "https://images.gr-assets.com/books/1442590618l/1237300.jpg"
    }

objectBooks[arrayX[5]] = {  
    title:"Debt: The First 5,000 Years  ",
    language:"English",
    author:" David Graeber   ",
    img:  "https://images.gr-assets.com/books/1390408633l/6617037.jpg"
    }

objectBooks[arrayX[6]] = {  
    title:"Economics in One Lesson: The Shortest & Surest Way to Understand Basic Economics  ",
    language:"English",
    author:"  Henry Hazlitt   ",
    img:  "https://images.gr-assets.com/books/1320423284l/3028.jpg"
    }

objectBooks[arrayX[7]] = {  
    title:"	Capital in the Twenty-First Century ",
    language:"English",
    author:" homas Piketty    ",
    img:  "https://images.gr-assets.com/books/1390111547l/18736925.jpg"
    }

objectBooks[arrayX[8]] = {  
    title:"Naked Economics: Undressing the Dismal Science ",
    language:"English",
    author:"  Charles Wheelan    ",
    img:  "https://images.gr-assets.com/books/1388217711l/33293.jpg"
    }

objectBooks[arrayX[9]] = {  
    title:"Basic Economics: A Citizen's Guide to the Economy  ",
    language:"English",
    author:"  Thomas Sowell ",
    img:  "https://images.gr-assets.com/books/1388328985l/3023.jpg"
    }


    function printBooksObj(obj) {
      
    
        for (let i = 0; i < Object.keys(obj).length; i++){
            document.write("<ul>" + "<li>" + obj[arrayX[i]].title.replace(/['"]+/g, '') + "</li>" +  "<li>" +   obj[arrayX[i]].language.replace(/['"]+/g, '') + "</li>" + "<li>" +  obj[arrayX[i]].author.replace(/['"]+/g, '') + "</li>" + "<li><img src=" + obj[arrayX[i]].img + "></img></li>" +  "</ul>")
        }
       
    }
    
    printBooksObj(objectBooks);   
