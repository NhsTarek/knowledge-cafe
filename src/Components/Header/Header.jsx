import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between p-4  border-b-2'>
            <h3 className="text-3xl font-bold">Knowledge cafe</h3>
            <img src={profile}></img>
        </header>
    );
};

export default Header;