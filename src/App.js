
// import React, { useState, useEffect } from 'react'


// export default function App() {
//   const [repositories, setRepositories] = useState([]);

//   useEffect(  () => {

//     async function response () {
//       const response = await fetch('https://api.github.com/users/rodrigonex/repos');
//       const data = await response.json();
//       setRepositories(data);
//     }

//     response();
   
//   }, []);

//   useEffect(() => {
//     const filtered = repositories.filter(repo => repo.favorite);

//     document.title = `Você tem ${filtered.length} favoritos.`;
//   })

//   function hendleFavorite (id) {
//     const newRepositories = repositories.map(repo => {
//       return repo.id === id ? {...repo, favorite: !repo.favorite } : repo;
//     })

//     setRepositories(newRepositories);
//   }
//   return (
//     <div>
//       <ul>
//         {repositories.map(repo => {
//           return (
//             <li key={repo.id}>{repo.name}
//             {repo.favorite && <span> (Favorito) </span>}
//               <button onClick={() => hendleFavorite(repo.id)}>Favorites</button>
//             </li>
//           )
//         })}
//       </ul>
//     </div>
//   )
// }

import React, { useState } from 'react'
import Form from './Form'
import Table from './Table'

export default function App() {

  const [character, setCharacter] = useState([]);
  const [isAtualiza, setIsAtualiza] = useState(false);
  const [indexAtualiza, setIndexAtualiza] = useState();

  function atualizaCharacter(nome, job) {
    
    let formCharacter = {
      nome: nome,
      job: job,
    }
    if(formCharacter.nome === '' || formCharacter.job === ''){

      alert("Nome ou Job esta em branco");

    }else{

      if(isAtualiza === false){

        setCharacter([...character, formCharacter]);

      }else{

        let filter = character.filter( (character, i) => {
          return i !== indexAtualiza;
        })
        
        setCharacter([...filter, formCharacter]);
        
      }
  
      console.log(character);
  
  
  
      document.getElementById('usuario').value = '';
      document.getElementById('job').value = '';
  
    }

  }

  function removeCharacter(index){
    let filter = character.filter( (character, i) => {
      return i !== index;
    })
    
    setCharacter(filter);
  }

  function atualizarCharacter(index){
    let filter = character.filter((character, i) => {
      return i === index;
    })

    document.getElementById('usuario').value = filter[0].nome;
    document.getElementById('job').value = filter[0].job;

    setIsAtualiza(true);
    setIndexAtualiza(index);
  }

  return (
    <div className="container  border rounded">
      <div className="row">
        <div className="col-md-12 mt-4" >
          <h1 className="text-md-center">Lista de Jobs</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3"></div>
        <Form onChange={atualizaCharacter}/>
        <div className="col-md-3"></div>
      </div>
      <div className="row">
      <div className="col-md-2"></div>
        <Table dataCharacter={character} onDelete={removeCharacter} atualizaChar={atualizarCharacter}/>
        <div className="col-md-2"></div> 
      </div>
    </div>
  )
}

