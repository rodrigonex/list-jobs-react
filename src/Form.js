import React from 'react'

export default function Form(props) {
    
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <form className="col-md-6 mt-5" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Nome</label>
                <input className="form-control" type="text" id="usuario" placeholder="Digite seu nome" />
            </div>

            <div className="form-group">
                <label>Jobs</label>
                <input className="form-control" type="text" id="job" placeholder="Digite seu job" />
            </div>
            <input className="btn btn-primary btn-block mt-4" type="submit" value="Salvar" onClick={() => props.onChange(document.querySelector('#usuario').value, document.querySelector('#job').value)}></input>
        </form>

    )
}
