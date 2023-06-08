const bookList = [
    {
        Name: "Turn enemy into a newt",
        IsEvil: true,
        EnergyReqired: 5.1
    },
    {
        Name:"Conjure some gold for a local charity",
        IsEvil:false,
        EnergyReqired: 2.99
    },
    {
        Name: "Give a deaf person the ability to heal",
        IsEvil: false,
        EnergyReqired: 12.2
    },
    {
        Name : "Make yourself emperor of the universe",
        IsEvil: true,
        EnergyReqired : 100.0
    },
    {
        Name : "Convince your relatives your political views are correct",
        IsEvil : false,
        EnergyReqired : 2921.5
    }

]



const GoodSpellBookList = ()=>{
    const goodBooks = []
    bookList.filter(book =>{
       
        if (!book.IsEvil){
            
            goodBooks.push(book) 
        }
       
    })
    goodBooks.map(book=>{
        console.log(book.Name)      
    })
    }

const EvilSpellBookList = ()=>{
        const evilBooks= []

        bookList.filter(book =>{
           
            if (book.IsEvil){
                
              evilBooks.push(book) 
            //    console.log( goodBooks.Name)    
    
            }
           
        })
        evilBooks.map(book=>{
            console.log(book.Name)
                
                
            })
    }

    console.log("Do you believe in magic?")
    console.log("Good Book")
    GoodSpellBookList ()
    console.log("Evil Book")
    EvilSpellBookList()  
      




// const filterBookList = ()=>{

//     console.log("Do you believe in magic?")
//     console.log("Good Book");

//     const sortedBookList = [...bookList].sort((a, b) => {
//         if (a.IsEvil === b.IsEvil) {
//             return 0;
//         } else if (a.IsEvil) {
//             return 1;
//         } else {
//             return -1;
//         }
//     });

//     sortedBookList.forEach(book => {
//         const goodBooks = []
//         const evilBooks = []
       
//         if (!book.IsEvil) { 
//             // console.log(book.Name);
//             goodBooks.push(book)
        
//         } else { 
//             // console.log(book.Name);
//             evilBooks.push(book)
//         }

//         goodBooks.map(book=>{
//             console.log(book.Name)
//         })

        
//         evilBooks.map(book=>{
//             console.log(book.Name)
//         })
//     });
// }

// filterBookList()






