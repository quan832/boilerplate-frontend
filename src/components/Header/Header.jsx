import React from 'react'

export default function Header() {
    return (
        <header className="mb-3 border-bottom flex-x align-items-center" style={{ background: "#fff", height: '80px' }}>
            <div className="container" style={{ maxWidth: "1550px" }}>
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        {/* <li><a href="#" class="nav-link px-2 link-secondary">Overview</a></li> */}
                    </ul>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                    </form>
                    <div className="dropdown text-end">
                        <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="mdo" width={32} height={32} className="rounded-circle" />
                        </a>
                        <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1" style={{}}>
                            <li><a className="dropdown-item" href="#">New project...</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>

    )

}
