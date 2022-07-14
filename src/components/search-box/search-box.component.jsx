import './search-box-styles.css'

const SearchBox = (props) => {
    const { onChangeHandler, placeholder, classname } = props;

    return (
        <input
            type='search'
            className={`search-box ${classname}`}
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    )
}


export default SearchBox;