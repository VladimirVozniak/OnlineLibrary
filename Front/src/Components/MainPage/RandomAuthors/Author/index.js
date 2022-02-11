import './style.css'

export const Author = () => {
    return (
        <label className='author-icon'>
            <div className="author-img"/>
            <input type="radio" name="author" value={1} hidden/>
        </label>
    )
}