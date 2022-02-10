import React, {useState, useEffect, createContext} from 'react';

export const DataContext = createContext();

export const ContextProvider = (props) => {

    const [data, setData] = useState([]);
    const [gifUrl, setGifUrl] = useState();
    const [searchText, setSearchText] = useState("");
    const [searchedPosts, setSearchedPosts] = useState([]);

    // add data
    function addData(items) {
        const newData = { ...items }
        setData([...data, newData])
    }

    // run once on page reload
    useEffect(() => getLocalData(), []);
    
    // saving data to localStorage on updation
    useEffect(() => localStorage.setItem('data', JSON.stringify(data)));

    // getting data from localStorage
    const getLocalData = () => {
        if(localStorage.getItem('data') === null) {
          localStorage.setItem('data', JSON.stringify([]))
        } else {
          let localData = JSON.parse(localStorage.getItem('data'))
          setData(localData)
        }
    }

    // import data to components
    const importObj = {
        data,
        setData,
        addData,
        gifUrl,
        setGifUrl,
        searchText,
        setSearchText,
        searchedPosts,
        setSearchedPosts
    };

    return (
        <DataContext.Provider value={importObj}>
            {props.children}
        </DataContext.Provider>
    )
}