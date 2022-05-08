// Add your code here
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
// };
//     const configurationObject = {
//         method: "Post",
//         headers: {
//             "Content-type": "application/json",
//             Accept: "application/json",
//         },
//         body: JSON.stringify(formData),
//       }; 
// fetch('http://localhost:3000/dogs', configurationObject) 
// .then(function (response) {
//     return response.json();
// })
// .then(function (object) {
//     console.log(object);
// })
// .catch(function (error) {
//     alert("Bad things! Ragnorok!");
//     console.log(error.message);
// });
 



// })
// .then(function(users)){
//     console.log(users)

const p = document.querySelector('#info')
const para = document.querySelector('#append')
function submitData(userName, userEmail) {
    return fetch('http://localhost:3000/users',{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        })
    
     })
     .then(response => response.json())
     .then(users=>{ const newId = document.createTextNode(users.id)
         return para.appendChild(newId)}
         )
      .catch(error=>para.textContent += error.message)
    }

