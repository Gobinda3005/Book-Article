import cu from './Images/cu.jpg'
import './bl.css'
import Home from './components/Home.js'
function BookList ()
{
    return (
        <div>
                <Home />
                <div>
                  <h2 className='text-center'>Connection<span className='badge bg-danger text-light'>Unleashed</span></h2>
                </div>
                <a href="https://notionpress.com/read/connections-unleashed" target="_blank"><img src={cu} className="logo" alt="Gobinda logo" /></a>
                
        </div>
    )
}
export default BookList