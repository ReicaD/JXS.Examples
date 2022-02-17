import react from 'react'


function Article() {
   
    function formatName(user) {
        return user.firstName + ' ' + user.lastName;
      }
      
      const user = {
        firstName: 'Harper',
        lastName: 'Perez'
      };
      
     
      return (
          <div><p>People of {user.firstName}</p></div>
          
      );
       
      
  
}

// console.log(firstName[1])

export default Article;