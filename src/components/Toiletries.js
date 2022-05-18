const Toiletries = (props) => {


    const toiletries = [
        {
            item: "Toothbrush"
        },
        {
            item: "Toothpaste"
        },
        {
            item: "Deodorant"
        },
        {
            item: "Shampoo"
        },
        {
            item: "Conditioner"
        },
        {
            item: "Bodywash"
        },
        {
            item: "Lotion"
        },
        {
            item: "Sunscreen"
        },
        {
            item: "Razor"
        },
        {
            item: "Hair dryer"
        },
        {
            item: "Brush"
        },
        {
            item: "Fragrance"
        },

    ];


    return(
        <div className='listitem-container'>
            <div className='list-header'>
            <h1 >Toiletries</h1>
            </div>
            <>
            {toiletries.map((item)=>{
                return(
                    <div className='listitem'>
                        <div className="listitem-name">
                            <input type='checkbox' />
                            <label class="strikethrough" for='item'> {item.item}</label>
                        </div>
                        <div className="delete-button">
                            <button>&#x1F5D1;</button>
                        </div>
                    </div>
                )})}
            </>
            <div>
                <form className='listitem'>
                    <input className = 'new-item' type='text' placeholder="Add new item"/>
                    <button className='add-item'>+</button>
                </form>
            </div>
        </div>
    )
}

export default Toiletries;