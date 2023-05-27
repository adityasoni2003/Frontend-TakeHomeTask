import person from '../assets/person.png'

const Card = ()=>{
    return <div className="card">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae voluptate placeat reiciendis pariatur deleniti atque et excepturi alias animi? Possimus sint consequatur dolor labore libero fugit tempore quis impedit neque pariatur, ipsum autem culpa officia molestias! Recusandae beatae ratione debitis architecto ipsa? Tempore voluptatem odit deserunt nihil culpa et sapiente!</p>
        <div className="person">
            <img src={person} alt="" />
            <h4>Michelle Ann</h4>
            <p>New York ,USA</p>
        </div>
    
    </div>
}

export default Card