import {useState, useEffect} from "react"
import axios from "axios"

const List = () => {
    let [lists, setLists] = useState([])
    
    useEffect(() => {
        axios.get("https://swapi.dev/api/people/")
        .then((res) => {
            console.log(res.data)
            setLists(res.data.results)
        })
        .catch((err) => {
            console.error(err)
        })
    },[])
    
    console.log(lists)
    
    const pLists = lists.map((list) => {
        return (
            <p>{list.name}さんは身長{list.height}cmです。</p>
        )
    })
    
    return (
        <div>
            <h2>starwars list</h2>
            {pLists}
        </div>
    )
}

export default List;