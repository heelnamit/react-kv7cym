import React, {useState} from 'react'


export const Card = ({ user, index }) => {
   

    return (
        <div className={classes.Card} key={index}>
            <h1>Customer Info</h1>
            <hr></hr>
           
            { (user.first_name || customer_lastname) &&
                <h2>{user.first_name} {user.last_name}</h2>
            }
            { user.email &&
                <p>Email: {user.email}</p>
            }
      
            
        </div>
    )
}
