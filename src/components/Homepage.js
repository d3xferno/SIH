
import './Homepage.css'

export default function Homepage()
{
    return(
        <div>
            <div className='main-div'>

                    {/* <div class="content">
                    <h1>Heading</h1>
                    <p>Lorem ipsum...</p>
                    </div> */}
                <form className='form-table'>
                    <input id='login----field' type='email' name='login' autoFocus='autofocus' placeholder='Search Projects' required/>    
                </form>
                    <input
                        className='submit----button'
                        type='submit'
                        name='submit'
                        value='Sign Up'/>
                    <input
                        className='submit----button'
                        type='submit'
                        name='submit'
                        value='Sign In'/> 
            </div>
        </div>
    );
}