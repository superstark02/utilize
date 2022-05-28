export default function Pagination({ postsPerPage, totalPosts, paginate }) {
    const PageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        PageNumbers.push(i)
    }

    return (
        <div>
            <div className="pagination" >
                {PageNumbers.map(item => {
                    return (
                        <div key={item} className="pageItem" >
                            <a href="/!#" onClick={()=>{paginate(item)}} className="page-link" >
                                {item}
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}