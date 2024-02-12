import './header.scss'

function Header() {


    return (
        <header class="header">
            <nav class="navbar">
                <ul class="navbar-list">
                    <li class="navbar-item"><a href="#" class="navbar-link">Home</a></li>
                    <li class="navbar-item"><a href="#" class="navbar-link">About</a></li>
                    <li class="navbar-item">
                        <a href="#" class="navbar-link">Services</a>
                    </li>
                    <li class="navbar-item">
                        <a href="#" class="navbar-link">Portfolio</a>
                    </li>
                    <li class="navbar-item">
                        <a href="#" class="navbar-link">Cases</a>
                    </li>
                    <li class="navbar-item">
                        <a href="#" class="navbar-link">Knives</a>
                    </li>
                </ul>
            </nav>
        </header>
    )


}

export default Header