import React from 'react'
import TableBody from './TableBody'
import TableHead from './TableHead'

export default function Table(props) {
    return (
        <table className="table table-striped table-bordered mt-5 col-md-8 text-md-center">
            <TableHead />
            <TableBody dataCharacter={props.dataCharacter} onDelete={props.onDelete} atualizaChar={props.atualizaChar}/>
        </table>
    )
}
