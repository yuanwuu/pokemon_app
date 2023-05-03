const React = require('react')

class Show extends React.Component{
    render() {
        const {pokemon} = this.props
        return (
            <>
                <div>
                    <h1> Gotta Catch 'Em All </h1>
                    <br/>
                    <h2> {pokemon.name} </h2>
                    <br/>
                    <img src={`${pokemon.img}.jpg`} alt={pokemon.name}></img>
                    <br/>
                    <a href={`/pokemon`}>Back</a>
                    
                </div>
            </>
        )
    }
}

module.exports = Show;