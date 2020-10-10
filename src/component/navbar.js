import React from 'react'

function Navbar(props) {
    return (
        <div className='row'>
            <div className='col-md-6 margin-top'>
            <h1 className='title'>Weather Forcast</h1>
            </div>
            <div className='col-md-6 margin-top'>
                <form className='region' onSubmit={(e)=>{props.onChangeLocation(e)}}>
                    <input className='region-input' type='text' placeholder="city name" 
                    onChange={(e)=>{props.changeInput(e.target.value)}}/>
                </form>
            </div>

        </div>

    )
}

export default Navbar