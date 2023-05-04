const React = require('react')

class New extends React.Component{
    render() {
        return (
            <div>
            <h1>Create a New Pokemon</h1>
            <form action='/pokemon' method='POST'>
                Name: <input type='text' name='name' /><br />
                Image:<input type='text' name='url' placeholder='Enter image URL'/><br />
                Add to database:<input type='checkbox' name='database'/><br />
                <input type='submit' value='Create a Pokemon'/>
            </form>
            </div>
        )
    }
}

module.exports = New