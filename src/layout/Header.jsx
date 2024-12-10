import './Header.css'
import Avatar from '@mui/joy/Avatar';
import logoapp from  './../assets/logoapp.png'


function Header() {
    return(
    <>
        <section>
            <div className='bg-white p-4 flex justify-between items-center'>
            <img src={logoapp} alt="Logo do aplicativo" className="w-13 h-7 cursor-pointer" />
            <Avatar variant='plain' color='' className='cursor-pointer hover:shadow-inner'/>
            </div>
        </section>
    </>
    )
}

export default Header
