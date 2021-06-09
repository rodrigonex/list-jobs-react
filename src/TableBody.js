import React from 'react'

export default function TableBody(props) {
    const rows = props.dataCharacter.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.nome}</td>
                <td>{row.job}</td>
                <td >
                    <button className="btn btn-danger" onClick={() => props.onDelete(index)} >Delete</button>
                    <button className="btn btn-primary ml-3" onClick={() => props.atualizaChar(index)} >Atualizar</button>
                </td>
            </tr>
        )
    })
    return (
        <tbody>{rows}</tbody>
    )
}
